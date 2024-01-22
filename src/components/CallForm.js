import React, {useContext} from 'react';
import '../styles/CallForm.css';
import {callTypes, dispositions, resources, blockReasons, ageRanges, followUpTypes,
   resourceDelivery, mentalStatus, financialStatus, maritialStatus, risksLevels } from "../assets/data";
import { ToastContainer } from 'react-toastify';
import { CallFormContext } from '../contexts/CallFormContext'
import CallTips from './CallTips';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import 'react-toastify/dist/ReactToastify.css';


//CALL FORM IS THE MAIN PAGE FOR MOST OF THE FUNCTIONALITY OF THIS APPLICATION
//The form where prayer partner fills up information when on calls
const CallForm = () => {


  const {formObj, callerHistory, handleCheckboxChange, handleResourceDelivery, handleOnSubmit} = useContext(CallFormContext);
  const [modalShow, setModalShow] = React.useState(false);

  //This is code for keyhandlers so on select of a specify character an item(Thanskgiving) will be selected
  //The characters currently appears in the call notes so this functionality is not yet active
  //  const keyDownHandler = (e) => {  
  //    //metakey checks if control command option shift key are press
  //    //to avoid keylisteners stop users from using shortcuts
  //    if (e.key === "1") {
  //         handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[0].type)
  //     }else if(e.key === "2" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[1].type)
  //     }else if(e.key === "3" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[2].type)
  //     }else if(e.key === "4" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[3].type)
  //     }else if(e.key === "5" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[4].type)
  //     }else if(e.key === "6" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[5].type)
  //     }else if(e.key === "7" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[6].type)
  //     }else if(e.key === "8" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[7].type)
  //     }else if(e.key === "9" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[8].type)
  //     }else if(e.key === "q" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[9].type)
  //     }else if(e.key === "w" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[10].type)
  //     }else if(e.key === "e" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[11].type)
  //     }else if(e.key === "r" && !e.metaKey)  {
  //       handleKeyEvent(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callTypes[12].type)
  //     }
  //   }
     
  // useEffect(() => {
  //   //
  //   document.addEventListener('keydown', keyDownHandler);

  //   return () => {
  //     document.removeEventListener('keydown', keyDownHandler);
  //   };  
  // })
  return (
    <Wrapper className='row mb-5 mt-5'>
      <ToastContainer />
      <>

        { formObj.isSuicideCall &&
        <CrisisButton style={{background: "#EC3310", position: "absolute",}}
         onClick={() => setModalShow(true)} > {"CRISIS CALL TIPS >"}
        </CrisisButton>
        }

        <CallTips
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

      </>
      
      <div className=' col-12 mb-5'>
        <Header className='p-2 mt-4'>{formObj.isSuicideCall ? "Suicide Intent Form" :"Call Form"}</Header>
        <div className="m-3 mb-0 form-check form-switch" style={{color: "#EC3310"}}>
          <input className="form-check-input" type="checkbox" id="isSuicideCall" 
            checked={formObj.isSuicideCall}  
            onChange={(e)=> {
              formObj.setIsSuicideCall(e.target.checked);
              e.target.checked ? formObj.setSelectedCallTypes("Suicide") : formObj.setSelectedCallTypes("")
              e.target.checked ? formObj.setSelectedDisposition("Pastoral Call - FOLLOW UP") : formObj.setSelectedDisposition("")
              e.target.checked ? formObj.setSelectedFollowUpTypes("Suicide Call") : formObj.setSelectedFollowUpTypes("")
            }} />
          <label className="form-check-label" htmlFor="isSuicideCall"> Potential Suicide call ›</label>
        </div>
        <Form onSubmit={handleOnSubmit} id="callForm"  autoComplete='off'>
        { callerHistory && callerHistory.length > 0 && 
          <>
          <CallHistoryWrapper className="p-3">
          <h6>
          CALL HISTORY | LOCATION, NOTES:
          </h6>
          <div className="form-group row">
            <div className="col-sm-10">
              <CallHistoryButton type="button" className="btn btn-outline-secondary" 
                onClick={(e)=> formObj.setShowCallHistory(!formObj.showCallHistory)}>
                Confidential Call History
              </CallHistoryButton>
            </div>
          </div>
          </CallHistoryWrapper>

          <CallHistoryTable className={ formObj.showCallHistory ? "table table-striped": "d-none" }>
            <thead>
              <tr>
                <th className='row-date'>Call Date</th>
                <th className='row-type'>Call Type </th>
                <th className='row-disposition'>Disposition</th>
                <th className='row-location'>Location</th>
                <th className='row-notes'>Notes</th>
              </tr>
            </thead>
            
            <tbody>
              {callerHistory.map((item) =>{
              if (item.call_details.task_sid) {
                const day = new Date(item.call_details.created_at);
                const m = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
                const str_op = day.getDate() + ' ' + m[day.getMonth()] + ' ' + day.getFullYear();

                return(
                  <tr key={item.call_details.task_sid}>
                     <td>{str_op}</td>
                    <td>{item.call_details.call_type}</td>
                    <td>{item.call_details.disposition}</td>
                    <td>{item.call_details.city}</td>
                    <td>{item.call_details.notes}</td>
                  </tr>
                )   
              }           
              })}
            </tbody>
          </CallHistoryTable>
          </>
        }
          <CallerInfoWrapper className="p-4">
            <div className="row form-group mb-2">
              <div className="col">
                <label htmlFor="firstName"><h6>FIRST NAME</h6></label>
                <input type="text" className="form-control" id="firstName" onChange={(e)=> formObj.setFirstName(e.target.value)} value={formObj.firstName} />
              </div>
              <div className="col">
                <label htmlFor="lastName"><h6>LAST NAME</h6></label>
                <input type="text" className="form-control" id="lastName" onChange={(e)=> formObj.setLastName(e.target.value)} value={formObj.lastName} />
              </div>
            </div>
            <div className="row form-group mb-2">
              <div className="col">
                <label htmlFor="emailAddress"><h6>EMAIL</h6></label>
                <input type="email" className="form-control" id="emailAddress" onChange={(e)=> formObj.setEmailAddress(e.target.value)} value={formObj.emailAddress}/>
                <small id="emailHelp" className="form-text text-muted">Format: name@domain.something</small>
              </div>
              <div className="col">
                <label htmlFor="phoneNumber"><h6> PHONE NUMBER</h6></label>
                <input type="text" className="form-control" id="phoneNumber" onChange={(e)=> formObj.setUserNumber(e.target.value)} value={formObj.userNumber}/>
              </div>
            </div>
            <div className="row form-check mb-3">
              <div className="col">
                <input type="checkbox" className="form-check-input" id="subscribeCaller" 
                  checked={formObj.subscribeCaller}  
                  onChange={(e)=> formObj.setSubscribeCaller(e.target.checked)}/>
                <label className="form-check-label" htmlFor="subscribeCaller">Subscribe caller to the newsletter</label>
              </div>
            </div>
            <div className="row form-group mb-2">
              <div className="col">
                <label htmlFor="mailingAddress"><h6> MAILING ADDRESS</h6></label>
                <input type="text" className="form-control" id="address" onChange={(e)=> formObj.setAddress(e.target.value)} value={formObj.address}/>
              </div>
              <div className="col">
                <label htmlFor="postalCode"><h6>POSTAL CODE</h6></label>
                <input type="text" className="form-control" id="postalCode" onChange={(e)=> formObj.setUserZipPostal(e.target.value)} value={formObj.userZipPostal} />
              </div>
            </div>
            <div className="row form-group mb-2">
              <div className="col">
                <label htmlFor="city"><h6>CITY</h6></label>
                <input type="text" className="form-control" id="city" onChange={(e)=> formObj.setUserCity(e.target.value)} value={formObj.userCity} />
              </div>
              <div className="col">
                <label htmlFor="province"><h6>PROVINCE</h6></label>
                <input type="text" className="form-control" id="province" onChange={(e)=> formObj.setUserStateProv(e.target.value)} value={formObj.userStateProv} />
              </div>
              <div className="col">
                <label htmlFor="country"><h6>COUNTRY</h6></label>
                <input type="text" className="form-control" id="country" onChange={(e)=> formObj.setUserCountry(e.target.value)} value={formObj.userCountry} />
              </div>
            </div>
            <div className="row form-check mb-3">
              <div className="col">
                <input type="checkbox" className="form-check-input" id="isHouse" 
                  checked={formObj.isHouse}  
                  onChange={(e)=> formObj.setIsHouse(e.target.checked)}/>
                <label className="form-check-label" htmlFor="isHouse">
                  Address is an apartment?
                  { formObj.isHouse && 
                   <span> (<small id="mailingAddress" className="form-text text-muted">Request unit number</small>)</span>
                  }
                </label>
              </div>
            </div>

            
            { formObj.isSuicideCall &&
              <>
                <SuicideDiv className='row pb-5'>
                  <h4 className='pt-3 pb-3'><Blueish> CIRCUMSTANCES: ONE </Blueish><Redish><u>"YES"</u></Redish> <Blueish>ANSWER REQUIRED FOR THIS FORM:</Blueish></h4>
                  <div className="col form-check m-3 mb-0 mt-0">
                    <label className="form-check-label" htmlFor="harmInflicted">Harm has been inflicted?</label>
                    <input type="checkbox" className="form-check-input" id="harmInflicted" 
                      checked={formObj.harmInflicted}  
                      onChange={(e)=> formObj.setHarmInflicted(e.target.checked)}/>
                  </div>
                  <div className="col form-check">
                  <label className="form-check-label" htmlFor="drugsTaken">Has Taken Drugs?</label>

                    <input type="checkbox" className="form-check-input" id="drugsTaken" 
                      checked={formObj.drugsTaken}  
                      onChange={(e)=> formObj.setDrugsTaken(e.target.checked)}/>
                  </div>
                  <div className="row form-group mb-2 mt-2">
                    <div className="col">
                      <label htmlFor='harmInflictedDesc'>Harm Inflicted Description</label>
                      <textarea className="form-control" id="harmInflictedDesc" rows="3" cols="2" onChange={(e)=> formObj.setHarmInflictedDesc(e.target.value)} value={formObj.harmInflictedDesc}></textarea>
                    </div>
                    <div className="col">
                      <label htmlFor='drugsTakenDesc'>Drugs Taken Description</label>
                      <textarea className="form-control" id="drugsTakenDesc" rows="3" onChange={(e)=> formObj.setDrugsTakenDesc(e.target.value)} value={formObj.drugsTakenDesc}></textarea>
                    </div>
                  </div>
                </SuicideDiv>

                <SuicideDiv className='row pb-3'>
                  <h4 className='pt-3 pb-3'><Blueish> SUICIDAL INDICATORS </Blueish></h4>
                  <div className="col form-check m-3 mb-0 mt-0">
                    <input type="checkbox" className="form-check-input " id="prevSuicideAttempts" 
                      checked={formObj.prevSuicideAttempt}  
                      onChange={(e)=> formObj.setPrevSuicideAttempt(e.target.checked)}/>
                    <label className="form-check-label" htmlFor="prevSuicideAttempts">Has previous suicide attempts?</label>
                  </div>
                  <CallNotes className="form-group mt-4 p-2">
                    <label htmlFor="suicidePlan">Suicide Plan: vague, general, practical, concrete, available mean;<br/>
                    <small><Blueish> Method Used: Less lethal(wrist cutting, pills), Highly lethal(firearms, poison, hanging gas, jumping)</Blueish></small> </label>
                    <textarea className="form-control" id="suicidePlan" rows="3" onChange={(e)=> formObj.setSuicidePlan(e.target.value)} value={formObj.suicidePlan}></textarea>
                  </CallNotes>
                </SuicideDiv>
              </>
            }

            <div className='row'>
              <div className="col form-check-inline">
                <label htmlFor="ageRange"><h6>AGE RANGE</h6></label>
                <select className="form-select mb-2" aria-label="Age Range List" id="ageRangeList"
                  value={formObj.selectedAgeRange} 
                  onChange={(e)=> formObj.setSelectedAgeRange(e.target.value)}>
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
                    checked={formObj.selectedGender === "male"}
                    value="male"
                    onChange={(e)=> formObj.setSelectedGender(e.target.value)} 
                  />
                  <label className="form-check-label" htmlFor="maleGender">Male</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" name="gender" type="radio"  
                    checked={formObj.selectedGender === "female"}
                    value="female"
                    onChange={(e)=> formObj.setSelectedGender(e.target.value)} 
                  />
                  <label className="form-check-label" htmlFor="femaleGender">Female</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" name="gender" type="radio" 
                    checked={formObj.selectedGender === "prefer not to say"} 
                    value="prefer not to say"
                    onChange={(e)=> formObj.setSelectedGender(e.target.value)} 
                  />
                  <label className="form-check-label" htmlFor="notKnownGender">Prefer not to say</label>
                </div>
              </div>
              { formObj.isSuicideCall &&
                <div className='col'>
                  <label htmlFor="maritalStatus"><h6>Marital Status</h6></label><br/>
                    {maritialStatus.map((status) =>{
                      return(
                        <div className="form-check form-check-inline" key={status.id}>
                          <input className="form-check-input" name="maritalStatus" type="radio"  
                            checked={formObj.maritalStatus === status.status}
                            value={status.status}
                            onChange={(e)=> formObj.setMaritalStatus(e.target.value)} 
                          />
                        <label className="form-check-label" htmlFor={status.status}>{status.status}</label>
                      </div>
                      )
                    })}     
                </div>
              }
            </div>
          </CallerInfoWrapper>
          { formObj.isSuicideCall &&
              <>
                <SuicideDiv className='p-3 row pb-5'>
                  <h4 className='pt-3 pb-2'><Blueish> MEDICAL HISTORY </Blueish></h4>
                  <div className="col form-check">
                    <label htmlFor="gender">Physical Health:</label><br/>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" name="goodHealth" type="radio"  
                        checked={formObj.physicalHealth === "GOOD"}
                        value="GOOD"
                        onChange={(e)=> formObj.setPhysicalHealth(e.target.value)} 
                      />
                      <label className="form-check-label" htmlFor="goodHealth">GOOD</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" name="poorHealth" type="radio"  
                        checked={formObj.physicalHealth === "POOR"}
                        value="POOR"
                        onChange={(e)=> formObj.setPhysicalHealth(e.target.value)} 
                      />
                      <label className="form-check-label" htmlFor="poorHealth">POOR</label>
                    </div><br/>
                    <p style={{width: "60%"}}><Blueish>(recent visits to physician, hospitalization, surgery, chronic debilitating diseases, treatment failures)</Blueish></p>

                  </div>

                  {/* <div className="col form-check">
                    <label className="form-check-label pb-1" htmlFor="psychiatricHistory">Has Psychiatric History?</label>
                    <input type="checkbox" className="form-check-input" id="psychiatricHistory" 
                      checked={formObj.psychiatricHistory}  
                      onChange={(e)=> formObj.setPsychiatricHistory(e.target.checked)}/><br/> 
                    <label htmlFor="psychiatricHistoryDesc">Present or previous psychiatric problems & treatment</label>
                    <input type="text" className="form-control" id="psychiatricHistoryDesc" onChange={(e)=> formObj.setPsychiatricDesc(e.target.value)} value={formObj.psychiatricDesc} />

                  </div> */}

                  <div className='row mt-2 m-2 mb-0'>
                    <div className='col-12'>
                      <label htmlFor="mentalStatus">Current Mental Status</label><br/>
                      {
                        mentalStatus.map((ment)=>{
                          return(
                            <div className="form-check form-check-inline" key={ment.id}>
                              <input className="form-check-input" name="mentalStatus" type="checkbox"  
                               checked={formObj.mentalStatus.split(", ").some((item) => {return  item === ment.status})}  
                                value={ment.status}
                                onChange={(e)=> {handleCheckboxChange(e, formObj.setMentalStatus, formObj.mentalStatus, ment.status)}} 
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
                        checked={formObj.hoodType === "Good"}
                        value="Good"
                        onChange={(e)=> formObj.setHoodType(e.target.value)} 
                      />
                      <label className="form-check-label" htmlFor="goodHood">Good</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" name="poorHood" type="radio"  
                        checked={formObj.hoodType === "Poor"}
                        value="Poor"
                        onChange={(e)=> formObj.setHoodType(e.target.value)} 
                      />
                      <label className="form-check-label" htmlFor="poorHood">Poor</label>
                    </div>
                  </div>
                  <div className="col form-check">
                    <label htmlFor="gender">Living Arrangements:</label><br/>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" name="aloneType" type="radio"  
                        checked={formObj.livingType === "Alone"}
                        value="Alone"
                        onChange={(e)=> formObj.setLivingType(e.target.value)} 
                      />
                      <label className="form-check-label" htmlFor="aloneType">Alone</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" name="othersType" type="radio"  
                        checked={formObj.livingType === "With Others"}
                        value="With Others"
                        onChange={(e)=> formObj.setLivingType(e.target.value)} 
                      />
                      <label className="form-check-label" htmlFor="othersType">With Others</label>
                    </div>
                  </div>
                  <div className="col form-check">
                    <label className="form-check-label pb-1" htmlFor="antiSocial">Antisocial Behaviour or History</label>
                    <input type="checkbox" className="form-check-input" id="antiSocial" 
                      checked={formObj.isAntisocial}  
                      onChange={(e)=> formObj.setIsAntisocial(e.target.checked)}/>
                  </div>

                  <div className='row mt-2 m-2 mb-0'>
                    <div className='col form-check'>
                      <label className="form-check-label pb-1" htmlFor="alcoholism">Is Alcoholic</label>
                      <input type="checkbox" className="form-check-input" id="alcoholism" 
                        checked={formObj.isAlcoholic}  
                        
                        onChange={(e)=> {
                          formObj.setIsAlcoholic(e.target.checked)
                          e.target.checked ? !formObj.selectedCallTypes.includes("Addiction") && formObj.setSelectedCallTypes(formObj.selectedCallTypes + ", Addiction") : formObj.setSelectedCallTypes("Suicide")
                        }}/><br/>
                    </div>
                    <div className='col form-check'>
                      

                      <label className="form-check-label pb-1" htmlFor="hasDrugAddiction">Has Drug Addiction</label>
                      <input type="checkbox" className="form-check-input" id="hasDrugAddiction" 
                        checked={formObj.isDrugAddict}  
                        onChange={(e)=> {
                          formObj.setIsDrugAddict(e.target.checked)
                          e.target.checked ? !formObj.selectedCallTypes.includes("Addiction") && formObj.setSelectedCallTypes(formObj.selectedCallTypes + ", Addiction") : formObj.setSelectedCallTypes("Suicide")
                        }}/><br/>
                    </div>

                    <div className='col form-check'>
                      <label htmlFor="lossLovedOne">Loss of Loved One (actual, threatened, or imagined)</label>
                      <input type="checkbox" className="form-check-input" id="hasDrugAddiction" 
                        checked={formObj.lostLovedOne}  
                        onChange={(e)=> formObj.setLostLovedOne(e.target.checked)}/><br/>         
                    </div>
                  </div>
                  <div className=' mt-2 m-2 mb-0'>
                    <label htmlFor="financialResource">Financial Resource</label><br/>
                      {
                        financialStatus.map((finance)=>{
                          return(
                            <div className="form-check form-check-inline" key={finance.id}>
                              <input className="form-check-input" name="financialStatus" type="checkbox"  
                               checked={formObj.financialResource.split(", ").some((item) => {return  item === finance.status})}  
                               onChange={(e) => {handleCheckboxChange(e, formObj.setFinancialResource, formObj.financialResource, finance.status)}} 
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
                           checked={formObj.riskLevel === level.level}
                           value={level.level}
                           onChange={(e)=> formObj.setRiskLevel(e.target.value)}      />
                          <label className="form-check-label" htmlFor={level.level}>{level.level}</label>
                        </div>
                      )
                     }) 
                    }
                  </div>
                </SuicideDiv>
              </>
            }
          {/* worker && !worker.attributes.routing.skills.includes('Pastoral Care') && */}
          
          <CallTypeWrapper className="p-4 mt-4">
            { !formObj.isSuicideCall &&
              <CallTypes className=" row col-lg-6 col-12 mt-4 mb-4">
                <h3 className="mb-4">Call Type<Redish>*</Redish></h3>
              {
                callTypes.map((callType) => {
                  return (
                    <div key={callType.id+callType.type} className={"col-md-6 form-check mb-1 order-col-"+callType.id}>
                        <input type="checkbox" className="form-check-input" id={callType.id+callType.type}
                          checked={formObj.selectedCallTypes.split(", ").some((item) => {return  item === callType.type})}  
                          onChange={(e) => {handleCheckboxChange(e, formObj.setSelectedCallTypes, formObj.selectedCallTypes, callType.type)}} 
                          />
                        <label className="form-check-label" htmlFor={callType.id+callType.type}>{callType.type}</label>
                    </div>
                  );
                })
              }
              {/* <CallTypeDescription className='mt-5'>Click call type or select associated character </CallTypeDescription> */}
              </CallTypes>
            }
            <CallNotes className="form-group mt-4 p-2">
              <label htmlFor="callNotes"><h6>CALL NOTES</h6></label>
              <textarea className="form-control" id="callNotes" rows="6" onChange={(e)=> formObj.setCallNotes(e.target.value)} value={formObj.callNotes}></textarea>
            </CallNotes>
          </CallTypeWrapper>

          
       
          <FollowUpWrapper className="mt-4 p-4">
          { !formObj.isSuicideCall &&
          <>
            <h3>Follow-Up Information</h3>

            <label className="form-check-label" htmlFor="dispositionList"><h6>DISPOSITION<Redish>*</Redish></h6></label>

            <select className="form-select mb-2" aria-label="Disposition List" id="dispositionList"
              value={formObj.selectedDispositon} 
              onChange={(e)=> formObj.setSelectedDisposition(e.target.value)}>
              <option value="">Choose Disposition</option>
              { 
                dispositions.map((disposition) => {
                  return (
                    <option key={disposition.id+disposition.disposition} value={disposition.disposition}>{disposition.disposition}</option>
                  );
                })
              }
            </select>
            {
                formObj.selectedDispositon === "Pastoral Call - FOLLOW UP" && 
                <FolowUpTypeWrapper className="p-4 mt-4">
                 
                  <FolowUpTypes className=" row col-lg-6 col-12 mt-4 mb-4">
                  <h4 className="mb-4">Follow Up Type<Redish>*</Redish></h4>
                  {
                  followUpTypes.map((followUpType) => {
                    return (
                      <div key={followUpType.id} className={"col-md-6 form-check mb-1 order-col-"+followUpType.id}>
                          <input type="checkbox" className="form-check-input" id={followUpType.id+followUpType.type}
                            checked={formObj.selectedFollowUpTypes.split(", ").some((item) => {return  item === followUpType.type})}  
                            onChange={(e) => {handleCheckboxChange(e, formObj.setSelectedFollowUpTypes, formObj.selectedFollowUpTypes, followUpType.type)}} 
                            />
                          <label className="form-check-label" htmlFor={followUpType.id+followUpType.type}>{followUpType.type}</label>
                      </div>
                    );
                  })
                  }
                </FolowUpTypes>
                </FolowUpTypeWrapper>
                
              }
            </>
            }
              <DispositionOptions className="row p-2 ">
                <div className=" form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="sendResources" 
                    checked={formObj.sendResources}  
                    onChange={(e)=> formObj.setSendResources(e.target.checked)} />
                  <label className="form-check-label" htmlFor="sendResources"> Send resources ›</label>
                </div>
              
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="useTestimony" 
                    checked={formObj.canUseTestimony}  
                    onChange={(e)=> formObj.setCanUseTestimony(e.target.checked)}/>
                  <label className="form-check-label" htmlFor="useTestimony">Permission to use Testimony Information</label>
                </div>
              </DispositionOptions>

              <Resources className={ formObj.sendResources ? "row mt-4": "d-none" } >

                <DigitalResources className="col mt-2 mb-2">
                  <h6>RESOURCES</h6>

                  <SendViaWrapper className="rounded col-lg-8 col-12 mb-4 p-2">
                    <p>Send Via:</p>
                    {
                      resourceDelivery.map((item) =>{
                        return(
                          <div key={item.id+item.value} className="form-check form-check-inline">
                          <input className="form-check-input" name="sendVia" type="radio"  
                            checked={formObj.selectedResourceDelivery === item.value}
                            value={item.value}
                            onChange={(e)=> handleResourceDelivery(e, e.target.value)} 
                          />
                          <label className="form-check-label" htmlFor={item.value+"Delivery"}>{item.text}</label>
                        </div>
                        )
                      })
                    }
                  </SendViaWrapper>

                  {
                    resources.map((resource) => {
                      if(resource.type === "digital")
                      return (
                        <div key={resource.id+resource.resource} className="row  form-check mb-2">
                          <div className="col">
                            <input type="checkbox" className="form-check-input" id={resource.id+resource.resource}
                              checked={formObj.selectedResources.split(", ").some((item) => {return  item === resource.resource})} 
                              onChange={(e) => {handleCheckboxChange(e, formObj.setSelectedResources, formObj.selectedResources, resource.resource)}}
                            />
                            <label className="form-check-label" htmlFor={resource.id+resource.resource}>{resource.resource}</label>
                          </div>
                        </div>
                      );
                    })
                  }
                </DigitalResources>
                {
                  <PhysicalResources className="mt-2 col" 
                  style={{visibility: formObj.selectedResourceDelivery ===  "" || formObj.selectedResourceDelivery ===  "mail" ? "visible" : "hidden"}}>
                    <h6>MAIL ONLY RESOURCES</h6>
                    {
                      resources.map((resource) => {
                        if(resource.type === "physical")
                        return (
                          <div key={resource.id+resource.resource} className="row form-check mb-2">
                            <div className="col">
                              <input type="checkbox" className="form-check-input physical-resources" id={resource.id+resource.resource}
                                checked={formObj.selectedResources.split(", ").some((item) => {return  item === resource.resource})}  
                                onChange={(e) => {handleCheckboxChange(e, formObj.setSelectedResources, formObj.selectedResources, resource.resource)}}
                              />
                              <label className="form-check-label" htmlFor={resource.id+resource.resource}>{resource.resource}</label>
                            </div>
                          </div>
                        );
                      })
                    }
                  </PhysicalResources>
                }
                
              </Resources>
          </FollowUpWrapper>

          <BlockWrapper className="p-4">
            <Block>
            <BlockCallerWrapper className="row form-check mt-2 mb-2">
              <div className="col mt-5 mb-3">
                <input type="checkbox" className="form-check-input" id="blockCaller" 
                  checked={formObj.temporarilyBlockCaller}  
                  onChange={(e)=> formObj.setTemporarilyBlockCaller(e.target.checked)}/>
                <label className="form-check-label" htmlFor="blockCaller">Flag caller for temporal block</label>
              </div>
              { formObj.temporarilyBlockCaller &&
                <>
                  <label className="form-check-label " htmlFor="blockReason"><h6>REASON FOR BLOCK</h6></label>
                  <select className="form-select" aria-label="Reason For Block"  id="blockReason"
                    onChange={(e)=> {
                      formObj.setSelectedBlockReason(JSON.parse(e.target.value).reason)
                      formObj.setBlockDelay(JSON.parse(e.target.value).delay)
                    }}
                  >
                    { 
                      blockReasons.map((blockReason) => {
                        return (
                          <option key={blockReason.id+blockReason.reason} value={JSON.stringify(blockReason)}>{blockReason.reason}</option>
                        );
                      })
                    }
                  </select>
                </>
              }

            </BlockCallerWrapper>
            </Block>
          </BlockWrapper>
          
            <ButtonWrapper className="mt-4 p-4 mb-5"> 
              <FormButton type="submit" className="btn btn-lg col-12"><h3> Prayed! Log Call </h3></FormButton>
            </ButtonWrapper>
          
        </Form>
      </div>
    </Wrapper>
  )
}

export default CallForm

const Wrapper = styled.div`
`;

const Header = styled.h1`
  font-weight: 1000;
`;
const Form = styled.form`
`;

const CallerInfoWrapper = styled.div`

`;

const CallHistoryWrapper = styled.div`
  h6{
    margin: 0;
  }
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  background-color: #FFEAE4;
  color: #EC3310;

  button{
      border-color: #EC3310;
      white-space: nowrap;
      text-align: center;
      color: #EC3310;
  }
button:hover {
    border-color: #FF7234;
    color: #FF7234;
    background-color: #EAC3B9;
}

`;

const CallHistoryTable = styled.table`
table-layout: fixed;

  thead{
    background-color: #00323B;
    color: white;
  }
  td{
    white-space: nowrap;
    overflow: scroll;
   
  }
`;

const CallHistoryButton = styled.button`
  font-weight: 600 !important;
  letter-spacing: 0.2em;
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

const FolowUpTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F3F9FA;
`;

const FolowUpTypes = styled.div`
  align-self: center;
`;

// const CallTypeDescription = styled.p`
//   text-align:center;
//   color: #FF7234;
// `;
const CallNotes = styled.div`
  border-top: 3px solid #ADCFD4;
`
const FollowUpWrapper = styled.div`

`;
const DispositionOptions = styled.div`
  display: flex;
  flex-direction: row;

  div {
    width: auto;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
     box-sizing: content-box;
  }
`;
const Resources = styled.div`
  
`;
const DigitalResources = styled.div`

`;

const SendViaWrapper = styled.div`
  border: 1px solid #2DB3C0;
`;
const PhysicalResources = styled.div`

`;

const BlockWrapper = styled.div`
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
const Block = styled.div`
  border-top: 3px solid #ADCFD4;
`;
const BlockCallerWrapper = styled.div`
  
  div {
    color: #EC3310;
  }
`

const ButtonWrapper = styled.div`
`
const FormButton = styled.button`
  background-color: #FF7234;
  color: white;

  :hover {
    background-color: #EAC3B9;
    color: #FF7234;
  }

  :target {
    background-color: black;
  }
  h3{
    font-weight: 400 !important;
    margin: 0;
  }
`;
const Redish = styled.span`
    color: #EC3310 !important;
`;
export const Blueish = styled.span`
    color: #178B96 !important;
`;

const CrisisButton = styled(Button)`
  transform: rotate(-0.25turn);
  width: 200px;
  top: 200px; 
  right: -80px;
  border-radius: 0; 
  border: 0; 

`;