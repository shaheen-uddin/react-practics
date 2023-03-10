import React, { useState } from "react";
import menu from "./data";
import Menu from "./Menu";
import Nav from "./Nav";

const allCats =['All', ... new Set(menu.map(item => item.category))];


const Menus = ()=> {
    const [menus, setMenus] = useState(menu);
    const [categories, setCategories] = useState(allCats);
   

   
    const filterItems = (cat)=>{
        if(cat == 'All'){
          
            setMenus(menu);
            return;
        }
        const filteredItems = menu.filter(item => item.category === cat);
        console.log(filteredItems);
        setMenus(filteredItems);
       
    }


    return (
         <div className="max-w-7xl mx-auto my-16">
            <Nav  category = {categories} filter = {filterItems}/>
            <div className="flex flex-row flex-wrap mt-16">
               {
                menus.map(item => {
                    return <Menu key={item.id} {...item} />
                })
               }
            </div>
         </div>
    );
}
export default Menus;