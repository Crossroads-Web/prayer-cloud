import React, {useContext} from 'react';
import '../styles/CallForm.css';
import {callTypes, dispositions, resources, blockReasons, ageRanges, followUpTypes } from "../assets/data";
import { ToastContainer } from 'react-toastify';
import { CallFormContext } from '../contexts/CallFormContext'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

const CallForm = () => {

  const {formObj, callerHistory, handleCheckboxChange, handleOnSubmit} = useContext(CallFormContext);

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
    <Wrapper className='row mb-5'>
        <ToastContainer />
      <div className=' col-12 mb-5'>
        <Header className='p-2 mt-4'>Call Form</Header>
        <Form onSubmit={handleOnSubmit} id="callForm"  autoComplete='off'>
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
                <label htmlFor="emailAddress"><h6> MAILING ADDRESS</h6></label>
                <input type="text" className="form-control" id="address" onChange={(e)=> formObj.setAddress(e.target.value)} value={formObj.address}/>
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

            <div className='row'>
              
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
                  <label className="form-check-label" htmlFor="notKnownGender">Prefer not to stay</label>
                </div>
              </div>

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
            </div>
          </CallerInfoWrapper>
          {/* worker && !worker.attributes.routing.skills.includes('Pastoral Care') && */}
         { callerHistory && callerHistory.length > 0 && 
          <>
          <CallHistoryWrapper className="p-3">
          <h6>
          CALL HISTORY | LOCATION, TOTAL CALLS:
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
          <CallTypeWrapper className="p-4 mt-4">
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

            <CallNotes className="form-group mt-4 p-2">
              <label htmlFor="callNotes"><h6>CALL NOTES</h6></label>
              <textarea className="form-control" id="callNotes" rows="6" onChange={(e)=> formObj.setCallNotes(e.target.value)} value={formObj.callNotes}></textarea>
            </CallNotes>
          </CallTypeWrapper>

          

          <FollowUpWrapper className="mt-4 p-4">
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
                  <h6>DIGITAL RESOURCES</h6>

                  <SendViaWrapper className="rounded col-lg-6 col-12 mb-4 p-2">
                    <p>Send Via:</p>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" name="sendVia" type="radio"  
                        checked={formObj.selectedResourceDelivery === "email"}
                        value="email"
                        onChange={(e)=> formObj.setSelectedResourceDelivery(e.target.value)} 
                      />
                      <label className="form-check-label" htmlFor="emailDelivery">Email</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" name="sendVia" type="radio"  
                        checked={formObj.selectedResourceDelivery === "sms"}
                        value="sms"
                        onChange={(e)=> formObj.setSelectedResourceDelivery(e.target.value)} 
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
                              checked={formObj.selectedDigitalResources.split(", ").some((item) => {return  item === resource.resource})} 
                              onChange={(e) => {handleCheckboxChange(e, formObj.setSelectedDigitalResources, formObj.selectedDigitalResources, resource.resource)}}
                            />
                            <label className="form-check-label" htmlFor={resource.id+resource.resource}>{resource.resource}</label>
                          </div>
                        </div>
                      );
                    })
                  }
                </DigitalResources>

                <PhysicalResources className="mt-2 col">
                  <h6>PHYSICAL RESOURCES</h6>
                  {
                    resources.map((resource) => {
                      if(resource.type === "physical")
                      return (
                        <div key={resource.id+resource.resource} className="row form-check mb-2">
                          <div className="col">
                            <input type="checkbox" className="form-check-input" id={resource.id+resource.resource}
                              checked={formObj.selectedPhysicalResources.split(", ").some((item) => {return  item === resource.resource})}  
                              onChange={(e) => {handleCheckboxChange(e, formObj.setSelectedPhysicalResources, formObj.selectedPhysicalResources, resource.resource)}}
                            />
                            <label className="form-check-label" htmlFor={resource.id+resource.resource}>{resource.resource}</label>
                          </div>
                        </div>
                      );
                    })
                  }
                </PhysicalResources>
              </Resources>
          </FollowUpWrapper>

          <BlockWrapper className="p-4">
            <Block>
            <BlockCallerWrapper className="row form-check mt-2 mb-2">
              <div className="col mt-5 mb-3">
                <input type="checkbox" className="form-check-input" id="blockCaller" 
                  checked={formObj.temporarilyBlockCaller}  
                  onChange={(e)=> formObj.setTemporarilyBlockCaller(e.target.checked)}/>
                <label className="form-check-label" htmlFor="blockCaller">Flag caller for potential block</label>
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
    overflow: hidden;
    text-overflow: ellipsis;
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