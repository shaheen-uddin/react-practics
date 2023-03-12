import React, { useState } from "react"

import Values from "values.js";
import SingleColor from "./SingleColor";

const Color = ()=> {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const handleSubmit = (e)=> {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            //console.log(colors);
            setList(colors);
            setError(false);
        } catch (error) {
            setError(true)
            console.log(error);
           
        }
    } 
 
    return (
        <div className="max-w-5xl mx-auto">
        <section className=" m-10">
            <form onSubmit={handleSubmit} className='flex flex-row items-center justify-center space-x-4'>
                <label className="font-medium" htmlFor="color">Color Generator</label>
                <div>
                <input 
                    className={` rounded-md shadow h-9 w-44 ${error? 'border-red-700': 'border-gray-300'}`}
                    type="text" id='color' value={color} onChange={e => setColor(e.target.value  )} placeholder="#f15025"/>
                    <button className="bg-blue-400 py-1.5 ml-2 rounded text-white tracking-wider px-6  hover:bg-blue-500">Submit</button>
                </div>
            </form>
        </section>
        <section className="max-w-5xl border mx-auto flex flex-row items-center flex-wrap justify-start"> 
            {
            list.map((color, index)=> {

                return <SingleColor key={index} {...color} index={index} />
            })}
        </section>
        </div>
    )
}
export default Color;