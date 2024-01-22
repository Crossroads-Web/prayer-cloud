import React, { useState, createContext, useContext, useEffect } from "react";
import { Fetch } from "../hooks/use-fetch-hook";
import { OrganizationContext } from "./OrganizationContext";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export const ProfileContext = createContext(null);

export const ProfileProvider = ({children}) => {
    const {organizations} = useContext(OrganizationContext);
    const [worker, setWorker] = useState(undefined);
    const [report, setReport] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [showDataOption, setShowDataOption] = useState("allData");
    const [show, setShow] = useState(false);
    const [organization, setOrganization] = useState(null);
    const [organizationImage, setOrganizationImage] = useState(undefined);
    useEffect(() =>{
        setLoading(true)
        if (organizations) {
            getOrganizationsReport(showDataOption)
        }
    },[organizations, worker, showDataOption, organizationImage])
   
   
    const getOrganizationImage = (name) =>{
        const storage = getStorage();
        getDownloadURL(ref(storage, `logos/${name}.png`))
          .then((url) => {
            setOrganizationImage(url);
          })
          .catch((error) => {
            // Handle any errors
          });

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const chartReportData = (report, label, isformatted) => {
        var labels, values;
        if(!isformatted){
            [labels, values] = formatData(report)
        }else{
            [labels, values] = report
        }
        return {
            labels: labels,
            datasets: [
            {
                label: label,
                data: values,
                backgroundColor: [
                '#FF7234',
                '#FCD5C9',
                '#2DB3C0',
                '#C1DCDE',
                '#EC3310',
                'rgba(255, 159, 64, 0.2)',
                ],
                hoverOffset: 4
            },
            ],
        }
    };
    
    const handleWorker = (event) => {
        if (event.data.type === 'currentWorkerInfo') {
            // console.log("home", event.data)
            // get phone number from the postmessage data
            setWorker(event.data.data.worker);
        }

        
    }
    window.addEventListener('message', handleWorker, false);
    const fetchReport = async(twilio_number, show_data_option) => {
      
        const url = 'https://anyonepraybackend.com/orghistory';
        const data = {
            twilio_number ,
            show_data_option
        }
        var options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cHA6cHBw',

            },
            body: JSON.stringify(data),
        }
        const result = await Fetch(url, options);
        setLoading(false)
        return result.data;
    }

    const getOrganizationsReport = async (show_data_option) => {
        if (worker && worker.isCarePerson) { // && !worker.roles.includes('team_lead')
            var organization = organizations.find((organization) =>{
                return organization.carePersonEmail === worker.email 
            })
            if (organization){
                let fetchNumber = organization.assignedNumber
                if(show_data_option === "allData"){
                    fetchNumber = "+12897687515"
                }
                setOrganization(organization);
                getOrganizationImage(organization.name);
                const result = await fetchReport(fetchNumber, show_data_option);
                setReport(result);
            }

            //actual condition to be used after testing is done
            // if (organization){
            //     setOrganization(organization);
            //     getOrganizationImage(organization.name);
            //     const result = await fetchReport(organization.assignedNumber, show_data_option);
            //     setReport(result);
            // }
        }
        //setLoading(false)
    }
 
    const formatData = (report) => {
        var labels = [];
        var values = [];
        report.forEach((obj)=> {
            labels.push(Object.values(obj)[0]);
            values.push(Object.values(obj)[1])
        })
        return [labels, values]
    }
       
    const formatArray = (report, label) => {
        report = report.toString().split(",")
        const elementCounts = {};

        report.forEach(element => {
            element = element.trim();
            elementCounts[element] = (elementCounts[element] || 0) + 1;
        });

        var callTypeLabels = Object.keys(elementCounts)
        var callTypeValues = Object.values(elementCounts)
        
       return chartReportData([callTypeLabels, callTypeValues ], label, true)
    }
        


    if (report) {
        var genderData = chartReportData(report[0].gender_report, 'Gender of Callers'); 
        var ageRangeData = chartReportData(report[0].age_range_report, 'Age Range of Callers' ); 
        var dispositionData = chartReportData(report[0].disposition_report, 'Disposition Report');
        var callTypeData = formatArray(report[0].call_type_report[0], "Type Of Calls");
        var followUpTypeData = formatArray(report[0].follow_up_type_report[0], "Type Of Follow Up");


       // var callTypeData = chartReportData([callTypeLabels, callTypeValues ], 'Type of Calls', true); 
        var digitalResourcesData = chartReportData(report[0].digital_resource_report, 'Digital Resource Report');
        var physicalResourcesData = chartReportData(report[0].physical_resource_report, 'Physical Resource Report');
    }
    return (
        <ProfileContext.Provider 
            value=
            {{
                worker, getOrganizationsReport, show, handleClose, handleShow, showDataOption, setShowDataOption, organizationImage, loading,
                report, genderData, ageRangeData, dispositionData, callTypeData, organization, digitalResourcesData, physicalResourcesData
                 
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
}
