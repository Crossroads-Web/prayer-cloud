import React, {useState, useEffect} from "react";

export default function usePersistedState(name, defaultValue) {
    const [param, setParam] = useState(() =>{
        const persitParam = window.sessionStorage.getItem(name);
        return persitParam !== null ? JSON.parse(persitParam) : defaultValue
    });

    useEffect(() =>{
        window.sessionStorage.setItem(name, JSON.stringify(param));
    }, [name, param]);

    return [param, setParam];
}