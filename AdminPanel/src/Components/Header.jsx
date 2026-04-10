import React from "react";
import { BsFillBellFill, BsFillEnvelopeFill, BsSearch, BsJustify } from 'react-icons/bs';


function Header(){
    return(
        <header className="header flex justify-between items-center pl-7 p-3 shadow-md ">
            <div className="menu_icon text-lg cursor-pointer close_icon hidden">
                <BsJustify className="icon"/>
            </div>

            <div className="search_icon text-sm bg-stone-200 rounded-md px-3 py-2 flex items-center gap-2">
                <BsSearch className=""/>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent
                  placeholder:text-stone-400 focus:outline-none"
                />
            </div>

            <div className="right_header flex gap-5 text-lg cursor-pointer">
                <BsFillBellFill className="icon"/>
                <BsFillEnvelopeFill className="icon"/>
            </div>
             
        </header>
    )
}

export default Header;