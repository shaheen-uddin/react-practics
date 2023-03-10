import React, {useState, useEffect} from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project'

const Tabs = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs ] = useState([]);
    const [value, setValue] = useState(0);

    
    const fetchJobs = async()=> {
        try {
            const resp = await fetch(url);
            if(!resp.ok){
                return;
            }
            const newJobs = await resp.json();
            setJobs(newJobs);
            console.log(newJobs);
            setLoading(false);
        } catch (error) {
            console.log(error);
        } 
    };

 useEffect(()=>{
    fetchJobs();
 }, [])

  if(loading){
    return <h2 className="text-3xl my-12 font-black text-center tracking-widest">Loading ....</h2>
  }
    const { company, dates, duties, title } = jobs[value] 
    return (
        <div className="max-w-4xl xl:max-w-5xl my-12 mx-auto">
            <h2 className="text-3xl font-black text-center tracking-widest">Experience</h2>
            <div className="w-full flex flex-row ">
                <article className="flex flex-col gap-6 w-1/3 mt-16  items-center font-bold text-lg">
                    {
                        jobs.map((item, index)=> {
                            return <button onClick={()=>setValue(index)} 
                            
                            className={`text-center w-1/3 ${index === value && 'text-indigo-600 border-l-2 border-l-indigo-600 pb-1'}`}
                            
                            key={index}>{item.company}</button>
                        })
                    }
                </article>
                <article className=" w-2/3 mt-16">
                    <h2 className="text-2xl font-semibold tracking-wider text-slate-700">{title}</h2>
                    <h4 className="bg-slate-200 font-bold text-slate-600 inline-block py-[14] px-5 rounded-md">{company}</h4>
                    <p className="text-slate-600 font-medium">{dates}</p>
                    {duties.map((duty, index) => {
                        return <ul key={index}>
                                <li className="flex flex-row items-center my-1 gap-6">
                                <FaAngleDoubleRight className="inline-block text-green-600"/>
                                 <span className="text-sm text-slate-800 tracking-wider text-justify">{duty}</span> 
                                    
                                </li>
                        </ul>
                    })
                    }
                     <button className="block w-80 bg-green-600 py-1 mx-auto mt-12 rounded-md shadow-md text-lg text-white uppercase">
                        More Info</button>
                </article>
            </div>
        </div>
    )

}
export default Tabs;