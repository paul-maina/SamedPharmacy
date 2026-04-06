import React from "react";
import { BsFillBellFill, BsFillEnvelopeFill, BsSearch, BsJustify } from 'react-icons/bs';


function Header(){
    return(
        <header className="header flex justify-between items-center pl-7 p-3 shadow-md ">
            <div className="menu_icon text-lg cursor-pointer close_icon hidden">
                <BsJustify className="icon"/>
            </div>

            <div className="search_icon text-lg cursor-pointer">
                <BsSearch className="icon"/>
            </div>

            <div className="right_header flex gap-5 text-lg cursor-pointer">
                <BsFillBellFill className="icon"/>
                <BsFillEnvelopeFill className="icon"/>
            </div>
             
        </header>
    )
}

export default Header;