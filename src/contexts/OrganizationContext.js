import React, { useState, createContext, useEffect } from "react";
import { showErrorMessage, showSuccessMessage } from "../helpers/useToast";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import {ref, getStorage, uploadBytesResumable} from 'firebase/storage';
import { db } from "../js/firebase";
export const OrganizationContext = createContext(null);


export const OrganizationProvider = ({children}) => {
    useEffect(()=>{
        getOrganizations();
    },[])

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const [website, setWebsite] = useState("");
    const [organizationPhoneNumber, setOrganizationPhoneNumber] = useState("");
    const [carePersonName, setCarePersonName] = useState("");
    const [carePersonEmail, setCarePersonEmail] = useState("");
    const [carePersonPhone, setCarePersonPhone] = useState("");
    const [assignedNumber, setAssignedNumber] = useState("");
    const [prayerPartnersCount, setPrayerPartnersCount] = useState("");
    const [serviceStartTimes, setServiceStartTimes] = useState("");
    const [churchPrograms, setChurchPrograms] = useState("");
    const [organizations, setOrganizations ] = useState(undefined);
    const [image, setImage] = useState(null);



    const getOrganizations = async() => {
        var collections = [];
        const querySnapshot = await getDocs(collection(db, "organizations"));
        querySnapshot.forEach((doc) => {
            collections.push(doc.data());
        // doc.data() is never undefined for query doc snapshots
        });
        setOrganizations(collections);
    }

    const addOrganization = async(setShow) => {
         if(organizations.find(organization => organization.name === name)){
            showErrorMessage(`Organization with name '`+name+`' already exists`);
            return;
        }

        if(!name || !type || !address || !city || !province || !postalCode || !country 
            || !website || !organizationPhoneNumber  || !carePersonName || !carePersonEmail 
            || !carePersonPhone ){
            showErrorMessage("Some fields are required to complete Sign Up ");
            return;
        }

         if(!image){
            showErrorMessage("Organization Logo is required");
            return;
         }
         const storage = getStorage();
        
        const storageRef = ref(storage, `/logos/${name}.png`)
        const uploadTask = uploadBytesResumable(storageRef, image);
        
        
        const docRef = await addDoc(collection(db, "organizations"), {
            name, type, address, city, province, 
            postalCode, website, organizationPhoneNumber, carePersonName, carePersonEmail, 
            carePersonPhone, assignedNumber, prayerPartnersCount, 
            serviceStartTimes, churchPrograms 
        });
        showSuccessMessage("New Organization Added Successfully");
        getOrganizations();
        setShow(false);

    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    }

    return (
        <OrganizationContext.Provider 
            value=
            {{
                addOrganization, assignedNumber, setAssignedNumber, prayerPartnersCount, setPrayerPartnersCount, organizations, image,
                name, setName, type, setType, address, setAddress, city, setCity, province, setProvince, postalCode, setPostalCode, country, setCountry, onImageChange,   
                website, setWebsite,  organizationPhoneNumber, setOrganizationPhoneNumber, carePersonName, setCarePersonName,
                carePersonEmail, setCarePersonEmail, carePersonPhone, setCarePersonPhone, serviceStartTimes, setServiceStartTimes, churchPrograms, setChurchPrograms
            }}
        >
            {children}
        </OrganizationContext.Provider>
    );
}
