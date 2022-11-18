import React, { useState, createContext } from "react";
import usePersistedState from "../hooks/use-persisted.hook";
export const CallFormContext = createContext(null);

export const CallFormProvider = ({children}) => {

    const [firstName, setFirstName] = usePersistedState("first-name", "");
    const [lastName, setLastName] = usePersistedState("last-name", "");
    const [emailAddress, setEmailAddress] = usePersistedState("email-address", "");
    const [subscribeCaller, setSubscribeCaller] = usePersistedState("subscribe-caller", false);
    const [showCallHistory, setShowCallHistory] = usePersistedState("show-call-history", false);
    const [selectedCallTypes, setSelectedCallTypes] = usePersistedState("selected-call-types", "");
    const [callNotes, setCallNotes] = usePersistedState("call-notes", "");
    const [selectedDispositon, setSelectedDisposition] = usePersistedState("selected-disposition", "");
    const [sendResources, setSendResources] = usePersistedState("send-resources", false);
    const [canUseTestimony, setCanUseTestimony] = usePersistedState("can-use-testimony", false);
    const [selectedResourceDelivery, setSelectedResourceDelivery] = usePersistedState("selected-resources-deleivery", "")
    const [selectedDigitalResources, setSelectedDigitalResources] = usePersistedState("selected-digital-resources", "");
    const [selectedPhysicalResources, setSelectedPhysicalResources] = usePersistedState("selected-physical-resources", "");

    const [selectedBlockReason, setSelectedBlockReason] = usePersistedState("selected-block-reason", "");
    const [temporarilyBlockCaller, setTemporarilyBlockCaller] = usePersistedState("temporarily-block-caller", false);
    const [blockDelay, setBlockDelay] = usePersistedState("block-delay", 0 );

    const [userNumber, setUserNumber] = usePersistedState("user-number", "");
    const [userCountry, setUserCountry] = usePersistedState("user-country", "");
    const [taskSID, setTaskSID] = usePersistedState("task-sid", "");
    const [twilioNumber, setTwilioNumber] = usePersistedState("twilio-number", "");
    const [userZipPostal, setUserZipPostal] = usePersistedState("user-zip-postal", "");
    const [userStateProv, setUserStateProv] = usePersistedState("user-state-prov", "");
    const [userCity, setUserCity] = usePersistedState("user-city", "");  

    const formObj = {
        firstName, setFirstName,
        lastName, setLastName,
        emailAddress, setEmailAddress,
        subscribeCaller, setSubscribeCaller,
        showCallHistory, setShowCallHistory,
        selectedCallTypes, setSelectedCallTypes,
        callNotes, setCallNotes,
        selectedDispositon, setSelectedDisposition,
        sendResources, setSendResources,
        canUseTestimony, setCanUseTestimony,
        selectedResourceDelivery, setSelectedResourceDelivery,
        selectedDigitalResources, setSelectedDigitalResources,
        selectedPhysicalResources, setSelectedPhysicalResources,
        selectedBlockReason, setSelectedBlockReason,
        temporarilyBlockCaller, setTemporarilyBlockCaller,
        blockDelay, setBlockDelay
    };

    var options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + window.btoa("pp" + ":" + "ppp").toString('base64'),
        },
    }

    const [data, setData] = usePersistedState("data", "");
    const [error, setError] = usePersistedState("error",false);
    const [loading, setLoading] = useState(false);

    
    const handleMessage = (event) => {

      //&& event.origin == 'https://flex.twilio.com'
      if (event.data.type === 'currentTaskInfo') {
        // get phone number from the postmessage data
        setUserNumber(event.data.data.from);
        setUserStateProv(event.data.data.from_state);
        setUserCountry(event.data.data.from_country);
        setUserCity(event.data.data.from_city);
        setUserZipPostal(event.data.data.from_zip);
        setTaskSID(event.data.data.task_sid);
        setTwilioNumber(event.data.data.to)
  
        // get agent data
        var agentName = event.data.data.worker.full_name;
        var agentSkills = event.data.data.worker.routing.skills;

        console.log("ronaldo")
      }
    }
    window.addEventListener('message', handleMessage);


   const Fetch = (url, options) =>{
        setLoading(true);
        if (!url) {
            return null;
        }

       fetch(url, options).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                setError(true);
            }
        })
        .then((response) => {
            console.log(response);
            if (response.error){
                setError(true)
            } else {
                setData(response);
                setError(false);
            }
        })
        .catch((err) =>{
            setError(true);
        })
        .finally(() => setLoading(false));
        return { data, error, loading };
    }
      

    const sendReport = (url, data) => {
        // A user number must be present before any api called is made
        if (userNumber) {
            options.body = JSON.stringify(data)
            const result = Fetch(url, options);
            console.log(result);
            console.log(userNumber)
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

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(!twilioNumber){
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("errorMessage").innerText = "No User Number found.";
            return;
        }
       
        if(canUseTestimony){
            var data = {
                user_number: userNumber,
                body: firstName + callNotes
            }
            console.log("User testimony is used");
            sendReport("http://52.6.220.176/praisereport/send", data);
        }

        if (temporarilyBlockCaller && selectedBlockReason !== "") {
            var data = {
                phone: userNumber,
                blockdelay: blockDelay,
                blockreason: selectedBlockReason
            }
            console.log("User shall be blocked");
            sendReport("http://52.6.220.176/blacklist", data)
        }

        //check if resoucres should be sent
        if(sendResources){
            //check if digital resoucres should be sent
            if(selectedDigitalResources){
                //check if deleviery method selected 
                if(!selectedResourceDelivery) {
                    document.getElementById("errorMessage").style.display="block";
                    document.getElementById("errorMessage").innerText="Send method required.";
                    return;
                    
                }
                if( selectedResourceDelivery === "email" && !emailAddress){ 
                    document.getElementById("errorMessage").style.display="block";
                    document.getElementById("errorMessage").innerText="Digital resource send method via email was chosen, but no email address was provided.";
                    return;
                }
                else{
                    var digitalResources = selectedDigitalResources.split(", ")
                    digitalResources.map((digitalResource) => {
                        var data = {
                            method: selectedResourceDelivery, email: emailAddress,
                            phone: userNumber ,url: "http://...",
                            title: digitalResource, task_sid: taskSID,
                            id: "id1", sent_by:"S1",
                            twilio_number: twilioNumber
                        };  
                        sendReport("http://52.6.220.176/prayerresource/digiResc", data);
                    })
                }
            } 
           // check if physical resoucres should be sent
            else if (selectedPhysicalResources) {
                var physicalResources = selectedPhysicalResources.split(", ")
                physicalResources.map((physicalResource) => {
                    var data = {
                        title: physicalResource, task_sid: taskSID,
                        phone: userNumber, id: "id1", sent_by:"S1",
                        twilio_number: twilioNumber
                    };  
                    sendReport("http://52.6.220.176/prayerresource/physResc", data);
                })
            }
            else {
                document.getElementById("errorMessage").style.display="block";
                document.getElementById("errorMessage").innerText="No resource selected.";
                return;

            }
        }


        //sendReport("http://52.6.220.176/history")
        var data = {
            TaskSid: taskSID,
            phone: userNumber,
            calltype: selectedCallTypes,
            callnotes: callNotes,
            callresources: selectedDigitalResources + selectedPhysicalResources,
            firstname: firstName,
            lastname: lastName,
            email: emailAddress,
            city: userCity,
            stateprov: userStateProv,
            country: userCountry,
            zippostal: userZipPostal,
            disposition: selectedDispositon,
            newsletter: subscribeCaller,
            praisereport: canUseTestimony,
            blockcaller: temporarilyBlockCaller,
            blockreason: selectedBlockReason,
            blockdelay: blockDelay,                                
        };
        console.log("User call details saved");
        sendReport("http://52.6.220.176/call_details", data );
        document.getElementById("errorMessage").style.display="none";
        document.getElementById("callForm").reset()
        localStorage.clear();
    };




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
                formObj,
                handleOnSubmit,
                handleCheckboxChange
            }}
        >
            {children}
        </CallFormContext.Provider>
    );
}