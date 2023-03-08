import React, { useState } from 'react'
import data from '../../data';
import List from './List';

const BirthDay = ()=> {
    const [people, setPeople] = useState(data);

const handleClick = ()=> {
    if(people.length > 0){
     setPeople([])
    } else {
        setPeople(data)
    }
    
}
     


    return (
        <main className='bg-pink-500 py-20 '>
            <section className='max-w-lg mx-auto  bg-white rounded-lg shadow-md shadow-slate-500 p-8'>
                <h3 className='text-2xl font-semibold mb-2 '>{people.length} birthday today</h3>
                <List people={people} />
               
                <button onClick={handleClick}
                className="block transition  w-full bg-pink-500 rounded-md py-1 mt-4 text-white font-medium hover:bg-pink-600"
                >{people.length > 0 ? 'Clear All' : 'Reset'}</button>
            </section>
        </main>
    )
}
export default BirthDay;