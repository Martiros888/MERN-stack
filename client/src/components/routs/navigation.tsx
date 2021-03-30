import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { action } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
//types
import { Redux } from '../types/types';
function Navigation() {

    const dispatch = useDispatch()

    const redux = useSelector((state:Redux) => state.Reducer.arr)

    return (
            <>
                {/* <nav>
                    <ul>
                        <li>
                            <NavLink exact to='/'></NavLink>
                        </li>
                        <li>
                            <NavLink to='/'></NavLink>
                        </li>
                        <li>
                            <NavLink to='/'></NavLink>
                        </li>
                        <li>
                            <NavLink to='/'></NavLink>
                        </li>
                    </ul>
                </nav> */}
            </>
    )
}    
export default  Navigation