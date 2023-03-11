import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import people from "./data";

const Slider = ()=> {
    const [index, setIndex] = useState(0);
    const {image, name, title, quote } = people[index]

    const check =(num)=> {
        if(num > people.length -1){
            
            return 0;
        }
        if(num < 0){
            return people.length -1;
        }
        return num;
    }
    const nextPerson =()=> {
       setIndex ((index) => {
        let newIndex = index + 1;
        return check(newIndex);
       }
       )
    }
    const prevPerson =()=>{
        setIndex((index)=> {
            let newIndex = index -1;
            return check(newIndex);
        })
    }
    console.log(people);
  
    return (
        <div>
            <section className="max-w-3xl xl:max-w-5xl mx-auto mt-16 flex-col justify-center items-center">
                <h1 className="text-3xl font-extrabold tracking-wider text-center"> <span className="text-orange-700">/</span> Reviews</h1>
                <img src={image} alt={name} className="w-28 h-28 block mx-auto  rounded-full"/>
                <div className="flex flex-row justify-between items-center">
                    <button onClick={ prevPerson} className="border p-1"><FaChevronLeft/></button>
                    <div>
                        <h3 className="text-lg font-medium">{name}</h3>
                        <p className=" text-center">{title}</p>
                    </div>
                    <button 
                        onClick={nextPerson}
                        className="border p-1"><FaChevronRight />
                    </button>
                </div>
                <p className="text-slate-700 text-center">{quote}</p>
                 <FaQuoteRight className="w-12 mx-auto" /> 

            </section>
        </div>
    );
}
export default Slider;