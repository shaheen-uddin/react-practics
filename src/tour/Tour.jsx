import React from "react";

const Tour = ({name, price, info, img})=> {



    return (
        <article className="max-w-md mx-auto my-16 shadow-md rounded-md">
            <img src={img} alt={name} className=""/>
             <div>
                <h2>{name}</h2>
                <h2>{price}</h2>
             </div>
             <p>{info}</p>
              <button>Not Interested</button>
        </article>
    )
}
export default Tour;