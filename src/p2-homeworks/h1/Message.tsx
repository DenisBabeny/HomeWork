import React from 'react'
import style from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessageType) {
    return (
        <div className={style.message}>
            <img className={style.img} src={props.avatar} alt={"image"}/>

            <div className={style.angle}/>

            <div className={style.aria}>
                <h2 className={style.name}>{props.name}</h2>
                <p className={style.text}>{props.message}</p>
                <div className={style.time}>{props.time}</div>
            </div>

        </div>

    )
}

export default Message
