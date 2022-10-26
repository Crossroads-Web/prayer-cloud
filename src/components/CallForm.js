import React from 'react';
import '../styles/CallForm.css';
import {callTypes, dispositions, resources, blockReasons, resourceDelivery } from "../assets/data";
import { CallFormContext } from '../contexts/CallFormContext'
import styled from 'styled-components'
const CallForm = () => {
  return (
    <Wrapper className='row'>
      <div className=' col-12'>
      <Header>Call Form</Header>
      <Form >
        <CallerInfoWrapper className="p-4">
          <div className="row form-group mb-2">
            <div className="col">
              <label htmlFor="firstName">FIRST NAME</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="col">
              <label htmlFor="lastName">LAST NAME</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
          </div>
          <div className="row form-group mb-2">
            <div className="col">
              <label htmlFor="emailAddress">EMAIL ADDRESS</label>
              <input type="text" className="form-control" id="emailAddress"/>
              <small id="emailHelp" className="form-text text-muted">Format: name@domain.something</small>
            </div>
          </div>
          <div className="row form-check mb-2">
            <div className="col">
              <input type="checkbox" className="form-check-input" id="subscribeCaller"/>
              <label className="form-check-label" htmlFor="subscribeCaller">Subscribe caller to the newsletter</label>
            </div>
          </div>
        </CallerInfoWrapper>

        <CallHistoryWrapper className="p-4">
        <span>
        CALL HISTORY | LOCATION, TOTAL CALLS:
        </span>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="button" className="btn btn-outline-secondary" id="history-button">Confidential Call History</button>
          </div>
        </div>
        </CallHistoryWrapper>

        <CallHistoryTable className="table">
          <thead>
            <tr>
              <th>Call Date</th>
              <th>Call Type </th>
              <th>Disposition</th>
              <th>Location</th>
              <th>Notes</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>24th July 2020</td>
              <td>Thanksgiving</td>
              <td>Prayer Centre Training</td>
              <td>Toronto</td>
              <td>Gratful</td>
            </tr>
          </tbody>
        </CallHistoryTable>

        <CallTypeWrapper className="p-4 mt-4">
          <h3 className="mb-4">Call Type</h3>
          <CallTypes className=" row col-lg-6 col-12 mt-4 mb-4">
          {
            callTypes.map((callType) => {
              return (
                <div key={callType.id+callType.type} className={"col-md-6 form-check mb-1 order-col-"+callType.id}>
                    <input type="checkbox" className="form-check-input" id={callType.id+callType.type}/>
                    <label className="form-check-label" htmlFor={callType.id+callType.type}>{callType.type}</label>
                </div>
              );
            })
          }
          </CallTypes>

          <CallNotes className="form-group mt-4 p-2">
            <label htmlFor="callNotes"><h6>CALL NOTES</h6></label>
            <textarea className="form-control" id="callNotes" rows="4"></textarea>
          </CallNotes>
        </CallTypeWrapper>

        

        <FollowUpWrapper className="mt-4 p-4">
          <h3>Follow-Up Information</h3>

          <label className="form-check-label" htmlFor="dispositionList"><h6>DISPOSITION *</h6></label>

          <select className="form-select mb-2" aria-label="Disposition List" id="dispositionList">
            <option value="">Choose Disposition</option>
            { 
              dispositions.map((disposition) => {
                return (
                  <option key={disposition.id+disposition.disposition} value={disposition.disposition}>{disposition.disposition}</option>
                );
              })
            }
          </select>
            <div className="row p-2 ">
              <div className="col form-check form-switch">
                <input className="form-check-input" type="checkbox" id="sendResources" />
                <label className="form-check-label" htmlFor="sendResources"> Send resources ›</label>
              </div>
            
              <div className="col form-check">
                <input type="checkbox" className="form-check-input" id="useTestimony"/>
                <label className="form-check-label" htmlFor="useTestimony">Permission to use Testimony Information</label>
              </div>
            </div>

            <Resources className="row mt-4">

              <DigitalResources className="col mt-2 mb-4">
                <h6>DIGITAL RESOURCES</h6>

                <SendViaWrapper className="rounded col-lg-6 col-12 mb-4 p-2">
                  <p>Send Via:</p>
                  {
                    resourceDelivery.map((delivery) => {
                      return (
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" id={delivery.id+delivery.via} value={delivery.via} />
                          <label className="form-check-label" htmlFor={delivery.id+delivery.via}>{delivery.via}</label>
                        </div>
                      );
                    })
                  }
                </SendViaWrapper>

                {
                  resources.map((resource) => {
                    if(resource.type === "digital")
                    return (
                      <div key={resource.id+resource.resource} className="row  form-check mb-2">
                        <div className="col">
                          <input type="checkbox" className="form-check-input" id={resource.id+resource.resource}/>
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
                          <input type="checkbox" className="form-check-input" id={resource.id+resource.resource}/>
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
          <label className="form-check-label" htmlFor="blockReason"><h6>REASON FOR BLOCK</h6></label>
            <select className="form-select" aria-label="Reason For Block" id="blockReason">
              <option value="">Select a Reason </option>
              { 
                blockReasons.map((blockReason) => {
                  return (
                    <option key={blockReason.id+blockReason.reason} value={blockReason.reason}>{blockReason.reason}</option>
                  );
                })
              }
            </select>

          <BlockCallerWrapper className="row form-check mt-2 mb-2">
            <div className="col">
              <input type="checkbox" className="form-check-input" id="blockCaller"/>
              <label className="form-check-label" htmlFor="blockCaller">Temporarily block caller</label>
            </div>
          </BlockCallerWrapper>


        </BlockWrapper>

        <ButtonWrapper className="mt-4 p-4">
          <FormButton type="button" className="btn btn-lg col-12">Prayed! Log Call</FormButton>
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
`;
const Form = styled.div`
`;

const CallerInfoWrapper = styled.div`

`;

const CallHistoryWrapper = styled.div`
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
  thead{
    background-color: #00323B;
    color: white;
  }
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

  textarea{
    background-color: #F3F9FA ;

  }
`
const FollowUpWrapper = styled.div`

`;

const Resources = styled.div`
  border-bottom: 3px solid #ADCFD4;
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
`;