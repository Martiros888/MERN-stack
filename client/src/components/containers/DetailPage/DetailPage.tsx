import React, { useState, useEffect, useMemo, useRef, memo, FC, } from 'react';
import { Route, Switch, NavLink, Link, useHistory } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { action } from '../../redux/actions/action';
// import Media from '../../media';
import './DetailPage.scss';
import axios from 'axios';
import 'react-scroll';
//types
import { axiosType, Redux } from '../../types/types';

let Container1:FC = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const [state, setState] = useState('');

    const data = useSelector((state:Redux) => state.Reducer.data);
    const logout =async ():Promise<void> => {
        localStorage.removeItem('secret')
        history.push('/')
    }
    const deleteUser =async ():Promise<void> => {
        let postToBack: axiosType = await axios.post("/deleteUser",data);
        localStorage.removeItem('secret')
        history.push('/')
    }
    return (
        <>
            <section className='container1'>
                    {JSON.stringify(data,null,2)}
                    <button onClick={logout}>logout</button>
                    <button onClick={deleteUser}>delete</button>
            </section>
        </>
    )
}

export default Container1 = memo(Container1);

        