import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { PastoralContext } from '../contexts/PastoralContext';

import {BsCalendarCheck, BsPerson, BsListUl, BsBullseye, BsArrowLeft} from 'react-icons/bs';
import {FiBook} from "react-icons/fi";
import "react-activity/dist/library.css";
import '../styles/PastoralCare.css';
import { ProfileContext } from '../contexts/ProfileContext';

function PastoralCare() {
  const {followUps, isUpdated, resources, updateResource, showSection, setShowSection,
    setResourceUrl, isResourceUpdated, setResourceUpdated, resourceUrl} = useContext(PastoralContext);  
  const {worker} = useContext(ProfileContext)
  const [page, setPage] = useState(1);
  const [showNew, setShowNew] = useState(false);

    useEffect(() =>{
        if(isUpdated)
            window.location.reload()
    },[])

  return (
     showSection === "viewOptions" ? 
      <Wrapper className='row mt-5 mb-5'>
       
        <h1 className='p-2 mt-4 font-black' style={{fontWeight: "1000"}}>
            Pastoral Care
        </h1>
        <ViewOptions>
            <ActiveFollowUps onClick={()=> setShowSection("followUpList")}>ACTIVE FOLLOW - UPS</ActiveFollowUps>
            <Resources onClick={()=> setShowSection("showPhysicalResources")}>MAILING/PHYSICAL RESOURCES</Resources>
            <CompletedFollowUps onClick={()=> setShowSection("completedList")}>COMPLETED FOLLOW-UPS</CompletedFollowUps>
        </ViewOptions>
     </Wrapper> : showSection === "followUpList" ?

     <Wrapper className='row mt-5 mb-5'>
        <Header className='p-3 mt-4'>
            <button onClick={()=> {setShowSection("viewOptions")}} style={{background: "none", border: "0"}}><BsArrowLeft size={25}/> </button>
            <h1>Active Follow-Ups</h1> <span></span></Header>
        {followUps ?
        <Table>
            <thead>
                <tr >
                    <th className='p-3'><BsCalendarCheck size={25}/> DATE</th>
                    <th><BsPerson size={25}/> CALLER NAME</th>
                    <th><BsListUl size={25}/> FOLLOW UP TYPE</th>
                    <th className='text-center'><BsBullseye size={25}/> STATUS</th>
                </tr>
            </thead>
            <tbody>
            {
                followUps.map((followUp) => {
                    if (followUp.status === "1" || followUp.status === "3" )
                    return (     
                    <tr key={followUp.id}>
                        <td className='p-3'>{new Date(followUp.created_at).toLocaleDateString("en-US")}</td>
                        <td>{followUp.caller_first_name + " " + followUp.caller_last_name}</td>
                        <TypeCell style={{"width": "35%"}}>
                            {
                            followUp.follow_up_type?.split(",").map((callType) => {
                                var name = callType.replace(/\s/g, '').toLowerCase().split("/", 1)[0];
                                return <span key={name} className={name+' p-1 m-2'}>{callType}</span>
                            })
                            }
                        </TypeCell>
                        <td className='text-center'>
                            {
                                followUp.status === "1" ?
                                <Link to={`/followUp/${followUp.id}`} className="text-decoration-none" style={{color:'#FF7234'}}>Follow Up</Link> 
                                : followUp.status === "2" ?
                                <Link to={`/followUp/${followUp.id}`} className="text-decoration-none" style={{color:'#2DB3C0'}}>Completed</Link> 
                                : followUp.status === "3" ?
                                <Link to={`/followUp/${followUp.id}`} className="text-decoration-none" style={{color:'#2DB3C0'}}>Updated</Link> 
                                : <p> Ongoing</p>
                            }
                        </td>
                    </tr>
                    )
                })
            }
            </tbody>
        </Table>
       : 
       <div className="d-flex justify-content-center" style={{width: "100vw", height: "100vh"}} >
            <div className="spinner-border" role="status" style={{width: "6em", height: "6em"}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        }
    </Wrapper>
    : showSection === "showPhysicalResources" ?

    <Wrapper className='row mt-5 mb-5'>
        <Header className='px-5 p-3 mt-4' style={{border: "1px solid red", }}>
            <button onClick={()=> {setShowSection("viewOptions")}} style={{background: "none", border: "0"}}><BsArrowLeft size={25}/> </button>
            <h1>Mailing/Physical Resources</h1>

            {
                showNew ?
                <button className='mr-4 rounded' style={{backgroundColor:'#2DB3C0', color: "white", border: 0, }}
                    onClick={() => {setResourceUrl(`https://anyonepraybackend.com/prayerresource/getPhyResc`);  setShowNew(false) }}>View All
                </button>
                : <button className='mr-4 rounded' style={{backgroundColor:'#2DB3C0', color: "white", border: 0, }}
                    onClick={() => {setResourceUrl(`https://anyonepraybackend.com/prayerresource/getPhyResc?status=New`); setShowNew(true)}}>View New
                </button>
            }
             

        </Header>
        {resources && worker ?
        <> 
            <Table>
                <thead>
                    <tr >
                        <th className='text-center'><BsBullseye size={25}/> STATUS</th>
                        <th className='p-3'><FiBook size={25}/> TITLE</th>
                        <th><BsPerson size={25}/> CALLER NUMBER</th>
                        <th><BsListUl size={25}/> ACTION</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    resources.data.map((resource) => {
                        //if (resource.status === "1" || followUp.status === "3" )
                        return (     
                        <tr key={resource.id}>
                            <td className='p-3'>{resource.status}</td>
                            <td>{resource.title}</td>
                            <td>{resource.user_number} </td>
                            <td className='text-center'>
                                {
                                    resource.status === "New" ?
                                    <button className='p-1 px-2 rounded' style={{backgroundColor:'#FF7234', border: 0, color: "white"}} 
                                        onClick={() => {updateResource(resource.id, worker.email ); setResourceUpdated(!isResourceUpdated)}}>Send</button> 
                                    : 
                                    <span style={{color:'#2DB3C0'}}>Sent by: {resource.sent_by} </span> 
                                }
                            </td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            <div className='mt-4 px-5' style={{ display: 'flex', justifyContent: "flex-end" }}>
                {/* { page > 2 &&
                <button className='p-1 px-2 rounded' style={{backgroundColor:'#2DB3C0', color: "white", border: 0, }}
                    onClick={() => {setResourceUrl(`https://anyonepraybackend.com/prayerresource/getPhyResc?page=${page}`); setResourceUpdated(!isResourceUpdated); setPage(page-1)}}>
                    Previous Page
                </button> 
                } */}
                <button className='p-1 px-2 rounded' style={{backgroundColor:'#2DB3C0', color: "white", border: 0, }}
                    onClick={() => {setResourceUrl(`https://anyonepraybackend.com/prayerresource/getPhyResc?page=${page}`); setResourceUpdated(!isResourceUpdated); setPage(page+1)}}>
                    Next Page
                </button> 
            </div>
        
        </>
       : <div className="d-flex justify-content-center" style={{width: "100vw", height: "100vh"}} >
            <div className="spinner-border" role="status" style={{width: "6em", height: "6em"}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        }
    </Wrapper>

    : showSection === "completedList" ?

    <Wrapper className='row mt-5 mb-5'>
        <Header className='p-3 mt-4'>
            <button onClick={()=> {setShowSection("viewOptions")}} style={{background: "none", border: "0"}}><BsArrowLeft size={25}/> </button>
            <h1>Completed Follow-Ups</h1> <span></span>
        </Header>
            {followUps?
            <Table>
                <thead>
                    <tr>
                        <th className='p-3'><BsCalendarCheck size={25}/> DATE</th>
                        <th><BsPerson size={25}/> CALLER NAME</th>
                        <th><BsListUl size={25}/> FOLLOW UP TYPE</th>
                        <th className='text-center'><BsBullseye size={25}/> STATUS</th>
                    </tr>
                </thead>
                <tbody>
                {
                    followUps.map((followUp) => {
                        if (followUp.status === "2")
                        return (     
                        <tr key={followUp.id}>
                            <td className='p-3'>{new Date(followUp.created_at).toLocaleDateString("en-US")}</td>
                            <td>{followUp.caller_first_name + " " + followUp.caller_last_name}</td>
                            <TypeCell style={{"width": "35%"}}>
                                {
                                followUp.follow_up_type?.split(",").map((callType) => {
                                    var name = callType.replace(/\s/g, '').toLowerCase().split("/", 1)[0];
                                    return <span key={name} className={name+' p-1 m-2'}>{callType}</span>
                                })
                                }
                            </TypeCell>
                            <td className='text-center'>
                                <Link to={`/followUp/${followUp.id}`} className="text-decoration-none" style={{color:'#2DB3C0'}}>Completed</Link> 
                            </td>
                        </tr>)
                    })
                }
                </tbody>
            </Table>
        : <div className="d-flex justify-content-center" style={{width: "100vw", height: "100vh"}} >
            <div className="spinner-border" role="status" style={{width: "6em", height: "6em"}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div> }
        </Wrapper>
        : 
        
        <div>
    </div>
  )
}

const Wrapper = styled.div``

const Button = styled.button`
    border-radius: 8px;
    display:block;
    border: 0;
    width:40%;
    height: 120px;
    color: white;
`;
 
const ViewOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    height: 85vh;
`;
const ActiveFollowUps = styled(Button)`
    background-color: #FF7234;
`;

const Resources = styled(Button)`
    background-color: #115057;
`;
const CompletedFollowUps = styled(Button)`
    background-color: #40D13D;

`;

const TypeCell = styled.td`
    flex: none;
    order: 6;
    flex-grow: 1;
`;
const Table = styled.table`
    border: 1.5px solid #BFE9EE;
    td, th{
        border: 1.5px solid #BFE9EE;

    }
    span{
        color: black;
        border-radius: 8px;
        display:inline-block;

    }
    thead{
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        /* identical to box height */

        letter-spacing: 3.5px;
        text-transform: uppercase;

        color: #2DB3C0;
        background-color: #E7F8FA;
    }

tbody{
}
`;
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    h1{
        font-weight: 1000;

    }

`;
export default PastoralCare