import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean// need to fix any
    totalUsers: number // need to fix any
    onKeyDownAddTask: (e:KeyboardEvent<HTMLInputElement>)=>void
    UserMessage: any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownAddTask, UserMessage} // деструктуризация пропсов
) => {
    const inputClass = s.error  // need to fix with (?:)
const buttonClass = s.button
    return (
        <div className={s.someClass}>
            <div>
                <input value={name} onChange={setNameCallback} className={error ? s.error : ''} onKeyDown={onKeyDownAddTask}/>
                <span>{error}</span>
                <button onClick={addUser} className={buttonClass}>add</button>
                <span className={s.span}>{totalUsers}</span>
            </div>
            <div>{UserMessage}</div>
        </div>

    )
}

export default Greeting
