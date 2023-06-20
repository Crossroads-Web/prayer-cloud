import '../styles/App.css';
import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import CallForm from './CallForm';
import BibleMaterials from './BibleMaterials';
import ModelPrayers from './ModelPrayers';
import PrayerBinder from './PrayerBinder';
import Footer from './Footer';
import ErrorPage from './ErrorPage';
import Profile from './Profile';

 // import Home from './Home';
// import HomeFooter from './HomeFooter';
 import { ProfileContext } from '../contexts/ProfileContext'
 import ProtectedRoute from './ProtectedRoute';
import SignUp from './SignUp';
//import Home from './Home';
import FloatingButtons from './FloatingButtons';
import PastoralCare from './PastoralCare';
import FollowUp from './FollowUp';


const App = () => {
  const { worker } = useContext(ProfileContext);

  return (
  
    <BrowserRouter>
        {worker && (worker.roles.includes("admin") || worker.roles.includes("wfo.full_access")) &&  <FloatingButtons/>} 
        { <Navigation/>}
        <Routes>
           {/* <Route index element={<Home/>} />  */}
           {worker && worker.roles.includes('care_person') ? <Route index element={<Profile/>} /> :   <Route index element={<CallForm/>} /> }
          {worker && worker.roles.includes('care_person') ? <Route path="/" element={<Profile/>} />   :  <Route path="/" element={<CallForm/>} /> }
          {/* <Route element={<ProtectedRoute isAllowed={!!user} />}> */}
          
            <Route path="bibleMaterials" element={<BibleMaterials />} />
            <Route path="modelPrayers" element={<ModelPrayers />} />
            <Route path="prayerBinder" element={<PrayerBinder />} />
            <Route path="profile" element={<Profile />} />

          {/* </Route> */}

          <Route path="/"
            element={
              <ProtectedRoute
                  redirectPath="/"
                  isAllowed={
                    !!worker && !worker.roles.includes('care_person')
                  }
                >
                  <CallForm />
              </ProtectedRoute>}
            />
{/* ONLY SUPERVISORS CAN VIEW ROFILE (worker.roles.includes('wfo.full_access') || worker.roles.includes('admin') */}
          {/* <Route path={worker && worker.roles.includes('supervisor') ? "/" : "/profile" }
            element={
              <ProtectedRoute
                  redirectPath="/"
                  isAllowed={
                    worker &&  worker.roles.includes('supervisor')
                  }
                >
                  <Profile />
              </ProtectedRoute>}
            />  */}

        
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
        {/* {user ? <Footer/> : <HomeFooter/>} */}
    </BrowserRouter>
  );
}

export default App;
