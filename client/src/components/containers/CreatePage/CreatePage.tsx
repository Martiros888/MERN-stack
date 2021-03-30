import React, { useState, useEffect, useMemo, useRef, memo, FC, } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { action } from '../../redux/actions/action';
// import Media from '../../media';
import './CreatePage.scss';
import axios from 'axios';
import 'react-scroll';
//types
import { Redux } from '../../types/types';

let Container1:FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const [state, setState] = useState('');

    const arr = useSelector((state:Redux) => state.Reducer.arr);

    return (
        <>
            <section className='container1'>
                CreatePage
            </section>
        </>
    )
}

export default Container1 = memo(Container1);

        