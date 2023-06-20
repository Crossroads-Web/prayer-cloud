import React, {useState} from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaGift } from "react-icons/fa";
import { IoCall, IoHeartOutline } from "react-icons/io5";
import { TbBatteryCharging}  from "react-icons/tb";
import { GiStrongMan, GiMountains } from "react-icons/gi";
import { HiOutlineGlobe } from "react-icons/hi";
import {FiAward} from "react-icons/fi";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Auth0Lock } from 'auth0-lock';
import { organizations } from '../assets/database';

const convertStringToCamelCase = (sentence) => {
    return sentence.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,
    function(camelCaseMatch, i) {
       if (+camelCaseMatch === 0)
          return "";
       return i === 0 ? camelCaseMatch.toLowerCase() :
       camelCaseMatch.toUpperCase();
    });
 }

var lock = new Auth0Lock("6M6ZcH5iRbjeOQ8zJeRKspfhi8xrT9oJ", "dev-zfiof0doxtz2jtsl.us.auth0.com", {
    languageDictionary: {
        emailInputPlaceholder: "users@email.com",
        passwordInputPlaceholder: "default password"
      },
    additionalSignUpFields: [
    {
        name: "full_name",
        placeholder: "Enter User's Full Name",
        validator: function(full_name) {
            return {
               valid: full_name.length >= 4,
               hint: "Must have 4 or more chars" // optional
            };
        }
    },
    
    {
        type: "select",
        name: "church_name",
        placeholder: "Select User's Organization Name",
        options: 
            organizations.map((organization, i) => {
                   return (
                    {
                        value: convertStringToCamelCase(organization.name) ,
                        label: organization.name
                    }
                   ) 
            })
        // [
        //     {value: "crossroads", label: "Crossroads Church"},
        //     {value: "cityofdavid", label: "City Of David"},
        //    // {value: "[administrator]", label: "Administrator"},
        // ],
    },
    {
        type: "select",
        name: "roles",
        placeholder: "Select User's Role",
        options: [
            {value: "agent", label: "Agent"},
            {value: "wfo.full_access", label: "Team Leader"},
            {value: "supervisor", label: "Supervisor"},
           // {value: "[administrator]", label: "Administrator"},
        ],

    },
    {
        type: "select",
        name: "skills",
        placeholder: "Select User's Skill",
        options: [
            {value: "Prayer Partner", label: "Prayer Partner"},
            {value: "Pastoral Care", label: "Pastoral Care"},
            {value: "Suicide Prevention", label: "Suicide Prevention"},
            {value: "Pastoral Care, Suicide Prevention", label: "Pastoral Care + Suicide Prevention"},
           // {value: "[administrator]", label: "Administrator"},
        ],

    },
    // {
    //     type: "hidden",
    //     name: "skills",
    //     //value: []'
    // },
    
    // {
    //     name: "skill",
    //     placeholder: "Prayer Partner",
    //     value: {"skills":["Prayer Partner"]},
    //     validator: function() { 
    //         return true;
    //     },
    //    // "routing":{"skills":["Prayer Partner"]}
    // },
 
    // {
    //     type: "select",
    //     name: "location",
    //     placeholder: "choose your location",
    //     options: [
    //       {value: "us", label: "United States"},
    //       {value: "fr", label: "France"},
    //       {value: "ar", label: "Argentina"}
    //     ],
    //     // The following properties are optional
    //     icon: "https://example.com/assests/location_icon.png",
    //     prefill: "us"
    //   }
    ],
    allowLogin: false
});
const Home = ()  => {
    const handleLogin = (e) =>{
        e.preventDefault();
        lock.show();
    }
     const [counterOn, setCounterOn] = useState(false);
  return (
    <Wrapper>
        <Navigation bg="light" expand={"lg"} className="mb-3 p-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={require("../assets/images/logo.png")} alt="logo" width={'146'}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  AnyonePray
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 ">
                  <Nav.Link href="#product" className="px-5">PRODUCT</Nav.Link>
                  <Nav.Link href="#about" className="px-5">ABOUT</Nav.Link>
                  <Nav.Link href="#contact" className="px-5">CONTACT</Nav.Link>
                </Nav>

                <NavForm className="d-flex justify-content-center">
                    <LoginLink className="p-1 px-4 me-2 rounded-pill"onClick={handleLogin} id="btn-login">LOG IN</LoginLink>
                    <RegisterLink className="p-1 px-4  me-2 rounded-pill" href="signup">Sign Up</RegisterLink>
                    <DonateLink href="#donate" className="p-1 me-2 rounded-circle"><FaGift size={30} /></DonateLink>
                </NavForm>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navigation>

        <ProductWrapper className="row">
            <WhatisIt className="row">
                <LeftDiv className='col-md-6 col-12 p-5 '>
                    <LeftHeader className='pb-4'>
                        <div>
                            <h4 className="p-1 px-4 me-2 rounded-pill">
                                WHAT IS IT
                            </h4>
                            <span className="p-1 me-2 rounded-circle">
                                <IoCall size={20}/>
                            </span>
                        </div>
                        <img src={require("../assets/images/crossroadsLogo.png")} alt="logo" width={'40'}/>


                    </LeftHeader>
                    <LeftContent className='mt-4 p-3'>
                        <p>
                        Pray4 is a <Blueish>24-hour call center</Blueish> that enables two-way communication between callers and fully trained prayer partners.
                        We believe everyone can reach out to God in prayer - and we’d like to help.
                        Get a toll-free prayer number for your church community.
                        All calls into the service are free, and you can find out more about <Blueish>what we believe about prayer</Blueish> <Redish><a target="_blank" href="https://crossroads.ca/">here</a>.</Redish>

                        </p>
                    </LeftContent>
                    
                </LeftDiv>

                <RightDiv className='col-md-6 col-12'>
                    <RightContent className='p-4'>
                        <a href="#donate" className="px-2 p-1 me-2 rounded-circle"><FaGift size={19} /></a>
                        <a target="_blank" className="p-1 px-3  rounded-pill" href="https://crossroads.ca/">BECOME A PARTNER</a>
                    </RightContent>
                </RightDiv>
            </WhatisIt>
            <WhatWeDo className='p-5 mt-4 mb-4'>
                <div>
                    <h4 className="p-1 px-5 me-2 rounded-pill"> WHAT WE DO</h4> 
                    <WhatWeDoSpan className="p-1 rounded-circle"><TbBatteryCharging size={25}/></WhatWeDoSpan>
                </div>
                <WhatWeDoText className='col-md-8 col-12 pt-4'>
                Our prayer partner volunteers have answered over 13 million calls over the last 40 years. 
                Now they can do it for your community too!
                </WhatWeDoText>
                <Doings className='row'>
                    <Doing className="col-md-4 col-12 pt-5">
                        <DoingIcon className='p-3'> <GiStrongMan size={25}/> </DoingIcon>
                        <DoingHeader  className='pt-4'>More prayer, more power.</DoingHeader>
                        <DoingContent className='mt-'>We offer <Redish>24/7</Redish> prayer to anyone, without judgment or prejudice.
                         <Redish>100% free.</Redish></DoingContent>
                    </Doing>

                    <Doing className="col-md-4 col-12 pt-5">
                        <DoingIcon className='p-3'><IoHeartOutline size={25}/></DoingIcon>
                        <DoingHeader  className='pt-4'>Provide love and care.</DoingHeader>
                        <DoingContent>We offer <Redish>support through prayer</Redish> in all kinds of circumstances; 
                            from the smallest to the most serious.
                        </DoingContent>
                    </Doing>

                    <Doing className="col-md-4 col-12 pt-5">
                        <DoingIcon className='p-3'> <HiOutlineGlobe size={25}/></DoingIcon>
                        <DoingHeader  className='pt-4'>Improve local connections.</DoingHeader>
                        <DoingContent>We <Redish>LOVE</Redish> when callers from your area call us, 
                            so we can place them into your church!</DoingContent>
                    </Doing>

                </Doings>
            </WhatWeDo>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <PlatformFeatures className='p-5 mt-4 mb-4'>
                    <div className='mt-4'>
                        <h6 className="p-1 px-5 me-2 rounded-pill"> PLATFORM FEATURES</h6> 
                        <PlatformFeaturesSpan className="p-1 rounded-circle"><FiAward  size={25}/></PlatformFeaturesSpan>
                    </div>
                    <WhatWeDoText className='col-md-8 col-12 pt-4'>
                        A robust call-center tool purpose-built around prayer,
                        created to introduce individuals to the transforming story of Jesus.
                    </WhatWeDoText>
                    <Features className='row mb-4'>
                        <Feature className="col-lg-3 col-6 pt-5">
                            <img src={require("../assets/images/certificate.png")} alt="logo" width={'50'}/>
                            <FeatureText  className='pt-4'>Years of Prayer</FeatureText>
                            <PlatformNumber>
                                {counterOn &&
                                    <CountUp
                                    start={15}
                                    end={148}
                                    duration={2}
                                    delay={0}
                                    />
                                } +
                            </PlatformNumber>
                        </Feature>
                        <Feature className="col-lg-3 col-6 pt-5">
                            <img src={require("../assets/images/group.png")} alt="logo" width={'50'}/>
                            <FeatureText  className='pt-4'>Millions of Calls</FeatureText>
                            <PlatformNumber>
                                {counterOn &&
                                    <CountUp
                                    start={3}
                                    end={13}
                                    duration={2}
                                    delay={0}
                                    />
                                } Million+
                            </PlatformNumber>
                        </Feature>
                        <Feature className="col-lg-3 col-6 pt-5">
                            <img src={require("../assets/images/globe.png")} alt="logo" width={'50'}/>
                            <FeatureText  className='pt-4'>Anytime, Anywhere</FeatureText>
                            <PlatformNumber>
                                {counterOn &&
                                    <CountUp
                                    start={10}
                                    end={24}
                                    duration={2}
                                    delay={0}
                                    />
                                }/
                                {counterOn &&
                                    <CountUp
                                    start={3}
                                    end={7}
                                    duration={2}
                                    delay={0}
                                    />
                                }
                            </PlatformNumber>
                        </Feature>
                        <Feature className="col-lg-3 col-6 pt-5">
                            <span><GiMountains size={50}/></span>
                            <FeatureText  className='pt-4'>Countries Callers Call From</FeatureText>
                            <PlatformNumber>
                                {counterOn &&
                                    <CountUp
                                    start={10}
                                    end={100}
                                    duration={2}
                                    delay={0}
                                    />
                                } +
                            </PlatformNumber>
                        </Feature>

                    </Features>
                </PlatformFeatures>
            </ScrollTrigger>
        </ProductWrapper>

        <AboutWrapper>

        </AboutWrapper>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
    overflow-x: hidden;
`;

const Navigation = styled(Navbar)`
    background-color: #00323B !important;
    a{
        
        color: white;
        font-family: 'Futura';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 27px;
        
    }
`;

const LoginLink = styled.button`
    border: 1px solid #FF7234;
    color: #FF7234 !important;
    text-align: center;
`;

const RegisterLink = styled(Nav.Link)`
    background-color: #2DB3C0;
    text-align: center;
`;

const DonateLink = styled(Nav.Link)`
    background-color: #C2EDF6;
    color: #6C7B7D !important;
    text-align: center;
`;

const NavForm = styled(Form)`
    align-items: center;
`;

const ProductWrapper = styled.div`

`;
const WhatisIt = styled.div`
    display: flex;
`;

const WhatWeDo = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
        background-color: #FF7234;
        color: white;
        display: inline;
        font-weight: 700;
        font-family: "Futura";
        font-size: 20px;
        letter-spacing: 0.2em;
    }
`;
const WhatWeDoSpan = styled.span`
    font-size: 20px;
    border: 4px solid #FFEAE4;
    color: white;
    background-color: #FF7234;
`;
const WhatWeDoText = styled.p`
    font-weight: 800;
`;

const Doings = styled.div`

`;
const Doing = styled.div`
    border: 2px soild green;
`;


const DoingIcon = styled.span`
    background-color: #C2EDF6;
    border-radius: 20px;
    color: black;
`;

const DoingHeader = styled.p`
    font-weight: 800;
`;

const DoingContent= styled.p`
    font-weight: 500;
`;
const PlatformFeatures = styled.div`
    background-color: #FFEAE4;
    h6{
        background-color: #2DB3C0;
        color: #E6F3FF;
        display: inline;
        font-weight: 700;
        font-family: "Futura";
        letter-spacing: 0.2em;
    }
`;
const PlatformFeaturesSpan = styled.span`
    font-size: 20px;
    color: #E6F3FF;
    background-color: #2DB3C0;
`;
const Features = styled.div`
    text-align: center;
    div{
        border-right: 0.02pt solid #2DB3C0;
    }
    div:last-of-type {
        border: 0;
    }
    @media(max-width:1000px){
        div:nth-child(2) { border: 0; }
    }
    `;

const Feature = styled.div`
   
`;
const FeatureText = styled.p`
    font-weight: 500;
`;
const PlatformNumber = styled.p`
font-weight: 800;
font-size: 40px;
line-height: 60px;
text-align: center;
color: #FF7234;
font-family: 'Futura';

`;


const LeftDiv = styled.div`
    background-color: #00323B;
    min-height: 300px;
`;

const LeftHeader = styled.div`
    display: flex;
    align-items: center;
    color: #6C7B7D;
    justify-content: space-between;
    border-bottom: 2px solid white;
    h4 {
        background-color: #C2EDF6;
        display: inline;
        font-weight: 700;
        font-size: 20px;
        font-family: "Futura";
        line-height: 150%;
        letter-spacing: 0.2em;

    }
    span{
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;
        background-color: #C2EDF6;
    }

`;
const LeftContent = styled.div`
    color: white;
    font-weight: 500;
    font-family: "Futura";
`;
const Blueish = styled.span`
    color: #2DB3C0;
    font-weight: 600;
    font-family: "Futura";
`;

const Redish = styled.span`
color: #FF7234;
    a {
        color: #FF7234;
    }
`;
const RightDiv = styled.div`
   background-color: #2DB3C0;
   min-height: 300px;
   display: flex;
   justify-content: center;
   align-items: center;

`;

const RightContent = styled.div`
    background-color: #C2EDF6;
    height: 70%;
    width: 80%;
    border-radius: 30px;
    display: flex;
    align-items: end;
    a{
        background-color: #FF7234;
        color: white;
        text-decoration: none;
        font-family: 'Futura';
        font-weight: 700;
    }
`;
const AboutWrapper = styled.div`

`;