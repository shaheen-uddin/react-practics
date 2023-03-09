import React from "react";

const Tour = ({tour})=> {


  console.log(tour)
    return (
        <article className="max-w-md mx-auto my-16 shadow-md rounded-md">
            <img src={tour.image} alt={tour.name} className=""/>
             <div>
                <h2>{tour.name} </h2>
                <h2>{tour.price} </h2>
             </div>
             <p>{tour.info}</p>
              <button>Not Interested</button>
        </article>
    )
}
export default Tour;