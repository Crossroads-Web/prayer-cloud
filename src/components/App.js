import '../styles/App.css';
import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import CallForm from './CallForm';
import BibleMaterials from './BibleMaterials';
import ModelPrayers from './ModelPrayers';
import PrayerBinder from './PrayerBinder';
import Footer from './Footer';
import ErrorPage from './ErrorPage';
import Profile from './Profile';
import { ProfileContext } from '../contexts/ProfileContext'
import ProtectedRoute from './ProtectedRoute';
import SignUp from './SignUp';
//import Home from './Home';
import FloatingButtons from './FloatingButtons';
import PastoralCare from './PastoralCare';
import FollowUp from './FollowUp';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const { worker } = useContext(ProfileContext);
  useEffect(()=>{
   
  }, [worker])

  return (
  
    <>
        {/* if the signed in worker has admin or full_access roles the can view the floating button component */}
        {worker && (worker.roles.includes("admin") || worker.roles.includes("wfo.full_access")) &&  <FloatingButtons/>} 
        {worker && !worker.isCarePerson  && <Navigation />}

        <Routes>
       
             {/* if the signed in worker has carePerson attribute the home page is the dashboard, else the CallForm */}
            {worker && worker.isCarePerson ? <Route index element={<Profile/>} /> :   <Route index element={<CallForm/>} /> }
            {worker && worker.isCarePerson ? <Route path="/" element={<Profile/>} />   :  
            <>
              <Route path="/" element={<CallForm/>} /> 
              <Route path="/bibleMaterials" element={<BibleMaterials />} />
              <Route path="/modelPrayers" element={<ModelPrayers />} />
              <Route path="/prayerBinder" element={<PrayerBinder />} />
              <Route path="/profile" element={<Profile />} />
            </>}

            <Route path="/"
              element={
                <ProtectedRoute
                    redirectPath="/"
                    isAllowed={
                      !!worker && !worker.isCarePerson
                    }
                  >
                    <CallForm />
                </ProtectedRoute>}
              />
              
            <Route path="signup" element={<SignUp/>} />
            {worker && worker.routing.skills.includes('Pastoral Care') &&
            <>
              <Route path="pastoralCare" element={<PastoralCare/>} />
              <Route path="followUp/:id" element={<FollowUp/>} />
            </>
            }
         
          <Route path="*" element={<ErrorPage errorMessage='No such page found'></ErrorPage>} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
