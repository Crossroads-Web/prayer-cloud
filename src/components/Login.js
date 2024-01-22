import React, { useEffect } from 'react'
import { useAuth0} from "@auth0/auth0-react";

const Login = () =>{
    const { loginWithRedirect, logout } = useAuth0();
    const { user } = useAuth0();
    

    const handleLogin = async () => {
      await loginWithRedirect({
        appState: {
          returnTo: "/home",
        },
      });
    };

    const handleLogout = () => {
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        });
    };

    console.log(user)
    useEffect(()=>{
        handleLogin()
       //handleLogout()
       console.log(user)
    },)

    if (!user) {
        return null;
    }
    // return (
    //     <button style={{background: "black"}} className="button__login" onClick={handleLogin}>
    //       Log In
    //     </button>
    //   );
};
export default Login