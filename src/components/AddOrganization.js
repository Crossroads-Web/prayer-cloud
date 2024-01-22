import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components'
import "../styles/AddOrganization.css"
import { OrganizationContext } from '../contexts/OrganizationContext';
export default function (props) {

    const { 
         handleClose, addOrganization, assignedNumber, setAssignedNumber, prayerPartnersCount, setPrayerPartnersCount, image, onImageChange,
        name, setName, type, setType, address, setAddress, city, setCity, province, setProvince, postalCode, setPostalCode, country, setCountry,    
        website, setWebsite,  organizationPhoneNumber, setOrganizationPhoneNumber, carePersonName, setCarePersonName,
        carePersonEmail, setCarePersonEmail, carePersonPhone, setCarePersonPhone, serviceStartTimes, setServiceStartTimes, churchPrograms, setChurchPrograms
    } = useContext(OrganizationContext);

/*
THIS COMPONENET IS HOME FOR THE ADD ORGANIZATION FUNCTTIONALITY
A pop up modal that contais important info for organizations to be created
On Add organization clicked the func (OrgainzationContext) validates and stores the organization in firebase on success
*/
  return (
    <>
      {/* <ButtonWrapper onClick={props.handleShow}>
        Add New Organization
      </ButtonWrapper> */}
      <Modal show={props.show} onHide={props.onHide} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title> Add New Organization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ChurchImage>
                <input type="file" onChange={onImageChange} accept="image/png" id="png-upload" className="filetype" style={{display: "none"}} />
                <label htmlFor="png-upload">
                    <img   
                        src= {image ? URL.createObjectURL(image) :require("../assets/images/churchIcon.png")} 
                        alt="logo" width={'146'}
                    />
                    
                </label>
            </ChurchImage>

            <ChurchInfo className='p-3'>
                <ChurchInfoHeader className='p-2'>
                    Organization Info
                </ChurchInfoHeader>
                <div className="row form-group mb-2 p-2">
                <div className="col">
                    <label htmlFor="organizationName"><h6>Organization Name<sup>*</sup> </h6></label>
                    <input type="text" className="form-control" id="organizationName" onChange={(e) =>setName(e.target.value)} value={name} />
                </div>

                <div className="col">
                    <label htmlFor="organizationType"><h6>Organization Type<sup>*</sup> </h6></label>
                    <select className="form-control"
                    value={type}
                    onChange={(e)=> setType(e.target.value)}
                        >
                        <option default value="">Select Organization Type </option>
                        <option value="crossroads">Crossroads</option>
                        <option value="church">Church</option>
                        <option value="charity">Charity</option>
                        <option value="school">School</option>
                        <option value="cooperation">Corporation</option>

                    </select>
                </div>
                </div>
                <div className="row form-group mb-2 p-2">
                <div className="col">
                    <label htmlFor="address"><h6>Address<sup>*</sup> </h6></label>
                    <input type="text" className="form-control" id="address" value={address}
                        onChange={(e)=> setAddress(e.target.value)} />
                </div>
                </div>
                <div className="row form-group mb-2 p-2">
                <div className="col">
                    <label htmlFor="city"><h6>City<sup>*</sup> </h6> </label>
                    <input type="text" className="form-control" id="city" value={city} 
                        onChange={(e)=> setCity(e.target.value)}
                    />
                </div>
                <div className="col">
                    <label htmlFor="province"><h6>Province / State<sup>*</sup> </h6></label>
                    <input type="text" className="form-control" id="province"  
                        value={province} 
                        onChange={(e)=> setProvince(e.target.value)}
                    />
                </div>
                </div>
                <div className="row form-group mb-2 p-2">
                <div className="col">
                    <label htmlFor="postalCode"><h6>ZIP / Postal Code<sup>*</sup> </h6></label>
                    <input type="text" className="form-control" id="postalCode" 
                        value={postalCode} 
                        onChange={(e)=> setPostalCode(e.target.value)}
                    />
                </div>
                <div className="col">
                    <label htmlFor="country"><h6>Country<sup>*</sup> </h6></label>
                    <input type="text" className="form-control" id="country" 
                        value={country} 
                        onChange={(e)=> setCountry(e.target.value)}
                    />
                </div>
                </div>
                <div className="row form-group mb-2 p-2">
                <div className="col">
                    <label htmlFor="website"><h6>Organization Website<sup>*</sup></h6></label>
                    <input type="text" className="form-control" id="website" 
                        value={website} 
                        onChange={(e)=> setWebsite(e.target.value)}
                    />
                </div>

                <div className="col">
                    <label htmlFor="organizationPhoneNumber"><h6>Organization Phone Number<sup>*</sup></h6></label>
                    <input type="text" className="form-control" id="organizationPhoneNumber"  
                        value={organizationPhoneNumber} 
                        onChange={(e)=> setOrganizationPhoneNumber(e.target.value)}
                    />
                </div>
                </div>
            </ChurchInfo>

            <PastorInfo className='p-3'>
                <PastorInfoHeader className='p-2'>
                    Pastor Info
                </PastorInfoHeader>              
                {/* <div className="row form-group mb-2 p-2">
                <div className="col">
                    <label htmlFor="leadPastorName"><h6>Manager Full Name<sup>*</sup></h6></label>
                    <input type="text" className="form-control" id="leadPastorName"  
                        value={leadPastorName} 
                        onChange={(e)=> setLeadPastorName(e.target.value)}
                    />
                </div>
                </div> */}
                <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="carePersonName"><h6>Care Person Full Name<sup>*</sup></h6></label>
                        <input type="text" className="form-control" id="carePersonName" 
                            value={carePersonName} 
                            onChange={(e)=> setCarePersonName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="carePersonEmail"><h6>Care Person Email<sup>*</sup> </h6></label>
                        <input type="email" className="form-control" id="carePersonEmail"
                            value={carePersonEmail} 
                            onChange={(e)=> setCarePersonEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="carePersonPhone"><h6>Care Person Phone<sup>*</sup></h6></label>
                        <input type="text" className="form-control" id="carePersonPhone" 
                            value={carePersonPhone} 
                            onChange={(e)=> setCarePersonPhone(e.target.value)}
                        />
                    </div>
                </div>
            </PastorInfo>

            <MoreInfo className='p-3'>
                <MoreInfoHeader className='p-2'>
                    More Info
                </MoreInfoHeader>  
                <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="assignedNumber"><h6>Assigned Number</h6></label>
                        <input type="text" className="form-control" id="assignedNumber" 
                            value={assignedNumber} 
                            onChange={(e)=> setAssignedNumber(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="prayerPartnersCount"><h6>Prayer Partners Count</h6></label>
                        <input type="text" className="form-control" id="prayerPartnersCount" 
                            value={prayerPartnersCount} 
                            onChange={(e)=> setPrayerPartnersCount(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="serviceStartTimes"><h6>Sunday Service Start Times</h6></label>
                        <input type="text" className="form-control" id="serviceStartTimes" 
                            value={serviceStartTimes} 
                            onChange={(e)=> setServiceStartTimes(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row form-group mb-2 p-2">
                    <div className="col">
                        <label htmlFor="churchPrograms"><h6>Church Programs</h6></label>
                        <input type="text" className="form-control" id="churchPrograms" 
                            value={churchPrograms} 
                            onChange={(e)=> setChurchPrograms(e.target.value)}
                        />
                    </div>
                </div>
            </MoreInfo>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>addOrganization(props.setShow)}>
            Add Organization
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const ButtonWrapper = styled(Button)`
    display: flex;  
    align-items: center;
    justify-content: center;
    position:fixed;
    width: 100px;
    height: 100px;
    bottom: 40px;
    border-radius: 50%;
    left: 40px;
    text-align: center;
    background-color:#FF7234;
    color:#FFF;
    box-shadow: 2px 2px 3px #999;
    z-index: 3000;
    border: 0;
   
`;
const Form = styled.form`
`;

const ChurchImage = styled.div`
       
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ChurchInfo = styled.div`

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


const ChurchContactsHeader = styled.h4`
    color: #ED401F;
    text-align: left;
    font-family: Recoleta;
    text-decoration: underline;
`;
const PastorInfo = styled.div`
    background-color: #f3f9fa;
    input{
        background-color: #f3f9fa;
    }
`;

const PastorInfoHeader = styled.h4`
    text-align: left;
    color: #2DB3C0;
    font-family: Recoleta;
    text-decoration: underline;
`;

const ChurchInfoHeader = styled.h4`
text-align: left;

    color: #FF7234;
    font-family: Recoleta;
    text-decoration: underline;
`;