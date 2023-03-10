import React  from "react";
import { useState } from "react";
import {AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Question = ({title, info})=> {

    const[show, setShow] = useState(false);

    return <article className="space-y-1  rounded-md p-2">
        <div className="flex flex-row justify-between items-center mt-2">
            <h3 className="text-lg font-semibold ">{title}</h3>
             <button className="border  p-1 rounded-full bg-slate-500 font-extrabold text-white
             hover:ring-2 hover:ring-stone-700 hover:bg-slate-700" onClick={()=> setShow(!show)}>{show ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
        </div>
           { show && <p className="text-sm text-slate-600 text-justify  p-2 ">{info}</p>

           } 
    </article>
}
export default Question;