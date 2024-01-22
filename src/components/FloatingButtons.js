import React,{useState, useContext} from 'react'
import "../styles/FloatingButtons.css";
import styled from 'styled-components';
import AddOrganization from './AddOrganization';
import SignUpPrayerPartner from './SignUpPrayerPartner';

export default function FloatingButtons() {
    const [classname,setClassname] = useState("social hide");
    const[close,setClosebutton] = useState("close-button");

    const [show, setShow] = useState(false);
    const [showLock, setShowLock] = useState(false);
    const toggle = () =>{     
        if (classname == "social") {
            setClassname("social hide");
            setClosebutton("close-button");
        }   else {
            setClassname("social");
            setClosebutton("close-button close-button-rotate");
        }
    }


    const handleShow = () => {
        setShow(true)
    };
  return (
    <div> 
        <SignUpPrayerPartner showLock={showLock} setShowLock={setShowLock} />
        <AddOrganization setShow={setShow} show={show} onHide={()=>setShow(false)} />
        <div className="wrapper"> 
        <ButtonWrapper className={`p-3 ${classname}`}>
            <button className={`m-1 ${classname}`} onClick={handleShow}>Add a new organization</button> 
            <button className={`m-1 mt-2 ${classname}`} onClick={()=> setShowLock(true)}>Sign Up a Prayer Partner</button> 
        </ButtonWrapper>
        
        <a className={`bound ${close}`} onClick={toggle} > <i className="fa fa-plus"></i></a>
        </div> 
    </div>
  )
}

const ButtonWrapper = styled.div`
    box-sizing: border-box;
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 295px;
    background: linear-gradient(95.05deg, rgba(255, 234, 228, 0.25) -4.99%, rgba(255, 234, 228, 0.25) 25.86%, rgba(255, 234, 228, 0.25) 100%);;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    border-radius: 8px;
    button {
        border: 0;
        background-color: #C8E4E7;
        color: #2DB3C0;
        display: block;
        width: 263px;
        height: 40px;
        left: 248px;
        border-radius: 8px;
    }
    button:hover{
        font-size: 1.1em;
    }
   a:nth-child(1) {
        background-color: green
    }
    
     a:nth-child(2) {
        background-color: blue
    }
    
  
`;