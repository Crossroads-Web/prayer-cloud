import React, {useContext} from 'react';
import '../styles/Navigation.css';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { ProfileContext } from '../contexts/ProfileContext'

const Navigation = () => {
  const { worker } = useContext(ProfileContext);
  return (
    <Wrapper> 
      <Nav className='navbar navbar-expand-sm'>
        <NavList className='navbar-nav'>
          {worker && worker.routing.skills.includes('Pastoral Care') &&
              <NavItem className="nav-item">
              <Link activeclassname="isActive" className="nav-link p-3" to="/pastoralCare">PASTORAL CARE</Link>
            </NavItem>
          }
          <NavItem className="nav-item">
            <Link activeclassname="active" className='nav-link p-3' to="/">CALL FORM</Link>
          </NavItem>
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
    </Wrapper>
  );
}
const Nav = styled.nav`
  margin: 0;
  padding: 0;
`;
const NavList = styled.ul`
   width:100%;
   min-height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;    
`;
const NavItem = styled.li`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;

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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;
export default Navigation;
