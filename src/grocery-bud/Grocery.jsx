import { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = ()=> {
    let list = localStorage.getItem('list');
    if(list){
        return (list = JSON.parse(localStorage.getItem(list)));
    } else {
        return [];
    }
};

const Grocery = ()=> {
 const [name, setName] = useState('');
 const [list, setList]= useState([]);  
 const [isEditing, setIsEditing] = useState(false);
 const [editID, setEditID] = useState(null);
 const [alert, setAlert] = useState({show: true, msg: '', type: 'success'});

 const handleSubmit = (e)=> {
    e.preventDefault();
    if(!name){
        showAlert(true, 'danger', 'please enter a value');
    } else if(name && isEditing){
        //edit
        setList(
            list.map(item => {
                if(item.id === editID){
                    return {...item, title: name};
                }
                return item;
            })
        );
        setName('');
        setIsEditing(false);
        showAlert(true, 'success', 'value changed');
    }
    else {
        //add item
        showAlert(true, 'success', 'item added to the list');
         const newItem = { id: new Date().getTime().toString(), title: name,  }
         setList([...list, newItem]);
         setName('');
    }
 }
 const showAlert =(show = false, type = '', msg = '')=>{
     setAlert({show, type, msg});
 }
 const clearList = ()=> {
    setList([]);
    showAlert(true, 'danger', 'empty list');
 }
 const removeItem = (id)=> {
    showAlert(true, 'danger', 'Item removed');
    setList(list.filter(item => item.id !==id));
 }
 const editItem = (id )=>{
    const specificItem = list.find(item => item.id ===id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
 }
 useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list));
 }, [list]);


    return (
        <section className="max-w-4xl mx-auto my-20 shadow-lg rounded-md p-6">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4" >
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
                    <List items={list} removeItem={removeItem} editItem={editItem}/>
                    <button 
                        onClick={clearList}
                        className=" py-4 px-6 text-red-700 tracking-wider  w-1/4 block mx-auto">
                        Clear Item
                    </button>
                 </div>
                )}
                
        </section>
    )
}
export default Grocery;