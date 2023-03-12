import { useState } from "react";
const SingleColor = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false);
    
   // console.log(props)
  const bcg = rgb.join(',');
    console.log(bcg);
    
    return <article className=" h-64  text-center p-8" style={{width: '200px' ,backgroundColor: `rgb(${bcg})`}}>
        <p className="text-center px-1"> {weight} </p>
    </article>
       
     
}
 
export default SingleColor;