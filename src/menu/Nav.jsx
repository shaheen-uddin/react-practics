import React, { useState } from "react";

const Nav = ({category, filter})=> {
     
      console.log(category);

    return <nav className="flex -flex-row justify-center items-center space-x-10 ">
               {
                category.map((cat, index) => {
                    return <div key={index}>
                        <button  onClick={()=> filter(cat)} className="uppercase text-slate-700">{cat}</button>

                    </div>
                })
               }
                
          </nav>
}
export default Nav;