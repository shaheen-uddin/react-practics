import { useState } from "react";
import Alert from "./Alert";
import List from "./List";

const Grocery = ()=> {
 const [name, setName] = useState('');
 const [list, setList]= useState([]);  
 const [isEditing, setIsEditing] = useState(false);
 const [editID, setEditID] = useState(null);
 const [alert, setAlert] = useState({show: false, msg: '', type: ''});

 const handleSubmit = (e)=> {
    e.preventDefault();
    if(!name){
        //alert
    } else if(name && isEditing){
        //edit
    }
    else {
        //add item
         const newItem = { id: new Date().getTime().toString(), title: name,  }
         setList([...list, newItem]);
         setName('');
    }
 }
 console.log(name);
 console.log(list);
    return (
        <section className="max-w-4xl mx-auto my-20 shadow-lg rounded-md p-6">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4" >
                {alert.show && <Alert />}
                <h3 className="text-xl font-semibold text-center">Grocery Bud</h3>
                <div className="space-x-1">
                        <input type="text" placeholder="e.g eggs" value={name} onChange={(e)=> setName(e.target.value)}
                        className="border-gray-300 rounded-md h-9"
                        />
                        <button className="bg-sky-400 py-1.5 px-3 text-base font-medium tracking-wider ">
                           {isEditing ? 'Edit' : 'Submit'}
                        </button>
                </div>
            </form>
                {list.length > 0 && (
                 <div className="py-8">
                    <List items={list}/>
                    <button className=" py-4 px-6 text-red-700 tracking-wider  w-1/4 block mx-auto">
                        Clear Item
                    </button>
                 </div>
                )}
                
        </section>
    )
}
export default Grocery;