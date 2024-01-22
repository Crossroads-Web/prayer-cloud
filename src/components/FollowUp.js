import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PastoralContext } from '../contexts/PastoralContext';
import { Spinner } from "react-activity";
import { ToastContainer } from 'react-toastify';
import { BsArrowLeft} from 'react-icons/bs';
import { Blueish } from './CallForm';
import styled from 'styled-components';
import { showErrorMessage, showSuccessMessage } from "../helpers/useToast";
import "react-activity/dist/library.css";
import 'react-toastify/dist/ReactToastify.css';
import { CallFormContext } from '../contexts/CallFormContext'
import { camelCase } from 'lodash';
import moment from 'moment';
import {callTypes, resources, ageRanges, followUpTypes, maritialStatus, risksLevels, financialStatus, mentalStatus } from "../assets/data";

function FollowUp() {
    const {id} = useParams();
    const {handleCheckboxChange} = useContext(CallFormContext);

    const { getFollowUp, followUp, updateFollowUp, canUpdate, setCanUpdate, setShowSection } = useContext(PastoralContext);
    
    const [updatedFirstName, setUpdatedFirstName] = useState("")
    const [updatedLastName, setUpdatedLastName] = useState("")
    const [updatedEmailAddress, setUpdatedEmailAddress] = useState("") 
    const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("")
    const [updatedMailingAddress, setUpdatedMailingAddress] = useState("")
    const [updatedPostalCode, setUpdatedPostalCode] = useState("")
    const [updatedCity, setUpdatedCity] = useState("")
    const [updatedProvince, setUpdatedProvince] = useState("")
    const [updatedCountry, setUpdatedCountry] = useState("")
    const [updatedGender, setUpdatedGender] = useState("")
    const [updatedCallTypes, setUpdatedCalltypes] = useState("")
    const [updatedFollowUpTypes, setUpdatedFollowUpTypes] = useState("")
    const [updatedAgeRange, setUpdatedAgeRange] = useState("")
    const [updatedNotes, setUpdatedNotes] = useState("")

    const [updatedResourceDelivery, setUpdatedResourceDelivery] = useState("")
    const [sendResources, setSendResources] = useState("")
    const [updatedDigitalResources, setUpdatedDigitalResources] = useState("");
    const [updatedPhysicalResources, setUpdatedPhysicalResources] = useState("");
    
    const [isSuicideCall, setIsSuicideCall] = useState(false);


    const navigate = useNavigate();
    function clickToDial(e){
        e.preventDefault();
       // updateFollowUp(id, "3")
        window.parent.postMessage({callBackNow: true, destination: followUp.call_details.user_number}, '*')
        setCanUpdate(true);  
    }

     const updateFollowUpStatus = (e, status) =>{
        e.preventDefault();
        const updatedObj = {
            id,
            follow_up_date: moment(new Date()).format('YYYY-MM-DD HH:MM:SS'),       
            status,
            user_number: updatedPhoneNumber,
            call_type: updatedCallTypes,
            notes: updatedNotes,
            caller_first_name: updatedFirstName,
            caller_last_name: updatedLastName,
            caller_email: updatedEmailAddress,
            age_range: updatedAgeRange,
            gender: updatedGender,
            address: updatedMailingAddress,
            city: updatedCity,
            province: updatedProvince,
            postal_zip: updatedPostalCode,
            country: updatedCountry
        }
        updateFollowUp(updatedObj).then(()=>{
            navigate("/pastoralCare")
        });
        //showSuccessMessage("Folow Up Updated Successfully");
    }
    console.log(followUp)
    useEffect(() =>{
        getFollowUp(id).then((result)=> {
            setUpdatedFirstName(result.data.call_details.caller_first_name);
            setUpdatedLastName(result.data.call_details.caller_last_name || "");
            setUpdatedPhoneNumber(result.data.call_details.user_number || "");
            setUpdatedEmailAddress(result.data.call_details.caller_email || "" );
            setUpdatedMailingAddress(result.data.call_details.address || "" );
            setUpdatedCalltypes(result.data.call_details.call_type || "");
            setUpdatedFollowUpTypes(result.data.call_details.follow_up_type || "");
            setUpdatedPostalCode(result.data.call_details.postal_zip || "");
            setUpdatedProvince(result.data.call_details.province || "");
            setUpdatedCity(result.data.call_details.city || "");
            setUpdatedCountry(result.data.call_details.country || "");
            setUpdatedGender(result.data.call_details.gender || "");
            setUpdatedNotes(result.data.call_details.notes || "");
            setUpdatedAgeRange(result.data.call_details.age_range || "");
        })
    }, [id])
  return (
    <div>
         <ToastContainer />
        <Header className='p-2 mt-4'>Pastoral Follow-Up</Header>
        {
            followUp ?
                <div>
                    <BackLinkContainer className='p-3'>
                    <button onClick={()=> {setShowSection( followUp.call_details.status === "2"? "completedList": "followUpList"); navigate("/pastoralCare")}} style={{background: "none", border: "0"}}><BsArrowLeft size={25}/> </button>
                    </BackLinkContainer>
                    <Form id="callForm"  autoComplete='off'>
                        <div className="m-3 mb-0 form-check form-switch" style={{color: "#EC3310"}}>
                            <input className="form-check-input" type="checkbox" id="isSuicideCall" 
                                checked={followUp.call_details.is_suicide_call === 1}  
                                onChange={(e)=> {
                                    setIsSuicideCall(e.target.checked);
                                }} />
                            <label className="form-check-label" htmlFor="isSuicideCall"> Potential Suicide call ›</label>
                        </div>
                        <CallerInfoWrapper className="p-4">
                            <div className="row form-group mb-2">
                                <div className="col">
                                    <label htmlFor="firstName"><h6>FIRST NAME</h6></label>
                                    <input type="text" className="form-control" id="firstName"  value={updatedFirstName} onChange={(e)=>setUpdatedFirstName(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="lastName"><h6>LAST NAME</h6></label>
                                    <input type="text" className="form-control" id="lastName" value={updatedLastName} onChange={(e)=>setUpdatedLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="row form-group mb-2">
                                <div className="col">
                                    <label htmlFor="emailAddress"><h6>EMAIL</h6></label>
                                    <input type="email" className="form-control" id="emailAddress"  value={updatedEmailAddress} onChange={(e)=>setUpdatedEmailAddress(e.target.value)}/>
                                    <small id="emailHelp" className="form-text text-muted">Format: name@domain.something</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="phoneNumber"><h6> PHONE NUMBER</h6></label>
                                    <input type="text" className="form-control" id="phoneNumber" value={updatedPhoneNumber} onChange={(e)=>setUpdatedPhoneNumber(e.target.value)} />
                                </div>
                            </div>
                            <div className="row form-group mb-2">
                            <div className="col">
                                <label htmlFor="mailingAddress"><h6> MAILING ADDRESS</h6></label>
                                <input type="text" className="form-control" id="address" value={updatedMailingAddress} onChange={(e)=>setUpdatedMailingAddress(e.target.value)}/>
                            </div>
                            <div className="col">
                                <label htmlFor="postalCode"><h6>POSTAL CODE</h6></label>
                                <input type="text" className="form-control" id="postalCode" value={updatedPostalCode} onChange={(e)=>setUpdatedPostalCode(e.target.value)} />
                            </div>
                            </div>
                            <div className="row form-group mb-2">
                                <div className="col">
                                    <label htmlFor="city"><h6>CITY</h6></label>
                                    <input type="text" className="form-control" id="city" value={updatedCity} onChange={(e)=>setUpdatedCity(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="province"><h6>PROVINCE</h6></label>
                                    <input type="text" className="form-control" id="province" value={updatedProvince} onChange={(e)=>setUpdatedProvince(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="country"><h6>COUNTRY</h6></label>
                                    <input type="text" className="form-control" id="country" value={updatedCountry} onChange={(e)=>setUpdatedCountry(e.target.value)} />
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className="col form-check-inline">
                                    <label htmlFor="ageRange"><h6>AGE RANGE</h6></label>
                                    <select className="form-select mb-2" aria-label="Age Range List" id="ageRangeList"
                                    value={updatedAgeRange} 
                                    onChange={(e)=> setUpdatedAgeRange(e.target.value)}>
                                    <option value="">Choose Age Range</option>
                                    { 
                                        ageRanges.map((ageRange) => {
                                        return (
                                            <option key={ageRange.id+ageRange.range} value={ageRange.range}>{ageRange.range}</option>
                                        );
                                        })
                                    }
                                    </select>
                                </div>

                                <div className='col'>
                                    <label htmlFor="gender"><h6>Gender</h6></label><br/>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="gender" type="radio"  
                                        checked={updatedGender === "male"}
                                        value="male"
                                        onChange={(e)=> setUpdatedGender(e.target.value)} 
                                    />
                                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="gender" type="radio"  
                                        checked={updatedGender === "female"}
                                        value="female"
                                        onChange={(e)=> setUpdatedGender(e.target.value)} 
                                    />
                                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="gender" type="radio" 
                                        checked={updatedGender === "prefer not to say"} 
                                        value="prefer not to say"
                                        onChange={(e)=> setUpdatedGender(e.target.value)} 
                                    />
                                    <label className="form-check-label" htmlFor="notKnownGender">Prefer not to say</label>
                                    </div>
                                </div>
                                { followUp.call_details.is_suicide_call === 1 &&
                                <div className='col'>
                                    <label htmlFor="maritalStatus"><h6>Marital Status</h6></label><br/>
                                    {maritialStatus.map((status) =>{
                                    return(
                                        <div className="form-check form-check-inline" key={status.id}>
                                        <input className="form-check-input" name="maritalStatus" type="radio"  
                                            checked={followUp.call_details.marital_status === status.status}
                                            value={status.status}
                                            //onChange={(e)=> formObj.setMaritalStatus(e.target.value)} 
                                        />
                                        <label className="form-check-label" htmlFor={status.status}>{status.status}</label>
                                    </div>
                                    )
                                    })}     
                                </div>
                                }  
                            </div>

                            { followUp.call_details.is_suicide_call === 1 &&
                            <>
                                <SuicideDiv className='row pb-5'>
                                <h4 className='pt-3 pb-3'><Blueish> CIRCUMSTANCES: ONE </Blueish><Redish><u>"YES"</u></Redish> <Blueish>ANSWER REQUIRED FOR THIS FORM:</Blueish></h4>
                                <div className="col form-check m-3 mb-0 mt-0">
                                    <label className="form-check-label" htmlFor="harmInflicted">Harm has been inflicted?</label>
                                    <input type="checkbox" className="form-check-input" id="harmInflicted" 
                                    checked={followUp.call_details.harm_Inflicted == 1}  
                                    //onChange={(e)=> formObj.setHarmInflicted(e.target.checked)}
                                    />
                                </div>
                                <div className="col form-check">
                                <label className="form-check-label" htmlFor="drugsTaken">Has Taken Drugs?</label>

                                    <input type="checkbox" className="form-check-input" id="drugsTaken" 
                                    checked={followUp.call_details.drugs_taken == 1}  
                                   // onChange={(e)=> formObj.setDrugsTaken(e.target.checked)}
                                   />
                                </div>
                                <div className="row form-group mb-2 mt-2">
                                    <div className="col">
                                    <label htmlFor='harmInflictedDesc'>Harm Inflicted Description</label>
                                    <textarea className="form-control" id="harmInflictedDesc" rows="3" cols="2" 
                                        //onChange={(e)=> formObj.setHarmInflictedDesc(e.target.value)} 
                                        value={followUp.call_details.harm_inflicted_desc}
                                    ></textarea>
                                    </div>
                                    <div className="col">
                                    <label htmlFor='drugsTakenDesc'>Drugs Taken Description</label>
                                    <textarea className="form-control" id="drugsTakenDesc" rows="3" 
                                        //onChange={(e)=> formObj.setDrugsTakenDesc(e.target.value)}
                                        value={followUp.call_details.drugs_taken_desc}
                                    ></textarea>
                                    </div>
                                </div>
                                </SuicideDiv>

                                <SuicideDiv className='row pb-3'>
                                <h4 className='pt-3 pb-3'><Blueish> SUICIDAL INDICATORS </Blueish></h4>
                                <div className="col form-check m-3 mb-0 mt-0">
                                    <input type="checkbox" className="form-check-input " id="prevSuicideAttempts" 
                                    checked={followUp.call_details.prev_suicide_attempt == 1}  
                                    //onChange={(e)=> formObj.setPrevSuicideAttempt(e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="prevSuicideAttempts">Has previous suicide attempts?</label>
                                </div>
                                <CallNotes className="form-group mt-4 p-2">
                                    <label htmlFor="suicidePlan">Suicide Plan: vague, general, practical, concrete, available mean;<br/>
                                    <small><Blueish> Method Used: Less lethal(wrist cutting, pills), Highly lethal(firearms, poison, hanging gas, jumping)</Blueish></small> </label>
                                    <textarea className="form-control" id="suicidePlan" rows="3" 
                                    //onChange={(e)=> formObj.setSuicidePlan(e.target.value)} 
                                    value={followUp.call_details.prev_suicide_attempt_desc}></textarea>
                                </CallNotes>
                                </SuicideDiv>
                            </>
                            }
                        { followUp.call_details.is_suicide_call === 1 &&
                        <>
                            <SuicideDiv className='p-3 row pb-5'>
                            <h4 className='pt-3 pb-2'><Blueish> MEDICAL HISTORY </Blueish></h4>
                            <div className="col form-check">
                                <label htmlFor="gender">Physical Health:</label><br/>
                                <div className="form-check form-check-inline">
                                <input className="form-check-input" name="goodHealth" type="radio"  
                                    checked={followUp.call_details.physical_health === "GOOD"}
                                    value="GOOD"
                                    //onChange={(e)=> formObj.setPhysicalHealth(e.target.value)} 
                                />
                                <label className="form-check-label" htmlFor="goodHealth">GOOD</label>
                                </div>

                                <div className="form-check form-check-inline">
                                <input className="form-check-input" name="poorHealth" type="radio"  
                                    checked={followUp.call_details.physical_health === "POOR"}
                                    value="POOR"
                                    //onChange={(e)=> formObj.setPhysicalHealth(e.target.value)} 
                                />
                                <label className="form-check-label" htmlFor="poorHealth">POOR</label>
                                </div><br/>
                            </div>

                            <div className='row mt-2 m-2 mb-0'>
                                <div className='col-12'>
                                <label htmlFor="mentalStatus">Current Mental Status</label><br/>
                                {
                                    mentalStatus.map((ment)=>{
                                    return(
                                        <div className="form-check form-check-inline" key={ment.id}>
                                        <input className="form-check-input" name="mentalStatus" type="checkbox"  
                                        checked={followUp.call_details.mental_status.split(", ").some((item) => {return  item === ment.status})}  
                                            value={ment.status}
                                            //onChange={(e)=> {handleCheckboxChange(e, formObj.setMentalStatus, formObj.mentalStatus, ment.status)}} 
                                        />
                                        <label className="form-check-label" htmlFor={ment.status}>{ment.status}</label>
                                        </div>
                                    )
                                    })
                                }
                                </div>
                            </div>
                            </SuicideDiv>

                            <SuicideDiv className='p-3 row pb-5'>
                            <h4 className='pt-3 pb-2'><Blueish> SOCIAL HISTORY </Blueish></h4>
                            <div className="col form-check">
                                <label htmlFor="gender">Type of Neighbourhood:</label><br/>
                                <div className="form-check form-check-inline">
                                <input className="form-check-input" name="goodHood" type="radio"  
                                    checked={followUp.call_details.living_arrangement.includes("Good")}
                                    value="Good"
                                    //onChange={(e)=> formObj.setHoodType(e.target.value)} 
                                />
                                <label className="form-check-label" htmlFor="goodHood">Good</label>
                                </div>

                                <div className="form-check form-check-inline">
                                <input className="form-check-input" name="poorHood" type="radio"  
                                    checked={followUp.call_details.living_arrangement.includes("Poor")}
                                    value="Poor"
                                   // onChange={(e)=> formObj.setHoodType(e.target.value)} 
                                />
                                <label className="form-check-label" htmlFor="poorHood">Poor</label>
                                </div>
                            </div>
                            <div className="col form-check">
                                <label htmlFor="gender">Living Arrangements:</label><br/>
                                <div className="form-check form-check-inline">
                                <input className="form-check-input" name="aloneType" type="radio"  
                                    checked={followUp.call_details.living_arrangement.includes("Alone")}
                                    value="Alone"
                                    //onChange={(e)=> formObj.setLivingType(e.target.value)} 
                                />
                                <label className="form-check-label" htmlFor="aloneType">Alone</label>
                                </div>

                                <div className="form-check form-check-inline">
                                <input className="form-check-input" name="othersType" type="radio"  
                                    checked={followUp.call_details.living_arrangement.includes("With Others")}
                                    value="With Others"
                                    //onChange={(e)=> formObj.setLivingType(e.target.value)} 
                                />
                                <label className="form-check-label" htmlFor="othersType">With Others</label>
                                </div>
                            </div>
                            <div className="col form-check">
                                <label className="form-check-label pb-1" htmlFor="antiSocial">Antisocial Behaviour or History</label>
                                <input type="checkbox" className="form-check-input" id="antiSocial" 
                                checked={followUp.call_details.is_antisocial}  
                                //onChange={(e)=> formObj.setIsAntisocial(e.target.checked)}
                                />
                            </div>

                            <div className='row mt-2 m-2 mb-0'>
                                <div className='col form-check'>
                                <label className="form-check-label pb-1" htmlFor="alcoholism">Is Alcoholic</label>
                                <input type="checkbox" className="form-check-input" id="alcoholism" 
                                    checked={followUp.call_details.is_alcohol_addict == 1}  
                                    // onChange={(e)=> {
                                    // formObj.setIsAlcoholic(e.target.checked)
                                    // e.target.checked ? !formObj.selectedCallTypes.includes("Addiction") && formObj.setSelectedCallTypes(formObj.selectedCallTypes + ", Addiction") : formObj.setSelectedCallTypes("Suicide")
                                    // }}
                                    /><br/>
                                </div>
                                <div className='col form-check'>
                                

                                <label className="form-check-label pb-1" htmlFor="hasDrugAddiction">Has Drug Addiction</label>
                                <input type="checkbox" className="form-check-input" id="hasDrugAddiction" 
                                    checked={followUp.call_details.is_drug_addict == 1}  
                                    // onChange={(e)=> {
                                    // formObj.setIsDrugAddict(e.target.checked)
                                    // e.target.checked ? !formObj.selectedCallTypes.includes("Addiction") && formObj.setSelectedCallTypes(formObj.selectedCallTypes + ", Addiction") : formObj.setSelectedCallTypes("Suicide")
                                    // }}
                                    /><br/>
                                </div>

                                <div className='col form-check'>
                                <label htmlFor="lossLovedOne">Loss of Loved One (actual, threatened, or imagined)</label>
                                <input type="checkbox" className="form-check-input" id="lossLovedOne" 
                                    checked={followUp.call_details.lost_loved_ones == 1}  
                                    //onChange={(e)=> formObj.setLostLovedOne(e.target.checked)}
                                    /><br/>         
                                </div>
                            </div>
                            <div className=' mt-2 m-2 mb-0'>
                                <label htmlFor="financialResource">Financial Resource</label><br/>
                                {
                                    financialStatus.map((finance)=>{
                                    return(
                                        <div className="form-check form-check-inline" key={finance.id}>
                                        <input className="form-check-input" name="financialStatus" type="checkbox"  
                                        checked={followUp.call_details.financial_status.split(", ").some((item) => {return  item === finance.status})}  
                                       // onChange={(e) => {handleCheckboxChange(e, formObj.setFinancialResource, formObj.financialResource, finance.status)}} 
                                        />
                                        <label className="form-check-label" htmlFor={finance.status}>{finance.status}</label>
                                        </div>
                                    )
                                    })
                                }
                            </div>
                            </SuicideDiv>
                            <SuicideDiv className='row p-3 '>
                            <p className='text-center'><Redish><strong>PERCEIVED LEVEL OF RISK (FROM 1-10; 10 BEING THE HIGHEST)</strong></Redish></p>
                            <div className='row px-5 mx-3'>
                                {
                                    risksLevels.map((level)=>{
                                    return(
                                        <div className=" col form-check form-check-inline" key={level.id}>
                                        <input className="form-check-input" name="riskLevel" type="radio"  
                                            checked={followUp.call_details.risk_level == level.level}
                                            value={level.level}
                                            //onChange={(e)=> formObj.setRiskLevel(e.target.value)}     
                                            />
                                            <label className="form-check-label" htmlFor={level.level}>{level.level}</label>
                                        </div>
                                        )
                                    }) 
                                }
                            </div>
                            </SuicideDiv>
                        </>
                        }

                            <CallTypeWrapper className="p-4 mt-4">
                                <CallTypes className=" row col-lg-6 col-12 mt-4 mb-4">
                                <h3 className="mb-4">Call Type<Redish>*</Redish></h3>
                                {
                                callTypes.map((callType) => {
                                    return (
                                    <div key={callType.id+callType.type} className={"col-md-6 form-check mb-1 order-col-"+callType.id}>
                                        <input type="checkbox" className="form-check-input" id={callType.id+callType.type}
                                            checked={updatedCallTypes.split(", ").some((item) => {return  item === callType.type})}  
                                            onChange={(e) => {handleCheckboxChange(e, setUpdatedCalltypes, updatedCallTypes, callType.type)}} 
                                            />
                                        <label className="form-check-label" htmlFor={callType.id+callType.type}>{callType.type}</label>
                                    </div>
                                    );
                                })
                                }
                                </CallTypes>

                            <CallNotes className="form-group mt-4 p-2">
                                <label htmlFor="callNotes"><h6>CALL NOTES</h6></label>
                                <textarea className="form-control" id="callNotes" rows="6" onChange={(e)=> setUpdatedNotes(e.target.value)} value={updatedNotes}></textarea>
                            </CallNotes>
                        </CallTypeWrapper>
                        <FolowUpTypeWrapper className="p-4 mt-4">
                            <FolowUpTypes className=" row col-lg-6 col-12 mt-4 mb-4">
                                <h4 className="mb-4">Follow Up Type<Redish>*</Redish></h4>
                                {
                                followUpTypes.map((followUpType) => {
                                return (
                                    <div key={followUpType.id} className={"col-md-6 form-check mb-1 order-col-"+followUpType.id}>
                                        <input type="checkbox" className="form-check-input" id={followUpType.id+followUpType.type}
                                        checked={updatedFollowUpTypes.split(", ").some((item) => {return  item === followUpType.type})}  
                                        onChange={(e) => {handleCheckboxChange(e, setUpdatedFollowUpTypes, updatedFollowUpTypes, followUpType.type)}} 
                                        />
                                        <label className="form-check-label" htmlFor={followUpType.id+followUpType.type}>{followUpType.type}</label>
                                    </div>
                                );
                                })
                                }
                            </FolowUpTypes>
                        </FolowUpTypeWrapper>
                            { followUp.call_resources.length > 0 &&
                            <div className="row form-group mb-2 mt-2">
                                  <div className="col form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="sendResources" 
                                        checked={sendResources}  
                                        onChange={(e)=> setSendResources(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="sendResources"> Send resources ›</label>
                                </div>
                                <div className="col">
                                    <h6>PREVIOUS RESOURCES SENT</h6>
                                    <SpanContainer style={{"width": "35%"}}>
                                        {
                                        followUp.call_resources.map((resource) => {
                                            var name = resource.title;
                                            return <span key={name} className={camelCase(name) +' p-1 m-2'}>{resource.title}</span>
                                        })
                                        }
                                    </SpanContainer>
                                </div>
                            </div>
                            }

                        <div className={ sendResources ? "row mt-4": "d-none" } >

                        <div className="col mt-2 mb-2">
                        <h6>DIGITAL RESOURCES</h6>

                        <SendViaWrapper className="rounded col-lg-6 col-12 mb-4 p-2">
                            <p>Send Via:</p>

                            <div className="form-check form-check-inline">
                            <input className="form-check-input" name="sendVia" type="radio"  
                                checked={updatedResourceDelivery === "email"}
                                value="email"
                                onChange={(e)=> setUpdatedResourceDelivery(e.target.value)} 
                            />
                            <label className="form-check-label" htmlFor="emailDelivery">Email</label>
                            </div>

                            <div className="form-check form-check-inline">
                            <input className="form-check-input" name="sendVia" type="radio"  
                                checked={updatedResourceDelivery === "sms"}
                                value="sms"
                                onChange={(e)=> setUpdatedResourceDelivery(e.target.value)} 
                            />
                            <label className="form-check-label" htmlFor="smsDelivery">SMS (text message)</label>
                            </div>
                        </SendViaWrapper>

                        {
                            resources.map((resource) => {
                            if(resource.type === "digital")
                            return (
                                <div key={resource.id+resource.resource} className="row  form-check mb-2">
                                <div className="col">
                                    <input type="checkbox" className="form-check-input" id={resource.id+resource.resource}
                                    checked={updatedDigitalResources.split(", ").some((item) => {return  item === resource.resource})} 
                                    onChange={(e) => {handleCheckboxChange(e, setUpdatedDigitalResources, updatedDigitalResources, resource.resource)}}
                                    />
                                    <label className="form-check-label" htmlFor={resource.id+resource.resource}>{resource.resource}</label>
                                </div>
                                </div>
                            );
                            })
                        }
                        </div>

                            <div className="mt-2 col">
                            <h6>PHYSICAL RESOURCES</h6>
                            {
                                resources.map((resource) => {
                                if(resource.type === "physical")
                                return (
                                    <div key={resource.id+resource.resource} className="row form-check mb-2">
                                    <div className="col">
                                        <input type="checkbox" className="form-check-input" id={resource.id+resource.resource}
                                        checked={updatedPhysicalResources.split(", ").some((item) => {return  item === resource.resource})}  
                                        onChange={(e) => {handleCheckboxChange(e, setUpdatedPhysicalResources, updatedPhysicalResources, resource.resource)}}
                                        />
                                        <label className="form-check-label" htmlFor={resource.id+resource.resource}>{resource.resource}</label>
                                    </div>
                                    </div>
                                );
                                })
                            }
                            </div>
                        </div>
                        </CallerInfoWrapper>
                        <ButtonWrapper className='mb-5'>
                            { followUp.call_details.status != '2' &&
                                <>
                                <CallButton onClick={(e)=>clickToDial(e)} className="p-2 m-2">CALL BACK NOW</CallButton>
                                <UpdateButton onClick={(e)=> updateFollowUpStatus(e, 3)} className={ !canUpdate? "disabled p-2 m-2": "p-2 m-2"} disabled={!canUpdate}>UPDATE FOLLOW UP</UpdateButton>
                                <CompleteButton onClick={(e)=> updateFollowUpStatus(e, 2)} className={ !canUpdate? "disabled p-2 m-2": "p-2 m-2"} disabled={!canUpdate}>COMPLETE FOLLOW UP</CompleteButton>
                                </>
                            }
                            <CloseButton onClick={(e) => {navigate("/pastoralCare")}} className="p-2 m-2">CLOSE FOLLOW UP</CloseButton>

                        </ButtonWrapper>

                    </Form>
                </div>

            : <Spinner />
        }   
    </div>
  )
}

const Form = styled.form`
`;
const BackLinkContainer = styled.div`
    background-color: #E7F8FA;
    button {
        color: #178B96;
        font-weight: 700;
        display: flex;
        font-family: 14px;
        letter-spacing: 0.2em;
        background-color: transparent;
        font-size: 0.9em;
        text-decoration: none
    }
    svg{
        vertical-align: middle;
    }
`;
const CallerInfoWrapper = styled.div`

`;
const SpanContainer = styled.div`
    display: inline;
    span{
        color: white;
        border-radius: 8px;
        display:inline-block;

    }
`;
const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;

    .disabled{
        background-color: grey;
    }
`;
const Button = styled.button`
border-radius: 8px;
    display:block;
    border: 0;
    width:70%;
    color: white;
`;
 
const CallButton = styled(Button)`
background-color: #FF7234;
`;

const UpdateButton = styled(Button)`
    background-color: #115057;
`;
const CompleteButton = styled(Button)`
    background-color: #40D13D;

`;


const CloseButton = styled(Button)`
background-color: red;
`;
const Header = styled.h1`
  font-weight: 1000;
`;
const CallTypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F3F9FA;
`;

const CallTypes = styled.div`
    align-self: center;
`;

const CallNotes = styled.div`
  border-top: 3px solid #ADCFD4;
`
const Redish = styled.span`
    color: #EC3310 !important;
`;
const FolowUpTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F3F9FA;
`;

const SuicideDiv = styled.div`
  h4{
    text-align: left;
  }
  border-top: 1px solid #178B96;
  label{
    font-weight: 500;
    // color: #EC3310;
  }
  input[type=text]:focus, input[type=text] {
    // border: 1px solid #EC3310 !important;
  }
`;

const FolowUpTypes = styled.div`
  align-self: center;
`;

const SendViaWrapper = styled.div`
  border: 1px solid #2DB3C0;
`;
export default FollowUp