import React, { createContext } from "react";
import usePersistedState from "../hooks/use-persisted.hook";
import {callType, dispositions, resources, blockReasons, resourceDelivery } from "../assets/data";
export const CallFormContext = createContext(null);

export const CallFormProvider = ({children}) => {

    const [firstName, setFirstName] = usePersistedState("first-name", "");
    const [lastName, setLastName] = usePersistedState("last-name", "");
    const [emailAddress, setEmailAddress] = usePersistedState("email-address", "");
    const [subscribeCaller, setSubscribeCaller] = usePersistedState("subscribe-caller", false);
    const [showCallHistory, setShowCallHistory] = usePersistedState("show-call-history", false);
    const [selectedCallTypes, setSelectedCallTypes] = usePersistedState("selected-call-types", []);
    const [callNotes, setCallNotes] = usePersistedState("call-notes", "");
    const [selectedDispositon, setSelectedDisposition] = usePersistedState("selected-disposition", {});
    const [sendResources, setSendResources] = usePersistedState("send-resources", false);
    const [canUseTestimony, setCanUseTestimony] = usePersistedState("can-use-testimony", false);
    const [selectedResourceDelivery, setSelectedResourceDelivery] = usePersistedState("selected-resources-deleivery", {})
    const [selectedResources, setSelectedResources] = usePersistedState("selected-resources", []);
    const [selectedBlockReason, setSelectedBlockReason] = usePersistedState("selected-block-reason", {});
    const [temporarilyBlockCaller, setTemporarilyBlockCaller] = usePersistedState("temporarily-block-caller", false);


    return (
        <CallFormContext.Provider 
            value={{}}
        >
            {children}
        </CallFormContext.Provider>
    );
}