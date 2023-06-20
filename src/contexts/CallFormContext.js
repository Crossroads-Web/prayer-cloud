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
    const [selectedDigitalResources, setSelectedDigitalResources] = usePersistedState("selected-digital-resources", "");
    const [selectedPhysicalResources, setSelectedPhysicalResources] = usePersistedState("selected-physical-resources", "");

    const [selectedBlockReason, setSelectedBlockReason] = usePersistedState("selected-block-reason", "");
    const [temporarilyBlockCaller, setTemporarilyBlockCaller] = usePersistedState("temporarily-block-caller", false);
    const [blockDelay, setBlockDelay] = usePersistedState("block-delay", 0 );

    const [userNumber, setUserNumber] = usePersistedState("user-number", "");
    const [sentBy, setSentBy] = usePersistedState("sentBy", "");
    const [userCountry, setUserCountry] = usePersistedState("user-country", "");
    const [taskSID, setTaskSID] = usePersistedState("task-sid", "");
    const [twilioNumber, setTwilioNumber] = usePersistedState("twilio-number", "");
    const [userZipPostal, setUserZipPostal] = usePersistedState("user-zip-postal", "");
    const [userStateProv, setUserStateProv] = usePersistedState("user-state-prov", "");
    const [userCity, setUserCity] = usePersistedState("user-city", "");  

    const [callerHistory, setCallerHistory] = usePersistedState("caller-history", []);
    const [showCallHistory, setShowCallHistory] = useState(false);
    const formObj = {
        firstName, setFirstName,
        lastName, setLastName,
        emailAddress, setEmailAddress,
        address, setAddress,
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
        selectedDigitalResources, setSelectedDigitalResources,
        selectedPhysicalResources, setSelectedPhysicalResources,
        selectedBlockReason, setSelectedBlockReason,
        temporarilyBlockCaller, setTemporarilyBlockCaller,
        blockDelay, setBlockDelay,
        showCallHistory, setShowCallHistory,
    };

    var options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          
           'Authorization': 'Basic cHA6cHBw',// + window.btoa("pp:ppp").toString('base64'),
        },
    }


    
    
    const handleMessage = (event) => {
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
        event.data.data.from && setCallerHistory(getHistory(event.data.data.from));
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
            await Fetch(url, options);
        }
        
        // var data = {
        //     phone: "phone",
        //     firstName: "firstName"
        // }

       // var data = {"method":"email","email":"send2sushil@gmail.com","url":"http://...","title":"phy1","task_sid":"WT...2","phone":"+234234","id":"id1","sent_by":"S1","twilio_number":"+234"}

        // var data = {
        //     user_number: "+19054848490"
        // }
    }

    const clearForm = () => {
        window.localStorage.clear();
        setFirstName(""); setLastName(""); setEmailAddress("");
        setAddress(""); setSubscribeCaller(false);
        setSelectedFollowUpTypes(""); setCallNotes("");
        setSelectedDisposition(""); setSelectedAgeRange("");
        setSelectedGender(""); setSendResources(false);
        setSelectedCallTypes(""); setCanUseTestimony(false);
        setSelectedResourceDelivery(""); setSelectedDigitalResources("");
        setSelectedPhysicalResources(""); setSelectedBlockReason("");
        setTemporarilyBlockCaller(false); setBlockDelay(0); 
        setUserNumber(""); setSentBy(""); setUserCountry("");
        setTaskSID(""); setTwilioNumber(""); setUserZipPostal("");
        setUserStateProv(""); setUserCity(""); setCallerHistory([]); setShowCallHistory(false);

    } 

    const handleOnSubmit = async(event) => {
        event.preventDefault()
        
        if(!twilioNumber){
            showErrorMessage('No Twilio Number found');
            return;
        }

        if(!userNumber){
            showErrorMessage('No User Number found');
            return;
        }

        if(!selectedCallTypes){
            showErrorMessage('Please select a Call Type for this call.');
            return;
        }

        if(selectedDispositon === "Pastoral Call - FOLLOW UP" && selectedFollowUpTypes === ""){
            showErrorMessage('Select Follow Up Type');
            return;
        }

        if(selectedPhysicalResources !== "" && address === ""){
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
        if(sendResources){
            //check if digital resoucres should be sent
            if(selectedDigitalResources){
                //check if deleviery method selected 
                if(!selectedResourceDelivery) {
                    showErrorMessage("Send method required.");
                    return;
                    
                }
                if( selectedResourceDelivery === "email" && !emailAddress){ 
                    showErrorMessage("Digital resource send method via email was chosen, but no email address was provided.");
                    return;
                }
                else{
                    var digitalResources = selectedDigitalResources.split(", ")
                    digitalResources.map((digitalResource) => {
                        let resource = resources.find(resource => resource.resource === digitalResource);
                        var data = {
                            method: selectedResourceDelivery, email: emailAddress,
                            phone: userNumber, url: resource.url,
                            title: digitalResource, task_sid: taskSID,
                            id: resource.id, sent_by: sentBy ? sentBy : twilioNumber,
                            twilio_number: twilioNumber
                        };  
                        sendReport("https://anyonepraybackend.com/prayerresource/digiResc", data);
                        
                    })
                }
            } 
           // check if physical resoucres should be sent
            else if (selectedPhysicalResources) {
                var physicalResources = selectedPhysicalResources.split(", ")
                physicalResources.map((physicalResource) => {
                    let resource = resources.find(resource => resource.resource === physicalResource);
                    var data = {
                        title: physicalResource, task_sid: taskSID,
                        phone: userNumber, id: resource.id, sent_by: sentBy ? sentBy : twilioNumber,
                        twilio_number: twilioNumber
                    };  
                     sendReport("https://anyonepraybackend.com/prayerresource/physResc", data);
                })
            }
            else {
                showErrorMessage("No resource selected.")
                return;
            }
        }
        var status = selectedDispositon === "Pastoral Call - FOLLOW UP" ? 1 : 0;

        //sendReport("http://52.6.220.176/history")
        var callDetailsData = {
            TaskSid: taskSID,
            phone: userNumber,
            twilio_number: twilioNumber,
            calltype: selectedCallTypes,
            callnotes: callNotes,
            callresources: selectedDigitalResources + selectedPhysicalResources,
            firstname: firstName,
            lastname: lastName,
            email: emailAddress,
            address: address,
            age_range: selectedAgeRange,
            gender: selectedGender, 
            city: userCity,
            stateprov: userStateProv,
            country: userCountry,
            zippostal: userZipPostal,
            disposition: selectedDispositon,
            followUpType: selectedFollowUpTypes,
            status: status,
            newsletter: subscribeCaller ? 1 : 0,
                                       
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
                // remove from list
                // setSelectedCallTypes(
                //     selectedCallTypes,
                // );
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
            }}
        >
            {children}
        </CallFormContext.Provider>
    );
}