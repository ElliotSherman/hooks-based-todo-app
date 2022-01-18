import { useState } from "react";

export default (initialValue)=>{
    const [value,setValue] = useState(initialValue);
    const handeleChange = (e)=>{
        setValue(e.target.value);
    };
    const reset = () =>{
        setValue('')
    };
    return [value , handeleChange , reset]
};