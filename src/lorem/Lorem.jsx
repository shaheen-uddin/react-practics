import React, { useState } from "react";
import data from './data'

const Lorem = ()=> {
     const [count, setCount ] = useState(0);
     const [text, setText ]= useState([]);

const handleSubmit = (e)=> {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0){
        amount = 1;
    }
    if(count > 8){
        amount = 8;
    }
    setText(data.slice(0, amount));
}
console.log(text);
    return (
        <div className="max-w-4xl mx-auto mt-16">
                <h1 className="text-3xl font-bold uppercase my-6 text-center">Tired of Boring lorem ipsum?</h1>
                <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center space-x-3">
                    <label className="font-medium" htmlFor="lorem">Paragraphs</label>
                    <input className="w-40 h-8 rounded-md" type="number" name="amount" id="lorem"
                    onChange={e => setCount(e.target.value)}
                    value={count}/>
                    <button className="bg-blue-400 py-1 px-6 rounded-md uppercase">generate</button>
                </form>
            <article className="text-center mt-12 ">
                {
                    text.map((t, index)=> {
                        return <p className="py-3 text-slate-700" key={index}> {t}</p>
                    })
                }
                <p></p>
            </article>
        </div>
    )
}
export default Lorem;