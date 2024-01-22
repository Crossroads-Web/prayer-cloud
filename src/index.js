import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import App from './components/App';
import { CallFormProvider } from './contexts/CallFormContext';
import { ProfileProvider } from './contexts/ProfileContext';
import { OrganizationProvider } from './contexts/OrganizationContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './js/firebase';
import { PastoralProvider } from './contexts/PastoralContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <OrganizationProvider>
    <ProfileProvider>
      <CallFormProvider>  
        <PastoralProvider>
          <BrowserRouter>
            <App /> 
          </BrowserRouter> 
        </PastoralProvider>
      </CallFormProvider>
    </ProfileProvider>
  </OrganizationProvider>
);
