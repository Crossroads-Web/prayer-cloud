import React, {useState, useEffect} from "react";

export const useKeyPress = targetKey => {
    const [keyPressed, setKeyPressed] = useState(false);
  
    const downHandler = ({ key }) => {
      if (key === targetKey) setKeyPressed(true);
    };
  
    const upHandler = ({ key }) => {
      if (key === targetKey) setKeyPressed(false);
    };
  
    useEffect(() => {
      window.addEventListener('keypress', downHandler);
    //  window.addEventListener('keyup', upHandler);
  
      return () => {
        window.removeEventListener('keypress', downHandler);
      //  window.removeEventListener('keyup', upHandler);
      };
    }, []);
  
    return keyPressed;
  };