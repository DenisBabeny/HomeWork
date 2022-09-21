import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'
function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PlUS} className={s.link} activeClassName={s.active}>Junior++</NavLink>
           <img src={"https://i.pinimg.com/736x/6e/e5/fa/6ee5fa5a18e43483225e73249624d11d--typography-design.jpg"} className={s.img} alt={'image'}/>
        </div>
    )
}

export default Header
