import { useEffect, useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false);
   
    
   useEffect(()=> {
    const timeOut = setTimeout(()=> {
        setAlert(false);
        console.log(alert);
    }, 3000)
    return ()=> clearTimeout(timeOut);
  }, [alert]) 

/*   useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])
 */


   // console.log(props)
  const bcg = rgb.join(',');
    
    const hex = rgbToHex(...rgb);
    return <article className={` h-64  text-center p-8 ${index > 10 && 'text-white'} `} style={{width: '200px' ,backgroundColor: `rgb(${bcg})`}}
    onClick={()=> {
        setAlert(true);
        navigator.clipboard.writeText(hex);
    }}
    >
        <p className="text-center px-1"> {weight}% </p>
        <p>{hex}</p>
        {alert && <p> copied to clipboard </p>}
    </article>
       
     
}
 
export default SingleColor;