import { async } from "@firebase/util";
import React, { useState, createContext, useCallback, useEffect } from "react";
import { Fetch } from "../hooks/use-fetch-hook";
import { showSuccessMessage } from "../helpers/useToast";

export const PastoralContext = createContext(null);

export const PastoralProvider = ({children}) => { 
    const [followUps, setFollowUps] = useState(null);
    const [resources, setResources] = useState(null);
    const [followUp, setFollowUp] = useState(null);
    const [isUpdated, setIsUpdated] = useState(false);
    const [isResourceUpdated, setResourceUpdated] = useState(false)
    const [canUpdate, setCanUpdate] = useState(false);
    const [showSection, setShowSection] = useState("viewOptions");
    const [resourceUrl, setResourceUrl] = useState("https://anyonepraybackend.com/prayerresource/getPhyResc")

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

    const getResources = async() => {
        const url = 'https://anyonepraybackend.com/prayerresource/getPhyResc?status=New?page=2';
        
        var options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cHA6cHBw',
            }
        }       

        const result = await fetch(resourceUrl,options);
        return await result.json();
    }

    const updateResource = async(id, sent_by) => {
        const url = 'https://anyonepraybackend.com/prayerresource/updatePhyResc';
        
        var options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cHA6cHBw',
            },
            body: JSON.stringify({id,sent_by})
        }       
        const result = await Fetch(url, options);
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
        setFollowUp(result.data);
        return result;
    }

    const updateFollowUp = async(requestObj) =>{
        const url = 'https://anyonepraybackend.com/update_call_detail';
        var options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cHA6cHBw',
            }, 
            body: JSON.stringify(requestObj)
        }       
        const result = await Fetch(url, options);
        setIsUpdated(true);     
        showSuccessMessage("Folow Up Updated Successfully");
           
    }

    useEffect( () => {
        getFollowUps().then((data) => {
           setFollowUps(data?.reverse())
        });       
    },[]) 

    useEffect(() => {
        getResources().then((data) => {
            setResources(data)
        }); 
    }, [resourceUrl, isResourceUpdated])
  

    return (
        <PastoralContext.Provider 
            value =
            {{
               followUps, followUp, getFollowUp, updateFollowUp, setFollowUp, isResourceUpdated, canUpdate, showSection, setShowSection,
               setResourceUpdated, setCanUpdate, isUpdated, resources, resourceUrl, setResourceUrl, updateResource
            }}
        >
            {children}
        </PastoralContext.Provider>
    );
}