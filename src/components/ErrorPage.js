import React from 'react'
import {BiError} from 'react-icons/bi'
import { Link } from "react-router-dom";
import styled from 'styled-components';
 
export default function ErrorPage(props) {

  return (
    <Wrapper className='p-5'>
         <h2>{props.errorMessage}</h2>
        <BiError size={400} color={"black"}/>
        <p>Return to the <Link to="/" style={{color: "#EC3310"}}>Home</Link> page</p>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-size: 14pt;
    }
`;