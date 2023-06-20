import React from 'react'
import styled from 'styled-components'
import {FaInstagram} from "react-icons/fa";
import {FiLinkedin, FiFacebook} from "react-icons/fi";
import {BsGlobe} from "react-icons/bs";
export default function HomeFooter() {
  return (
    <Wrapper className='row p-5'>
        <FooterItem className="col-lg-3 col-6 p-4">
            <FooterHeader className="p-2">
                COMPANY
            </FooterHeader>
            <FooterLink className="p-2" href="#about">
                About
            </FooterLink>
            <FooterLink className="p-2" href="#tos">
                Terms of Service
            </FooterLink>
            <FooterLink className="p-2" href="#pp">
                Privacy Policy
            </FooterLink>
            <FooterLink className="p-2" href="#cp">
                Cookie Policy
            </FooterLink>
            <FooterLink className="p-2" href="#tos">
                SMS Terms & Conditions
            </FooterLink>
            <FooterLink className="p-2" href="#about">
                Company Updates
            </FooterLink>
            <FooterLink className="p-2" href="#tos">
                Donations
            </FooterLink>
        </FooterItem>

        <FooterItem className="col-lg-3 col-6 p-4 ">
            <FooterHeader className="p-2">CONTACT</FooterHeader>
            <FooterSpan className="px-2" href="#tos">
                1295 North Service Rd 
            </FooterSpan>
            <FooterSpan className="px-2">
                Burlington
            </FooterSpan>
            <FooterSpan className="px-2">
                ON L7P 0V5
            </FooterSpan>

            <FooterSub className='pt-3 px-2'>Mailing to:</FooterSub>
            <FooterSpan className="px-2">
                PO Box 5100
            </FooterSpan>
            <FooterSpan className="px-2">
                Burlington, ON L7R 4M2
            </FooterSpan>

            <FooterSub className='pt-3 px-2'> 24/7 Prayer Lines:</FooterSub>
            <FooterSpan className="px-2">           
                1-866-273-4444
            </FooterSpan>

            <FooterSub className='pt-3 px-2'> Partner Inquiries:</FooterSub>
            <FooterSpan className="px-2">           
                1-800-265-3100
            </FooterSpan>
            

        </FooterItem>

        <FooterItem className="col-lg-3 col-6 p-4">
            <FooterHeader className="p-2">EMAIL</FooterHeader>
            <FooterLink className="p-2" href="mailto:prayerpartners@crossroads.ca">           
                prayerpartners@crossroads.ca
            </FooterLink>

            <FooterHeader className="p-2">LOCAL SWITCHBOARD</FooterHeader>
            <FooterSpan className="p-2">           
                1-905-335-7100
            </FooterSpan>

            <FooterHeader className="p-2">TECH SUPPORT</FooterHeader>
            <FooterSpan className="p-2">           
                IT Help Desk
            </FooterSpan>
        </FooterItem>

        <FooterItem className="col-lg-3 col-6">
        <FooterHeader></FooterHeader>
        <FooterImage src={require("../assets/images/crossroads.png")} alt="logo" width={350}/>
        <FooterIcons>
            <FiFacebook size={25} className="m-2"/>
            <FaInstagram size={25} className="m-2"/>
            <FiLinkedin size={25} className="m-2"/>
            <BsGlobe size={25} className="m-2" />
        </FooterIcons>   
        </FooterItem>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
    background-color: #2DB3C0;
    font-family: "Futura";
    min-height: 400px;
    display: flex;

    div:last-of-type {
        align-items: end;
        justify-content: end;
    }
`;

const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const FooterHeader = styled.h6`
font-weight: 700 !important;
font-size: 20px;


`
const FooterSub = styled.span`
font-weight: 500 !important;
`;
const FooterIcons = styled.div`

`;
const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    &:hover{
        color: white;
        font-size: 1.1em;
    }
`;
const FooterImage = styled.img`
    @media(max-width:1000px){
    width: 250px;
    }
`;
const FooterSpan = styled.span`
    color: white;
`;