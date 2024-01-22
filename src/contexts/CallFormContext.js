import React, { useState, createContext } from "react";
import usePersistedState from "../hooks/use-persisted.hook";
import { showErrorMessage, showSuccessMessage } from "../helpers/useToast";
import { Fetch } from "../hooks/use-fetch-hook";
import { resources } from "../assets/data";

export const CallFormContext = createContext(null);

export const CallFormProvider = ({children}) => {

    const [firstName, setFirstName] = usePersistedState("first-name", "");
    const [lastName, setLastName] = usePersistedState("last-name", "");
    const [emailAddress, setEmailAddress] = usePersistedState("email-address", "");
    const [address, setAddress] = usePersistedState("address", "")
    const [subscribeCaller, setSubscribeCaller] = usePersistedState("subscribe-caller", false);
    const [selectedFollowUpTypes, setSelectedFollowUpTypes] = usePersistedState("selected-follow-up-types", "");
    const [selectedCallTypes, setSelectedCallTypes] = usePersistedState("selected-call-types", "");
    const [callNotes, setCallNotes] = usePersistedState("call-notes", "");
    const [selectedDispositon, setSelectedDisposition] = usePersistedState("selected-disposition", "");
    const [selectedAgeRange, setSelectedAgeRange] = usePersistedState("selected-age-range", "");
    const [selectedGender, setSelectedGender] = usePersistedState("selected-gender", "");

    const [sendResources, setSendResources] = usePersistedState("send-resources", false);
    const [canUseTestimony, setCanUseTestimony] = usePersistedState("can-use-testimony", false);
    const [selectedResourceDelivery, setSelectedResourceDelivery] = usePersistedState("selected-resources-deleivery", "")
    const [selectedResources, setSelectedResources] = usePersistedState("selected-resources", "");
   // const [selectedPhysicalResources, setSelectedPhysicalResources] = usePersistedState("selected-pyhsical-resources", "");;

    const [selectedBlockReason, setSelectedBlockReason] = usePersistedState("selected-block-reason", "");
    const [temporarilyBlockCaller, setTemporarilyBlockCaller] = usePersistedState("temporarily-block-caller", false);
    const [blockDelay, setBlockDelay] = usePersistedState("block-delay", "0" );

    const [userNumber, setUserNumber] = usePersistedState("user-number", "");
    const [sentBy, setSentBy] = usePersistedState("sentBy", "");
    const [userCountry, setUserCountry] = usePersistedState("user-country", "");
    const [taskSID, setTaskSID] = usePersistedState("task-sid", "");
    const [twilioNumber, setTwilioNumber] = usePersistedState("twilio-number", "");
    const [userZipPostal, setUserZipPostal] = usePersistedState("user-zip-postal", "");
    const [userStateProv, setUserStateProv] = usePersistedState("user-state-prov", "");
    const [userCity, setUserCity] = usePersistedState("user-city", "");  
    const [isHouse, setIsHouse] = usePersistedState("is-house", true);  
    const [callerHistory, setCallerHistory] = usePersistedState("caller-history", []);
    const [showCallHistory, setShowCallHistory] = useState(false);

    //Suice call fiellds
    const [isSuicideCall, setIsSuicideCall] = usePersistedState("is-suicide-call", false);
    const [harmInflicted, setHarmInflicted] = usePersistedState("harm-inflicted", false);
    const [harmInflictedDesc, setHarmInflictedDesc] = usePersistedState("harm-inflicted-desc", "");
    const [drugsTaken, setDrugsTaken] = usePersistedState("drugs-taken", false);
    const [drugsTakenDesc, setDrugsTakenDesc] = usePersistedState("drugs-taken-desc", "");
    const [prevSuicideAttempt, setPrevSuicideAttempt] = usePersistedState("prev-suicide-attempt", false);
    const [suicidePlan, setSuicidePlan] = usePersistedState("suicide-plan", "");
    const [maritalStatus, setMaritalStatus] = usePersistedState("maritial-status", "");
    const [physicalHealth, setPhysicalHealth] = usePersistedState("physical-health", "");
    const [psychiatricHistory, setPsychiatricHistory] = usePersistedState("psychiatric-history", false);
    const [psychiatricDesc, setPsychiatricDesc] = usePersistedState("psychiatric-desc", "");
    const [mentalStatus, setMentalStatus] = usePersistedState("mental-status", "");
    const [hoodType, setHoodType] = usePersistedState("hood-type", "");
    const [livingType, setLivingType] = usePersistedState("living-type", " ");
    const [riskLevel, setRiskLevel] = usePersistedState("risk-level", 0);
    const [financialResource, setFinancialResource] = usePersistedState("financial-resource", "");
    const [isAlcoholic, setIsAlcoholic] = usePersistedState("is-alcoholic", false);
    const [isDrugAddict, setIsDrugAddict] = usePersistedState("is-drug-addict", false);
    const [lostLovedOne, setLostLovedOne] = usePersistedState("lost-loved-one", false);
    const [isAntisocial, setIsAntisocial] = usePersistedState("is-antisocial", false);
    



    const formObj = {
        firstName, setFirstName,
        lastName, setLastName,
        emailAddress, setEmailAddress,
        userNumber, setUserNumber,
        address, setAddress,
        userCity, setUserCity,
        isHouse, setIsHouse,
        userZipPostal, setUserZipPostal,
        userStateProv, setUserStateProv,
        userCountry, setUserCountry,
        subscribeCaller, setSubscribeCaller,
        selectedFollowUpTypes, setSelectedFollowUpTypes,
        selectedCallTypes, setSelectedCallTypes,
        callNotes, setCallNotes,
        selectedDispositon, setSelectedDisposition,
        selectedAgeRange, setSelectedAgeRange,
        selectedGender, setSelectedGender,
        sendResources, setSendResources,
        canUseTestimony, setCanUseTestimony,
        selectedResourceDelivery, setSelectedResourceDelivery,
        selectedResources, setSelectedResources,
        //selectedPhysicalResources, setSelectedPhysicalResources,
        selectedBlockReason, setSelectedBlockReason,
        temporarilyBlockCaller, setTemporarilyBlockCaller,
        blockDelay, setBlockDelay,
        showCallHistory, setShowCallHistory,
        isSuicideCall, setIsSuicideCall,
        harmInflicted, setHarmInflicted,
        harmInflictedDesc, setHarmInflictedDesc,
        drugsTaken, setDrugsTaken,
        drugsTakenDesc, setDrugsTakenDesc,
        prevSuicideAttempt, setPrevSuicideAttempt,
        suicidePlan, setSuicidePlan,
        maritalStatus, setMaritalStatus,
        physicalHealth, setPhysicalHealth,
        psychiatricHistory, setPsychiatricHistory,
        psychiatricDesc, setPsychiatricDesc,
        mentalStatus, setMentalStatus,
        hoodType, setHoodType,
        isAntisocial, setIsAntisocial,
        livingType, setLivingType,
        financialResource, setFinancialResource,
        isAlcoholic, setIsAlcoholic,
        isDrugAddict, setIsDrugAddict,
        lostLovedOne, setLostLovedOne,
        riskLevel, setRiskLevel
    };

    var options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
           'Authorization': 'Basic cHA6cHBw',// + window.btoa("pp:ppp").toString('base64'),
        },
    }


    
    
    const handleMessage = async(event) => {
      //&& 
      if (event.data.type === 'currentTaskInfo' && event.data.data.direction === "inbound" ) {
        // get phone number from the postmessage data
        event.data.data.from && setUserNumber(event.data.data.from);
        event.data.data.from_state && setUserStateProv(event.data.data.from_state);
        event.data.data.from_country && setUserCountry(event.data.data.from_country);
        event.data.data.from_city && setUserCity(event.data.data.from_city);
        event.data.data.from_zip && setUserZipPostal(event.data.data.from_zip);
        event.data.data.task_sid && setTaskSID(event.data.data.task_sid);
        event.data.data.to && setTwilioNumber(event.data.data.to)
        event.data.data.from && setCallerHistory((await getHistory(event.data.data.from)).slice(0, 5));
        event.data.data.worker.full_name && setSentBy(event.data.data.worker.full_name);
        
        // get agent data
        // var agentName = event.data.data.worker.full_name;
        // var agentSkills = event.data.data.worker.routing.skills;

      }
     //window.removeEventListener('message', handleMessage);
    }
    window.addEventListener('message', handleMessage, true);
  
    
    //return object if the current caller has called before.
    const getHistory = async (user_number) => {
        const url = 'https://anyonepraybackend.com/history';
        const data = {
            user_number
        }
        options.body = JSON.stringify(data);
        const result = await Fetch(url, options);
        return result.data;
    }

    const sendReport = async(url, data) => {
        // A user number must be present before any api called is made
        if (userNumber) {
            options.body = JSON.stringify(data);
           const result =  await Fetch(url, options);
           console.log(result);
        }
    }

    const clearForm = () => {
        window.sessionStorage.clear();
        setFirstName(""); setLastName(""); setEmailAddress("");
        setAddress(""); setSubscribeCaller(false);
        setSelectedFollowUpTypes(""); setCallNotes("");
        setSelectedDisposition(""); setSelectedAgeRange("");
        setSelectedGender(""); setSendResources(false);
        setSelectedCallTypes(""); setCanUseTestimony(false);
        setSelectedResourceDelivery("");setSelectedResources("");
        setSelectedBlockReason(""); setTemporarilyBlockCaller(false); setBlockDelay(0); 
        setUserNumber(""); setSentBy(""); setUserCountry("");
        setTaskSID(""); setTwilioNumber(""); setUserZipPostal(""); setIsHouse(true)
        setUserStateProv(""); setUserCity(""); setCallerHistory([]); setShowCallHistory(false);
        setIsSuicideCall(false); setHarmInflicted(false); setHarmInflictedDesc(""); setDrugsTaken(false);
        setDrugsTakenDesc(""); setPrevSuicideAttempt(false); setSuicidePlan(""); setMaritalStatus("");
        setPhysicalHealth(""); setPsychiatricHistory(false); setPsychiatricDesc(""); setMentalStatus("");
        setHoodType(""); setLivingType(""); setRiskLevel(""); setFinancialResource(""); 
        setIsAlcoholic(false); setIsDrugAddict(false); setIsAntisocial(false); setLostLovedOne(false);
    } 

    const handleOnSubmit = async(event) => {
        event.preventDefault()
        window.scrollTo(0,0);     
      
        if(!twilioNumber){
            showErrorMessage('No Church Number found');
            return;
        }

        if(!userNumber){
            showErrorMessage('No Caller Number found');
            return;
        }

        if(isSuicideCall && !riskLevel){
            showErrorMessage('Please Select a Perceived Level of Risk');
            return;
        }  

        if(!selectedCallTypes){
            showErrorMessage('Please select a Call Type.');
            return;
        }
        if(!selectedDispositon){
            showErrorMessage('Please select a Call Disposition.');
            return;
        }

        if(selectedDispositon === "Pastoral Call - FOLLOW UP" && selectedFollowUpTypes === ""){
            showErrorMessage('Select Follow Up Type');
            return;
        }
        if(sendResources && !selectedResourceDelivery){
            showErrorMessage('Select resource delivery method');
            return;
        }
        if(sendResources && !selectedResources){
            showErrorMessage('Select resource to be sent');
            return;
        }
        if(selectedResourceDelivery === "mail" && address === ""){
            showErrorMessage('Mailing Address required to send Physical Resources');
            return;
        }

        if(canUseTestimony){
            if(!callNotes){
                showErrorMessage('To use testimony notes must be filled');
                return;
            }
            var data = {
                user_number: userNumber,
                body: firstName + callNotes
            }
           // console.log("User testimony can be used");
            sendReport("https://anyonepraybackend.com/praisereport/send", data);
        }
        if (temporarilyBlockCaller ) {
            if (selectedBlockReason !== ""){
                var blacklistData = {
                    phone: userNumber,
                    blockdelay: blockDelay,
                    blockreason: selectedBlockReason
                }
               // console.log("User shall be blocked");
                sendReport("https://anyonepraybackend.com/blacklist", blacklistData)
            }
            else{
                showErrorMessage('Please select a reason for blocking this caller.');
                return;
            }
      
        }
        if(subscribeCaller &&  !emailAddress){
            showErrorMessage("Please add an email address for the newsletter subscription recipient");
            return;
        }

        //check if resoucres should be sent
        if(sendResources && selectedResources && selectedResourceDelivery){
            //check if digital resoucres should be sent
                //check if deleviery method selected 
            if(selectedResourceDelivery !== "mail"){
                if( selectedResourceDelivery === "email" && !emailAddress){ 
                    showErrorMessage("Digital resource send method via email was chosen, but no email address was provided.");
                    return;
                }
                else {
                    var digitalResources = selectedResources.split(", ").map((digitalResource) =>{
                        return resources.find(resource => resource.resource === digitalResource);
                    })
                    
                    var digiData = {
                        method: selectedResourceDelivery, email: emailAddress, phone: userNumber, twilio_number: twilioNumber,
                        resources: digitalResources, task_sid: taskSID, sent_by: sentBy ? sentBy : twilioNumber
                    }
                    sendReport("https://anyonepraybackend.com/prayerresource/digiResc", digiData);
                }
            }
            else if (selectedResourceDelivery === "mail") {       
                var phyData = {
                    phone: userNumber, twilio_number: twilioNumber,
                    resources: selectedResources, task_sid: taskSID, sent_by: sentBy ? sentBy : twilioNumber
                }
                sendReport("https://anyonepraybackend.com/prayerresource/physResc", phyData);
            }
            else {
                showErrorMessage("No resource selected.")
                return;
            }   
        } 
           // check if physical resoucres should be sent
        var status = selectedDispositon === "Pastoral Call - FOLLOW UP" ? 1 : 0;

        var callDetailsData = {
            TaskSid: taskSID, phone: userNumber, twilio_number: twilioNumber, calltype: selectedCallTypes,
            callnotes: callNotes, callresources: selectedResources, firstname: firstName, lastname: lastName,
            email: emailAddress, address: address, age_range: selectedAgeRange, gender: selectedGender, 
            city: userCity, stateprov: userStateProv, country: userCountry, zippostal: userZipPostal,
            disposition: selectedDispositon, followUpType: selectedFollowUpTypes, status: status,
            newsletter: subscribeCaller ? 1 : 0, is_suicide_call: isSuicideCall ? 1 : 0, risk_level: riskLevel, is_alcohol_addict: isAlcoholic ? 1 : 0,
            harm_Inflicted: harmInflicted ? 1 : 0, harm_inflicted_desc: harmInflictedDesc, drugs_taken: drugsTaken ? 1: 0, lost_loved_one: lostLovedOne ? 1 : 0,
            drugs_taken_desc: drugsTakenDesc, prev_suicide_attempt: prevSuicideAttempt ? 1 : 0, prev_suicide_attempt_desc: suicidePlan,
            physical_health: physicalHealth, marital_status: maritalStatus, mental_status: mentalStatus, financial_status: financialResource,
            living_arrangement: hoodType + " " + livingType, is_drug_addict: isDrugAddict ? 1: 0, is_antisocial: isAntisocial ? 1 : 0, 

        };
        //console.log("User call details saved");
        sendReport("https://anyonepraybackend.com/call_details", callDetailsData );
        showSuccessMessage("Call details successfully saved.")
        clearForm();       
    };

    const handleKeyEvent = (e, setter, currentState, option) => {
        if(!currentState.includes(option)){
            if (currentState === "") {
                setter(option);
            }else {
                setter(currentState + ", " + option);
            }  
        }  
    }

    const handleResourceDelivery = (e, deliveryMode) => {
        //remove all physical resources from the seletedResources when delivery mode is email or sms
        if(deliveryMode !== "mail"){
            let physicalResourcesArray = resources.filter(resource => resource.type === "physical").map(obj => obj.resource);
            let filteredDigitalArray = selectedResources.split(",").filter(x => !physicalResourcesArray.some(a => x.trim()===a));
            filteredDigitalArray = filteredDigitalArray.join(",").trim()
            setSelectedResources(filteredDigitalArray)            
        }
        setSelectedResourceDelivery(deliveryMode)
    }

    const handleCheckboxChange = (e, setter, currentState, option) => {
        if (e.target.checked) {
            //add to the list
            if (currentState === "") {
                setter(option);
            }else {
                setter(currentState + ", " + option);
            }    
          } else {   
                let options = currentState.split(",");
                if(options[0] === option){
                    const index = options.indexOf(option);
                    if (index > -1) { // only splice array when item is found
                        options.splice(index, 1); // 2nd parameter means remove one item only
                      }
                      setter(options.join(",").trim());
                } else {
                    setter(currentState.replace(", " + option, ""));
                }       
          }
    }
    return (
        <CallFormContext.Provider 
            value={{
                callerHistory,
                formObj,
                handleOnSubmit,
                handleCheckboxChange,
                handleKeyEvent,
                handleResourceDelivery,
            }}
        >
            {children}
        </CallFormContext.Provider>
    );
}