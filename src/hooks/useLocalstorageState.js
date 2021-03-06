import { useState,useEffect } from "react";

export default function useLocalstorageState(key, defaultValue){
    // make piece of state, baed of of the value in LocalStorage (or default)
    const  [state,setState] = useState(()=>{
        let val;
        try{
            val = JSON.parse(window.localStorage.getItem(key)|| String(defaultValue))
        }
        catch (e){
            val = defaultValue;
        }
        return val;
    });
    // use useEffect to update LocalStorage when state changes
    useEffect(()=>{
        window.localStorage.setItem(key,JSON.stringify(state));
    }, [state]);
    return [state,setState]
}