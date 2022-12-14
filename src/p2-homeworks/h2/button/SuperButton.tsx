import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from '../Affairs.module.css'
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
         className,
        ...restProps
    }
) => {
    return (
        <button
            className={className}
            {...restProps}
        />
    )
}

export default SuperButton
