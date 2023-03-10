import React, {useState} from "react";
import reviews from "../../data2";
import {BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {FaQuoteRight} from 'react-icons/fa';


const Reviews = ()=> {
   const [index, setIndex] = useState(0);
   const {name, job, image, text }=reviews[index];

   const checkNumber = (number)=>{
    if(number > reviews.length - 1){
        return 0;
    }
    if(number < 0){
       return reviews.length - 1;
    }
    return number;
   }

   const prevPerson =()=>{
      setIndex(currentIndex => {
        const newIndex = currentIndex - 1;
        return checkNumber(newIndex)
      } );
   };

   const nextPerson = ()=> {
        setIndex(currentPerson => {
            const newIndex = currentPerson + 1;
            return checkNumber(newIndex);
        });
   };

   const randomPerson = ()=> {
    let random = Math.floor(Math.random() * (reviews.length-1));
    if(random === index){
        random = index + 1;
    }
    setIndex(random);
    console.log(random);
   }

    return (
        <div className="max-w-md mx-auto mt-20">
            <h2 className="text-center text-3xl font-bold ">Our Reviews</h2>
            <div className="flex flex-col justify-center items-center shadow-lg rounded-mdm p-4">
               <div className="relative"> 
                    <img src={image} alt={name} className="w-32 h-32 rounded-full"/>
                    <span className="absolute top-4 left-1 text-xs bg-blue-500 text-white p-1.5 rounded-full"><FaQuoteRight /></span>
                </div>
                <h4 className="text-2xl font-semibold my-1">{name}</h4>
                 <p className="text-sm text-blue-500 font-light my-1">{job}</p>
                <p className="text-center text-slate-700 text-sm">{text}</p>
                <div className="flex flex-row justify-center items-center my-2">
                    <button onClick={prevPerson}><BsChevronLeft className="text-xl font-semibold mr-1 "/></button>
                    <button onClick={nextPerson}><BsChevronRight className="text-xl font-semibold ml-1 "/></button>
                </div>
                <button onClick={randomPerson} className=" w-1/2 bg-pink-500 py-1 px-6 rounded-md text-white mt-2">Surprise Me</button>
            </div>
        </div>
    );
};

export default Reviews;