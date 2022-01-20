// we will useState
// we will return a piece of state AND a function to toggle the state
import {useState} from 'react';
export default function useToggle(initialValue = false){
    const [state,setState] = useState(initialValue);
    const toggle = ()=>{
        setState(!state)
    };
    return [state , toggle];
};
