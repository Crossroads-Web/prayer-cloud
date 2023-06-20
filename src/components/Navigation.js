import React, {useContext} from 'react';
import '../styles/Navigation.css';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { ProfileContext } from '../contexts/ProfileContext'

const Navigation = () => {
  const { worker } = useContext(ProfileContext);
  return (
    <Wrapper>
            <>
      <Nav className='navbar navbar-expand-lg'>
        <NavList className='navbar-nav'>
          {/* <NavItem className="nav-item">
              <Link activeclassname="active" className='nav-link p-3' to="/">CALL FORM</Link>
            </NavItem> */}

            {/* ONLY CARE PASTORS CAN VIEW PROFILE*/}
           {worker && worker.roles.includes('care_person') ?  
            <NavItem className="nav-item">
              <Link activeclassname="active" className='nav-link p-3' to="/">ADMIN PROFILE</Link>
            </NavItem> 
            :  
            (<NavItem className="nav-item">
              <Link activeclassname="active" className='nav-link p-3' to="/">CALL FORM</Link>
            </NavItem>)
          }

          {worker && worker.routing.skills.includes('Pastoral Care') &&
              <NavItem className="nav-item">
              <Link activeclassname="isActive" className="nav-link p-3" to="/pastoralCare">PASTORAL CARE</Link>
            </NavItem>
          }

          {/* {
           
            worker && (worker.roles.includes('wfo.full_access') || worker.roles.includes('admin')) &&
            <NavItem className="nav-item">
              <Link activeclassname="active" className='nav-link p-3' to="/profile">ADMIN PROFILE</Link>
            </NavItem>
          } 
           */}
        
          <NavItem className="nav-item">
            <Link activeclassname="isActive" className="nav-link p-3" to="/bibleMaterials">BIBLE MATERIALS</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link activeclassname="isActive" className="nav-link p-3" to="/modelPrayers">MODEL PRAYERS</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link activeclassname="isActive" className="nav-link p-3" to="/prayerBinder">PRAYER BINDER AND SUPPORT</Link>
          </NavItem>
          
        </NavList>
      </Nav>

    </>

    </Wrapper>
  );
}
const Nav = styled.nav`
margin: 0;
padding: 0;

`;
const NavList = styled.ul`
    width: 100%;
    min-height: 100%;
    display:flex;
    justify-content: space-between
`;
const NavItem = styled.li`
    
`;

const Link = styled(NavLink)`
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: 0.2em;
    text-align: center;
    font-weight: bold;
    color: #EC3310;    

    &:hover {
       background-color: #D9EEF0;
       color: #A7A7A7 !important;
    }
    &:active{
        background-color: #2DB3C0;
        color: #FFFFFF;
    }
   

`

const Wrapper = styled.div`
    background-color: #ADCFD4;
`;
export default Navigation;
