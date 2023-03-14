import React, { useEffect } from 'react'

export const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(()=> {
    const timeOut = setTimeout(()=> {
      removeAlert();
    }, 3000);
    return ()=> clearTimeout(timeOut);
  }, [list]);
  return ( 
    <p className={`${type}`}>{msg}</p>
  )
}
export default Alert;
