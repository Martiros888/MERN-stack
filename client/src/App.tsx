import React, { useState, useEffect, useMemo, useRef, memo, FC } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { action } from './components/redux/actions/action';
import {animateScroll as scroll} from 'react-scroll';
import {useSelector,useDispatch} from 'react-redux';
import 'react-scroll'
import './App.css';
import Navigation from './components/routs/navigation';
import Routs from './components/routs/routner';
import { Redux } from './components/types/types';
// import Media from './components/media';
import axios from 'axios';
let App:FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    const [state, setstate] = useState('')

    const redux = useSelector((state:Redux) => state.Reducer.arr)
    const click =async ():Promise<void> => {
        let postToBack = await axios.post('/getFile')
        dispatch({type:'DATA',payload:postToBack.data})
    }
    return(
        <>
            <Navigation />
            <Routs/>
            <button onClick={click}>click for get</button>
        </>
    )
}


export default App = memo(App);