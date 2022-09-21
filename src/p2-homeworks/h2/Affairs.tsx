import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"
import SuperButton from "./button/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType[];
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (id: number) => void;
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        return props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.someClass}>

            {mappedAffairs}
            <div>
                <SuperButton  onClick={setAll} className={s.buttonSelected}>All</SuperButton>
                <SuperButton onClick={setHigh} className={s.buttonSelected}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={s.buttonSelected}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={s.buttonSelected}>Low</SuperButton>
            </div>



        </div>
    )
}

export default Affairs
