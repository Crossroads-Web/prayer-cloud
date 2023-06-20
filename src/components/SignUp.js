import React from 'react'
import styled from 'styled-components'

export default function SignUp() {
  return (
    <Wrapper>
        <SignUpForm className='col-md-6 col-12 p-5'>
            <div className='px-5'>
            <SignUpHeader>
                Sign Up
            </SignUpHeader>
            <SignUpSubHeading className='m-0'>Welcome to AnyonePray!</SignUpSubHeading>
            <SignUpSubHeading className='mb-5'>Please Enter Your Details.</SignUpSubHeading>

            <div className="row form-group mb-4">
              <div className="col-xl-8 col">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control form-rounded" id="firstName" />
              </div>
            </div>  

            <div className="row form-group mb-4">
              <div className="col-xl-8 col">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
            </div>  

            <div className="row form-group mb-4">
              <div className="col-xl-8 col">
                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" className="form-control" id="emailAddress" />
              </div>
            </div>  

            <div className="row form-group mb-4">
              <div className="col-xl-8 col">
                <label htmlFor="createPassword">Create Password</label>
                <input type="password" className="form-control" id="createPassword" />
              </div>
            </div> 

            <div className="row form-group mb-4">
              <div className="col-xl-8 col">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" />
              </div>
            </div> 

            <div className="row form-group mb-4">
              <div className="col-xl-8 col">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" />
              </div>
            </div> 

            <div className="row form-group mb-4">
              <div className="col-xl-8 col">
                <label htmlFor="dob">Date of Birth (MM/DD/YYYY)</label>
                <input type="date" className="form-control" id="dob" />
              </div>
            </div> 

            <div className="row form-group mb-4">
              <div className="col-xl-8 col">
                <label htmlFor="corporation">Corporation</label>
                <input type="text" className="form-control" id="corporation" />
              </div>
            </div> 

            <div className="rounded col-lg-6 col-12 mb-4 p-2">
                <p>Select User Type:</p>

                <div className="form-check form-check">
                    <input className="form-check-input" name="userType" type="radio"  value="volunteerType" />
                    <label className="form-check-label" htmlFor="volunteerType">Volunteer</label>
                </div>

                <div className="form-check form-check">
                    <input className="form-check-input" name="userType" type="radio" value="churchType" />
                    <label className="form-check-label" htmlFor="churchType">Church</label>
                </div>

                <div className="form-check form-check">
                    <input className="form-check-input" name="userType" type="radio"  value="organizationType" />
                    <label className="form-check-label" htmlFor="organizationType">Organization</label>
                </div>

                <div className="form-check form-check">
                    <input className="form-check-input" name="userType" type="radio" value="administrationType" />
                    <label className="form-check-label" htmlFor="administrationType">Administration</label>
                </div>
            </div>

            <p>Please Fill out all required fields:</p>
            <FormButtonWrapper>
                <FormButton type="submit" className="btn mb-2 col-6"><span>SIGN UP</span></FormButton>
            </FormButtonWrapper>

            <HaveAnAccount>
                <span>Already have an account?</span>
                <a href="login">Login</a>
            </HaveAnAccount>
            </div>
        </SignUpForm>
        <SignUpBackground className='col-md-6 col-12'>
            <p>b</p>
        </SignUpBackground>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Futura";
`;

const SignUpForm = styled.form`

`;

const SignUpBackground = styled.div`
    background-color: #FF7234;
    min-height: 100%;

`;
const FormButtonWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`;
const FormButton = styled.button`
    
    background-color: #2DB3C0;
    font-size: 1.5em;
    &:hover{
        background-color: #FF7234;
    }
`;

const HaveAnAccount = styled.div`
    display: flex;
    justify-content: space-between;
    a{
        color: #FF7234;
    }
`;

const SignUpHeader = styled.h1`
    text-align: left;
`;

const SignUpSubHeading = styled.p`

`;