
import React from 'react'
interface IMsg {
    value:number|undefined
}
export default function Msg(props:IMsg) {
    return(
        <div>
            {props.value}
        </div>
    )
}