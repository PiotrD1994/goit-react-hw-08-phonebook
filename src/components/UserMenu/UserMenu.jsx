import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations.js";
import {selectUser} from "../../redux/auth/selectors.js"
import { useSelector } from "react-redux";
import css from './UserMenu.module.css'

export const UserMenu = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
return (
    <div>
        <p className={css.header}>Welcome to Phonebook {user.name}</p>
        <button className={css.button} type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </div>
)
}