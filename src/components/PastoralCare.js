import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { PastoralContext } from '../contexts/PastoralContext';
import { Spinner } from "react-activity";

import {BsCalendarCheck, BsPerson, BsListUl, BsBullseye} from 'react-icons/bs';
import "react-activity/dist/library.css";
import '../styles/PastoralCare.css';

function PastoralCare() {
  const {followUps, isUpdated} = useContext(PastoralContext);  
    useEffect(() =>{
        if(isUpdated)
            window.location.reload()
    },[])
  return (
    <Wrapper className=' mb-5'>
        <Header className='p-2 mt-4'>Pastoral Follow-Up</Header>
        {followUps?
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
                                <Link to={`/followUp/${followUp.id}`} className="text-decoration-none" style={{color:'#2DB3C0'}}>Followed Up</Link> : <p> Ongoing Follow Up</p>
                            }
                            {/* {
                                followUp.status === "1" ?
                                (<Link> Follow Up< Link/>)
                                : followUp.status === "2" ? (
                                "Followed Up"
                                ) : "Ongoing Follow Up"
                            } */}
                        {/* <Link key={followUp.id} to={`/followUp/${followUp.id}`} className="text-decoration-none" style={{color:'#FF7234'}}>{
                             (
                                "No Follow Up Required"
                                ) :  followUp.status === "1" ? (
                                "Follow Up"
                                ) : followUp.status === "2" ? (
                                "Followed Up"
                                ) : "Ongoing Follow Up"
                            }
                        </Link> */}
                        </td>
                        
                    </tr>
                        
                    )
                })
            }

            </tbody>
        </Table>
       : <Spinner /> }
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
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
        color: white;
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
const Header = styled.h1`
  font-weight: 1000;
`;
export default PastoralCare