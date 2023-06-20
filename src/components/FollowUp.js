import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PastoralContext } from '../contexts/PastoralContext';
import { Spinner } from "react-activity";
import { ToastContainer } from 'react-toastify';
import {FaLessThan} from "react-icons/fa";
import styled from 'styled-components';
import { showErrorMessage, showSuccessMessage } from "../helpers/useToast";
import "react-activity/dist/library.css";
import 'react-toastify/dist/ReactToastify.css';

function FollowUp() {
    const {id} = useParams();

    const { getFollowUp, followUp, updateFollowUp, canUpdate, setCanUpdate } = useContext(PastoralContext);

    const navigate = useNavigate();

    function clickToDial(e){
        e.preventDefault();
       // updateFollowUp(id, "3")
       setCanUpdate(true);
        window.parent.postMessage({callBackNow: true, destination: followUp.user_number}, '*');     
    }
     const updateFollowUpStatus = (e) =>{
        e.preventDefault();
        updateFollowUp(id,2);
        showSuccessMessage("Folow Up Updated Successfully");
       setTimeout(() =>navigate("/pastoralCare"), 2000) ;
    }
    useEffect(() =>{
        getFollowUp(id);
    }, [id])
  return (

    <div>
         <ToastContainer />
        <Header className='p-2 mt-4'>Pastoral Follow-Up</Header>
        {
            followUp ?
                <div>
                    <BackLinkContainer className='p-3'>
                        <Link to="/pastoralCare" className='m-2'> <FaLessThan/> VIEW FOLLOW-UPS</Link>
                    </BackLinkContainer>
                    <Form id="callForm"  autoComplete='off'>
                        <CallerInfoWrapper className="p-4">
                            <div className="row form-group mb-2">
                                <div className="col">
                                    <label htmlFor="firstName"><h6>FIRST NAME</h6></label>
                                    <input type="text" className="form-control" id="firstName"  value={followUp.caller_first_name} />
                                </div>
                                <div className="col">
                                    <label htmlFor="lastName"><h6>LAST NAME</h6></label>
                                    <input type="text" className="form-control" id="lastName" value={followUp.caller_last_name} />
                                </div>
                            </div>
                            <div className="row form-group mb-2">
                                <div className="col">
                                    <label htmlFor="emailAddress"><h6>EMAIL ADDRESS</h6></label>
                                    <input type="email" className="form-control" id="emailAddress"  value={followUp.caller_email}/>
                                </div>
                            </div>

                            <div className='row'>
                            
                                <div className='col'>
                                    <label htmlFor="gender"><h6>Gender</h6></label><br/>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="gender" type="radio"  
                                        checked={followUp.gender === "male"}
                                        value="male"
                                    />
                                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="gender" type="radio"  
                                        checked={followUp.gender === "female"}
                                        value="female"
                                    />
                                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="gender" type="radio" 
                                        checked={followUp.gender === "prefer not to say"} 
                                        value="prefer not to say"
                                    />
                                    <label className="form-check-label" htmlFor="notKnownGender">Prefer not to stay</label>
                                    </div>
                                </div>

                                <div className="col form-check-inline">
                                    <label htmlFor="ageRange"><h6>AGE RANGE</h6></label>
                                    <select className="form-select mb-2" aria-label="Age Range List" id="ageRangeList"
                                    value={followUp.age_range} 
                                >
                                    <option value="">{followUp.age_range}</option>
                                    
                                    </select>
                                </div>
                            </div>
                            <div className="row form-group mb-2">
                            <div className="col">
                                <label htmlFor="phoneNumber"><h6>USER PHONE NUMBER</h6></label>
                                <input type="text" className="form-control" id="phoneNumber" value={followUp.user_number || ''} />
                            </div>
                            <div className="col">
                                <h6>TYPE OF CALL</h6>
                                <SpanContainer style={{"width": "35%"}}>
                                    {
                                    followUp.call_type.split(",").map((callType) => {
                                        var name = callType.replace(/\s/g, '').toLowerCase().split("/", 1)[0];
                                        return <span key={name} className={name+' p-1 m-2'}>{callType}</span>
                                    })
                                    }
                                </SpanContainer>
                            </div>
                            </div>

                            <div className="form-group mt-4 p-2">
                            <label htmlFor="callNotes"><h6>CALL SUMMARY / PRAYER REQUEST</h6></label>
                            <textarea className="form-control" id="callNotes" rows="12" value={followUp.notes  || ''} onChange={(e)=>{console.log(e.target.value)}} /> 
                        </div>
                        </CallerInfoWrapper>
                        <ButtonWrapper className='mb-5'>
                            <CallButton onClick={(e)=>clickToDial(e)} className="p-2 m-2">CALL BACK NOW</CallButton>
                            <UpdateButton onClick={(e)=> updateFollowUpStatus(e)} className="p-2 m-2" disabled={!canUpdate}>UPDATE FOLLOW UP</UpdateButton>
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
    a {
        color: #178B96;
        font-weight: 700;
        font-family: 14px;
        letter-spacing: 0.2em;

        text-decoration: none
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
`;
const Button = styled.button`
border-radius: 8px;
    display:block;
    border: 0;
    width:70%;
    color: white;
`;
 
const CallButton = styled(Button)`
    background-color: #40D13D;
`;

const UpdateButton = styled(Button)`
    background-color: #115057;
`;

const CloseButton = styled(Button)`
    background-color: #EC3310;
`;
const Header = styled.h1`
  font-weight: 1000;
`;
 
export default FollowUp