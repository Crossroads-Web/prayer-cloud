import React, {useContext, useEffect, useState} from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ErrorPage from './ErrorPage';
import { BsImage } from "react-icons/bs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Title, Legend, CategoryScale, LinearScale, BarElement);

 const Profile = () =>{

    const { organizationImage, genderData, ageRangeData, dispositionData, callTypeData, setShowDataOption, showDataOption,
      show, handleClose, handleShow, organization, report, digitalResourcesData, physicalResourcesData }  = useContext(ProfileContext);
    
    // useEffect(()=>{
    //   getOrganizationsReport(showDataOption)
    // },[worker, showDataOption] )

  return (
    <Wrapper>
          <Buttons className='m-1'>
            {report && report[0].total_calls > 0 &&
              <RightButtons>
              {showDataOption === "currentMonth" ? <DisabledButton className="m-1 p-1" disabled>Showing monthly data </DisabledButton> : <ActiveButton className="m-1 p-1" onClick={() =>setShowDataOption("currentMonth")}> Show monthly data </ActiveButton>} 
              {showDataOption  === "currentMonth" ? <ActiveButton className="m-1 p-1" onClick={() => setShowDataOption("allData")}>Show all data</ActiveButton> : <DisabledButton className="m-1 p-1" disabled>Showing all data</DisabledButton>}
              </RightButtons> 
            }
          <LeftButtons>
            {
              organization && 
              <ActiveButton className="m-1 p-1" onClick={handleShow} style={{backgroundColor: "#3A8E9A"}}>
                View Profile
              </ActiveButton>
            }
          </LeftButtons>
      </Buttons>
      {report && report[0].total_calls > 0 ? 
      
      <> 
        <CardContainer className='row m-5' >
          <DarkCard className='col-xl-4 col-md-5 p-2'>
            <DarkCardValue>
              {(report[0].total_calls).toLocaleString("en-US")}
              
            </DarkCardValue>
            <DarkCardLabel>total calls this month</DarkCardLabel>
          </DarkCard>
        </CardContainer>
          <Charts className="row m-1">
            <div className='col-md-5 col-sm-12 '>
              <Doughnut data={genderData}  
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Gender of Callers",
                    position: 'top',
                    font:{
                      size: 16
                    }
                  },
                  legend: {
                    position: 'right',
                    labels: {
                      
                        // This more specific font property overrides the global property
                        font: {
                            size: 12
                        }
                    }
                  },
                }
              }}
            />
            </div>

          <div className='col-md-5 col-sm-12 p-2'>
            <Doughnut data={dispositionData} 
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Disposition of Calls",
                  position: 'top',
                  font:{
                    size: 16
                  }
                },
                legend: {
                  position: 'right',
                  labels: {
                    
                      // This more specific font property overrides the global property
                      font: {
                          size: 12
                      }
                  }
                },
              }
            }}
            /> 
          </div>
          {/* <Doughnut data={dispositionData} />  
          <Bar data={callTypeData} />   */}
          </Charts>
          <Charts className="row m-3">
            <CardContainer className='col-md-4 col-sm-10 '>
              <LightCard className='col-xl-4 col-md-5 p-2'>
                <LightCardValue>
                  {(Math.floor((report[0].total_time_in_secs)/60)).toLocaleString("en-US")} min
                  
                </LightCardValue>
                <LightCardLabel>total call duration</LightCardLabel>
              </LightCard>
            </CardContainer>
            <div className='col-md-6 col-sm-12 p-4' style={{position: "relative",}} >
            <Bar className='col' data={callTypeData}  options={{
              plugins: {
                responsive: true,
              }
            }}/>
            </div>

          </Charts>

          <Charts className="row m-3">
            <div className='col-md-6 col-sm-12 p-4'>
              <Bar className='col' data={ageRangeData} />
            </div>
            <CardContainer className='col-md-4 col-sm-10'>
              <LightCard className='p-2'>
                <LightCardValue>
                  {(organization.prayerPartnersCount)?.toLocaleString("en-US")} 
                  
                </LightCardValue>
                <LightCardLabel># of voluntees onboarded</LightCardLabel>
              </LightCard>
            </CardContainer>
          

          </Charts>

          <Charts className="row m-1">
            <div className='col-md-5 col-sm-12 '>
              <Doughnut data={digitalResourcesData}  
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Digital Resource Reports",
                    position: 'top',
                    font:{
                      size: 16
                    }
                  },
                  legend: {
                    position: 'right',
                    labels: {
                      
                        // This more specific font property overrides the global property
                        font: {
                            size: 12
                        }
                    }
                  },
                }
              }}
            />
            </div>

          <div className='col-md-5 col-sm-12 p-2'>
            <Doughnut data={physicalResourcesData} 
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Physical Resource Reports",
                  position: 'top',
                  font:{
                    size: 16
                  }
                },
                legend: {
                  position: 'right',
                  labels: {
                    
                      // This more specific font property overrides the global property
                      font: {
                          size: 12
                      }
                  }
                },
              }
            }}
            /> 
          </div>
          {/* <Doughnut data={dispositionData} />  
          <Bar data={callTypeData} />   */}
          </Charts>
      </>
        :
        <ErrorPage errorMessage="No available reports" />
      }
      {
        organization &&
        <>

          <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
            <Modal.Header closeButton>
              <Modal.Title>View Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditMessage>*Contact your account manager to edit profile*</EditMessage>
                <ChurchImage> 
                  { organizationImage ?  <img src={organizationImage} alt="logo" width={'146'}/> 
                  : <BsImage size={146}/>     
                  }
                </ChurchImage>

                <ChurchInfo className='p-3'>
                    <ChurchInfoHeader className='p-2'>
                        Organization Info
                    </ChurchInfoHeader>
                    <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="organizationName"><h6>Organization Name</h6></label>
                        <input type="text" className="form-control" id="organizationName" value={organization.name} readOnly/>
                    </div>

                    <div className="col">
                        <label htmlFor="organizationType"><h6>Organization Type</h6></label>
                        <input type="text" className="form-control" id="organizationType" value={organization.type} readOnly/>
                    </div>
                    </div>
                    <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="address"><h6>Address</h6></label>
                        <input type="text" className="form-control" id="address" value={organization.address} readOnly/>
                    </div>
                    </div>
                    <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="city"><h6>City</h6></label>
                        <input type="text" className="form-control" id="city" value={organization.city} readOnly />
                    </div>
                    <div className="col">
                        <label htmlFor="province"><h6>Province / State</h6></label>
                        <input type="text" className="form-control" id="province" value={organization.province} readOnly/>
                    </div>
                    </div>
                    <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="postalCode"><h6>ZIP / Postal Code</h6></label>
                        <input type="text" className="form-control" id="postalCode" value={organization.postalCode} readOnly/>
                    </div>
                    <div className="col">
                        <label htmlFor="country"><h6>Country</h6></label>
                        <input type="text" className="form-control" id="country" value={organization.country} readOnly/>
                    </div>
                    </div>
                    <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="website"><h6>Organization Website</h6></label>
                        <input type="text" className="form-control" id="website" value={organization.website} readOnly/>
                    </div>

                    <div className="col">
                        <label htmlFor="organizationPhoneNumber"><h6>Organization Phone Number</h6></label>
                        <input type="text" className="form-control" id="organizationPhoneNumber"  value={organization.organizationPhoneNumber} readOnly/>
                    </div>
                    </div>
                </ChurchInfo>

                <PersonInfo className='p-3'>
                    <PersonInfoHeader className='p-2'>
                        Person Info
                    </PersonInfoHeader>              
                    <div className="row form-group mb-2 p-2">
                      <div className="col">
                          <label htmlFor="carePersonName"><h6>Care Person Full Name</h6></label>
                          <input type="text" className="form-control" id="carePersonName" value={organization.carePersonName} readOnly />
                      </div>
                    </div>
                    <div className="row form-group mb-2 p-2">
                      <div className="col">
                          <label htmlFor="carePersonEmail"><h6>Care Person Email</h6></label>
                          <input type="email" className="form-control" id="carePersonEmail" value={organization.carePersonEmail} readOnly />
                      </div>
                    </div>
                    <div className="row form-group mb-2 p-2">
                      <div className="col">
                          <label htmlFor="carePersonPhone"><h6>Care Person Phone EXT</h6></label>
                          <input type="text" className="form-control" id="carePersonPhone" value={organization.carePersonPhone} readOnly />
                      </div>
                    </div>
                </PersonInfo>

                <MoreInfo className='p-3'>
                    <MoreInfoHeader className='p-2'>
                        More Info
                    </MoreInfoHeader>  
                    <div className="row form-group mb-2 p-2">
                        <div className="col">
                            <label htmlFor="assignedNumber"><h6>Assigned Number</h6></label>
                            <input type="text" className="form-control" id="assignedNumber" value={organization.assignedNumber} readOnly/>
                        </div>
                        <div className="col">
                            <label htmlFor="prayerPartnersCount"><h6>Prayer Partners Count</h6></label>
                            <input type="text" className="form-control" id="prayerPartnersCount" value={organization.prayerPartnersCount} readOnly />
                        </div>
                    </div>
                    <div className="row form-group mb-2 p-2">
                        <div className="col">
                            <label htmlFor="serviceStartTimes"><h6>Sunday Service Start Times</h6></label>
                            <input type="text" className="form-control" id="serviceStartTimes" value={organization.serviceStartTimes}  readOnly />
                        </div>
                    </div>
                    <div className="row form-group mb-2 p-2">
                        <div className="col">
                            <label htmlFor="churchPrograms"><h6>Church Programs</h6></label>
                            <input type="text" className="form-control" id="churchPrograms" value={organization.churchPrograms} readOnly />
                        </div>
                    </div>
                </MoreInfo>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    }

    </Wrapper>
  )
}

const Wrapper = styled.div`
`;

const Header = styled.h1`
    font-weight: 1000;

`;
const Buttons = styled.div`

  display: flex; 
  justify-content: space-between;
  
`;

const RightButtons = styled.div`
  display: flex;

`;

const ActiveButton = styled.button`
  border: 0;
  border-radius: 8px;

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
const DisabledButton = styled.button`
  background-color: #C1DCDE;
  border: 0;
  background-color: #C8E4E7;
  display: block;
  border-radius: 8px;
`;

const LeftButtons = styled.div`

`;

const ChurchImage = styled.div`
       
    display: flex;
    justify-content: center;
`;

const ChurchInfo = styled.div`

`;
const ChurchContacts = styled.div`
    background-color: #FFEAE4;
    input{
        background-color: #FFEAE4;
    }
`;
const ChurchContactsHeader = styled.h4`
    color: #ED401F;
    text-align: left;
    font-family: Recoleta;
    text-decoration: underline;
`;
const PersonInfo = styled.div`
    background-color: #f3f9fa;
    input{
        background-color: #f3f9fa;
    }
`;

const PersonInfoHeader = styled.h4`
text-align: left;
    color: #2DB3C0;
    font-family: Recoleta;
    text-decoration: underline;
`;

const Charts = styled.div`
    display: flex;
    justify-content: space-evenly;
    div{
    }
`;

const DarkCard = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: #FCD5C9;
    box-shadow: 10px 10px 5px whitesmoke;
    border-radius: 30px;
    min-height: 23vh;
    text-align: center;
    
`;
const CardContainer = styled.div`
    display:flex;
    align-items: center;
  justify-content: center;
`;

const DarkCardValue = styled.div`
    color: #EC3310;
    align-items:center;
    display: block;
    font-size: 5em;
    font-weight: 800;
`;

const DarkCardLabel = styled.div`
    display-flex;
    vertical-align: bottom;
    color: #FF7234;
    text-transform: uppercase;

`;


const LightCard = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: #D9EEF0;
    box-shadow: 10px 10px 5px whitesmoke;
    border-radius: 30px;
    min-height: 23vh;
    text-align: center;
    width: 100%;
    
`;
const EditMessage = styled.p`
    text-align: center;
    color: #2DB3C0;
    font-weight: 300;

`

const LightCardValue = styled.div`
    color: #178B96;
    align-items:center;
    display: block;
    font-size: 5em;
    font-weight: 800;
`;

const LightCardLabel = styled.div`
    display-flex;
    vertical-align: bottom;
    color: #2DB3C0;
    text-transform: uppercase;

`;
const ChurchInfoHeader = styled.h4`
    text-align: left;

    color: #FF7234;
    font-family: Recoleta;
    text-decoration: underline;
`;

const MoreInfo = styled.div`
    background-color: #FFEAE4;
    input{
        background-color: #FFEAE4;
    }
`;

const MoreInfoHeader = styled.h4`
    text-align: left;
    color: #EC3310;
    font-family: Recoleta;
    text-decoration: underline;
`;
const ViewOrgWrapper = styled.div`
`
export { ChurchInfo, ChurchInfoHeader };

export default Profile;