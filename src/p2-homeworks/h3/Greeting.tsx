import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "./input/SuperInputText";
import SuperButton from "./Button/SuperButton";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean// need to fix any
    totalUsers: number // need to fix any
    onKeyDownAddTask: (e: KeyboardEvent<HTMLInputElement>) => void
    UserMessage: any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownAddTask, UserMessage} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const buttonClass = s.button
    return (
        <div className={s.someClass}>
            <div>
                <SuperInputText
                    value={name} onChange={setNameCallback} className={inputClass}
                    onKeyDown={onKeyDownAddTask}
                />
                <span>{error}</span>
                <SuperButton
                    onClick={addUser}
                    className={buttonClass}>add</SuperButton>
                <span className={s.span}>{totalUsers}</span>
            </div>
            <div>{UserMessage}</div>
        </div>

    )
}

export default Greeting
