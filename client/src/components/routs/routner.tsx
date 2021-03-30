import React, { useState, useEffect, useMemo, useRef, memo, FC } from "react";
import { Route, Switch, NavLink, Link, Redirect, Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../redux/actions/action";
// import Media from '../../media';
import axios from "axios";
import "react-scroll";
import AuthPage from "../containers/AuthPage/AuthPage";
import LinksPage from "../containers/LinksPage/LinksPage";
import CreatePage from "../containers/CreatePage/CreatePage";
import DetailPage from "../containers/DetailPage/DetailPage";
//types
import { Redux } from "../types/types";

let Routes: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {}, []);

    const variable = useSelector((state:Redux) => state.Reducer.variable);

    const arr = useSelector((state: Redux) => state.Reducer.arr);
    const url = useSelector((state:Redux) => state.Reducer.url);
    if (variable === true) {
        return (
            <>
                <div className="">
                    <Switch>
                        <Route path="/links" component={LinksPage} exact ></Route>
                        <Route path="/create" component={CreatePage}></Route>
                        <Route path={`/user/${url}`} component={DetailPage}></Route>
                        <Route path='/' component={AuthPage} ></Route>
                        <Redirect to='/' />
                    </Switch>
                </div>
            </>
        );
    }
    return (
        <Switch>
            <Route path='/' component={AuthPage} exact></Route>
            <Redirect to='/'/>
        </Switch>
    )
};

export default Routes = memo(Routes);
