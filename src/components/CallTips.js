import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function CallTips(props) {
  return (
    <Modal
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{background: "#178B96", color: "white"}} closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
        <h3>Assessing if a caller is suicidal... PROMPTERS TO HELP:</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{background: "#C8E4E7", textAlign: "center"}} className="p-5">

        <p className=''>
        ensure that you take a deep breath, and remember most calls are not high risk. Jesus is Your help.
        </p>

        <Title>1. SELF-REGULATION IS IMPORTANT</Title>

        <p>Do not let the caller know you are completing a form 
            (the check boxes are for your help; do not ask a "list" of questions. Just get details that you can)</p>

        <Title>2. ASSESS THE IMMEDIATE RISK</Title>

        <p>you may wish to ask this question: When I speak with you, I get concerned, as I cannot see you. 
            Could I just ask, for my own peace of mind, that if I were in the room with you, 
            would I see anything that you could harm yourself with? Are you physically, okay?”
        </p>

        <Title>3. IS THE CALLER ALONE?</Title>

        <p> If not, are they a support or not supportive. 4 Remind the caller that we are a prayer line; 
            not a suicide crisis line (we are not professionals)
        </p>

        <Title>4. IS THE CALLER INJURED?</Title>

        <p>If caller expresses that they are injured, ask the caller to call 911 or suicide help hotlines (see below)</p>

        <Title>5. IS THE CALLER UNABLE TO CALL 911?</Title>

        <p>Only if they are unable to call 911 for themselves, due to injury, 
            then you need to call for them (if you call 911; you must be put in touch with a person; not a voicemail).
        </p>

        <Title>6. HAS THE CALLER CAUSED HARM TO OTHERS?</Title>

        <p>Call 911 if caller has caused harm to others and is unable to call· 
            Contact your Team Leader over the chat app ASAP, should you require support 
            (this is done while on the call)
        </p>

        <Resource className='mb-0'>MENTAL HEALTH CRISIS AND SUICIDE PREVENTION:</Resource>
        <Resource>CANADA/USA: DIAL OR TEXT 988</Resource>

        <p><Link to={"prayerBinder"} style={{color: "black"}}>SEE SUICIDE PREVENTION/CRISIS RESOURCES</Link></p>

      </Modal.Body>
      
    </Modal>
  )
}
const Title = styled.p`
    font-weight: 500;
    color: #178B96
`
const Resource = styled.p`
    font-weight: 500;
    color: #EC3310;

`;

export default CallTips