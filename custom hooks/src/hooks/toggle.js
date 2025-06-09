import { useState } from "react";

export function useToggle(initialValue = false){
    const [value, setValue] = useState(initialValue);
    const toggle = ()=>{
        setValue((prev)=>!prev)
    }
    document.body.style.backgroundColor = value ? 'black' : 'white';
    document.body.style.color = value ? 'white' : 'black';

    return[value , toggle]
}