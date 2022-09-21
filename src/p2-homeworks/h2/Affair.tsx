import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "./button/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }
    // need to fix
    const priorityClass = s.item + ' ' + s[props.affair.priority]
    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <SuperButton className={s.item + ' ' + s.buttonDelete} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
