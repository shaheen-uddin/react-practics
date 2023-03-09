import React, { useState, UseEffect, useEffect } from "react"
import Tour from "./Tour";

const url = 'https://course-api.com/react-tours-project'

const Tours = ()=> {
    const [loading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    useEffect(()=> {
        const fetchTours = async () => {
            try {
                const resp = await fetch(url);
                const fetchedTours = await resp.json();
                setTours(fetchedTours);
                console.log(tours);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTours();

    }, [])

    console.log(tours)

    return (
            
                <div>
                    {
                        tours.map(tour => {
                            return <Tour tour={tour} key={tour.id} />
                        })
                    }
                </div>
            
    )

}

export default Tours;