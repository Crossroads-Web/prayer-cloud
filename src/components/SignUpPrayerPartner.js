import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Auth0Lock } from 'auth0-lock';
//import { organizations } from '../assets/database';
import { OrganizationContext } from '../contexts/OrganizationContext';

export default function SignUpPrayerPartner(props) {
    useEffect(()=>{
        if(props.showLock){
            handleSignUp();
            props.setShowLock(false);
        }
    },[props.showLock])
    const {organizations} = useContext(OrganizationContext);
    const handleSignUp = () =>{
        // e.preventDefault();
        lock.show();
    }

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
        theme: {
            logo:"https://brass-lynx-1229.twil.io/assets/AnyonePray%20Logo-Dark.png",
            primaryColor: '#2DB3C0',
        },
        languageDictionary: {
            emailInputPlaceholder: "prayerpartner@email.com",
            passwordInputPlaceholder: "partner's default password",
        },
        additionalSignUpFields: [
        {
            name: "full_name",
            placeholder: "Enter Partner's Full Name",
            validator: function(full_name) {
                return {
                valid: full_name.length >= 4,
                hint: "Must have 4 or more chars" // optional
                };
            }
        },
        //if organizations is defe=ined and not empty
        {
            type: "select",
            name: "organization_name",
            placeholder: "Select Organization Name",
            options: organizations && organizations.length ? 
                organizations.map((organization, i) => {
                    return (
                        {
                            value: convertStringToCamelCase(organization.name) ,
                            label: organization.name
                        }
                    ) 
                })
            : [{value:"crossroads", label: "Crossroads"}]
        },
        {
            type: "select",
            name: "roles",
            placeholder: "Select Partner's Role",
            options: [
                {value: "agent", label: "Agent"},
                {value: "supervisor, wfo.team_leader", label: "Team Leader"},
                {value: "supervisor", label: "Supervisor"},
                {value: "agent, care_person", label: "Subscriber"}
            // {value: "[administrator]", label: "Administrator"},
            ],

        },
        {
            type: "select",
            name: "skills",
            placeholder: "Select Partner's Skill",
            options: [
                {value: "Prayer Partner", label: "Prayer Partner"},
                {value: "Pastoral Care", label: "Pastoral Care"},
                {value: "Suicide Prevention", label: "Suicide Prevention"},
                {value: "Pastoral Care, Suicide Prevention", label: "Pastoral Care + Suicide Prevention"},
                {value: "Subscriber", label: "Subscriber"},
            ],
        },
        // {
        //     type: "hidden",
        //     name: "skills",
        //     //value: []'
        // },
        ],
        allowLogin: false
    });

    return (
        <></>
        // <ButtonWrapper className="button iconbutton rounded-pill">
        //     <SignUpButton className="p-1 px-4 me-2 " onClick={handleSignUp} id="btn-login">Sign Up Prayer Partner</SignUpButton>
        // </ButtonWrapper>
    )
}
const SignUpButton = styled(Nav.Link)`
 
`;

const ButtonWrapper = styled.div`
    display: flex;  
    align-items: center;
    position:fixed;
    width: 150px;
    height: 100px;
    bottom: 40px;
    right: 40px;
    text-align: center;
    background-color:#2DB3C0;
    color:#FFF;
    box-shadow: 2px 2px 3px #999;
    z-index: 3000;
`;