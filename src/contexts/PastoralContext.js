import { async } from "@firebase/util";
import React, { useState, createContext, useCallback, useEffect } from "react";
import { Fetch } from "../hooks/use-fetch-hook";

export const PastoralContext = createContext(null);

export const PastoralProvider = ({children}) => { 
    const [followUps, setFollowUps] = useState(null);
    const [followUp, setFollowUp] = useState(null);
    const [isUpdated, setIsUpdated] = useState(false);
    const [canUpdate, setCanUpdate] = useState(false);


    const getFollowUps = async() => {
        const url = 'https://anyonepraybackend.com/call_details/all_follow_ups';
        
        var options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cHA6cHBw',
            }
        }       

        const result = await fetch(url,options);

        return await result.json();
    }

    const getFollowUp = async(id) => {
        const url = 'https://anyonepraybackend.com/call_detail';
        var options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cHA6cHBw',
            }, 
            body: JSON.stringify({id})
        }       

        const result = await Fetch(url, options);
       // console.log(result.data)
        setFollowUp(result.data);
    }

    const updateFollowUp = async(id, status) =>{
        const url = 'https://anyonepraybackend.com/update_call_status';
        var options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cHA6cHBw',
            }, 
            body: JSON.stringify({id, status})
        }       

        const result = await Fetch(url, options);
        setIsUpdated(true);        
    }
    useEffect( () => {
        getFollowUps().then((data) => {
           setFollowUps(data)
          });     
    },[]) 


  

    return (
        <PastoralContext.Provider 
            value =
            {{
               followUps, followUp, getFollowUp, updateFollowUp, canUpdate, setCanUpdate, isUpdated
            }}
        >
            {children}
        </PastoralContext.Provider>
    );
}