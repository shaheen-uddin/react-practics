import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({items, removeItem, editItem}) => {
    console.log(items);
    return (
        <div>
            {items.map(item=> {
                const {id, title} = item;
                return <article key={id} className="max-w-3xl mx-auto flex flex-row justify-between items-center" >
                    <p>{title}</p>
                           <div className='flex flex-row'>
                                <button 
                                 onClick={()=> editItem(id)}
                                className=" py-1.5 px-1 text-base font-medium tracking-wider ">
                                    <FaEdit />
                                </button>
                                <button 
                                    onClick={()=> removeItem(id)}
                                    className="py-1.5 px-1 text-base font-medium tracking-wider ">
                                    <FaTrash />
                                </button>
                           </div>
                </article>
            })}
        </div>
    )
}
export default List;