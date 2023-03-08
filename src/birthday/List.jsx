import React from "react"
const List = ({people})=> {

  console.log(people)

    return (
        <>
        {
            people.map(person=>{
                return <div key={person.id} className="flex flex-row justify-start hover:opacity-70 items-center transition  mb-4">
                                <img src={person.image} alt={person.name}  
                                className=" block rounded-full h-20 w-20"/>

                                <div className="flex flex-col justify-start mx-2">
                                    <h3 className="text-lg font-bold">{person.name}</h3>
                                    <p className="text-sm text-slate-400">{person.age} years</p>
                                </div>
                        </div>
            })
        }
        </>
    )
}
export default List;