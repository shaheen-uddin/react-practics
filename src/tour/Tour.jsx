import React, { useState } from "react";

const Tour = ({tour, remove})=> {
  const [sub, setSub] = useState(false);

   console.log(remove)
  //console.log(tour)
    return (
        <article className="max-w-md xl:max-w-2xl mx-auto my-16 px-3 xl:px-8 pb-2 shadow-md rounded-md">
            <img src={tour.image} alt={tour.name} className="rounded-md mb-2 h-"/>
             <div className="flex justify-between mb-2 bg-slate-200  py-1 rounded-md px-1">
                <h2>{tour.name} </h2>
                <h2>{tour.price} </h2>
             </div>
             <p className="text-justify text-slate-600 ">{sub ? tour.info : tour.info.substring(0, 200)} <button onClick={()=> setSub(!sub)} className="text-blue-400"> {sub ? ' Read Less': ' Read More ...'}</button></p>
              <button onClick={()=> remove(tour.id)}
              className="w-1/2 block mx-auto mt-2 bg-pink-400 rounded-md  py-1  mb-4 ">Not Interested</button>
        </article>
    )
}
export default Tour;