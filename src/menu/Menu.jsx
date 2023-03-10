

const Menu = ({img, title, price, desc}) => {

    return (
        <article className="w-1/2 p-4 flex justify-start">
            <img src={img} alt={title}  className="w-96 h-40 block border-2 border-amber-700 rounded-md"/>
            <div className="flex flex-col px-2">
                <div className="flex flex-row justify-between shadow-sm shadow-slate-400  border-b-stone-400 ">
                    <h3 className="capitalize tracking-wide  text-base font-semibold  pb-1">
                        
                         {title} </h3>
                    <h3 className="text-orange-600">${price}</h3>
                </div>
            <p className="mt-2 text-justify text-sm text-stone-600">{desc}</p>
            </div>

        </article>
    )    
}

export default Menu;