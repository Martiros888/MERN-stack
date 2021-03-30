import React, { useState, useEffect, useMemo, useRef, memo, FC, } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
// import Media from '../../media';
import axios from 'axios';
import 'react-scroll';
//types

let Container:FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const [state, setState] = useState('');

    const arr = useSelector((state:Redux) => state.Reducer.arr);

    return (
        <>
            <section className=''>
                you do it
            </section>
        </>
    )
}

export default Container = memo(Container);