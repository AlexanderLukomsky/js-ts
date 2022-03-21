import { useState, MouseEvent } from "react";

export const User = () => {
    let [a, setA] = useState(1)
    let s = 1


    const fn1 = (e: MouseEvent<HTMLButtonElement>) => {
        setInterval(() => {
            setA(s++)
        }, 1000)
    }
    const fn2 = () => {
        console.log('fn2');
    }
    return (
        <div>
            <input type="text" value={`value: ${a}`} onBlur={fn2} />
            <button onClick={fn1}>f{a}</button>
            <button onClick={fn2}>f2</button>
        </div>
    )
}

