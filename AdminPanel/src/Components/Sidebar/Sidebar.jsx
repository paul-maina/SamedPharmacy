import { BsCart3, BsPersonCircle, BsGearFill, BsGrid3X3GapFill, BsCurrencyDollar, BsPeopleFill, BsGrid1X2Fill, BsMenuButtonWideFill,BsArchiveFill} from "react-icons/bs";



function Sidebar(){
    return(
        <aside className="w-[220px] h-full bg-black text-gray-300 overflow-y-scroll  ">
            
            <div className="p-4 m-4 flex flex-col items-center gap-3 ">
                <BsPersonCircle className="icon text-4xl "/>
                <div className="font-bold text-xl text-blue-500">SamAdmin</div> 
            </div>

            {/*
            <div className="sidebar_title flex justify-between align-center p-4">
                <div className="sidebar_brand flex items-center font-bold text-xl gap-2">
                    <BsCart3 className="icon_header"/>SHOP
                </div>
                <span className="icon close_icon hidden">X</span>
            </div>
            */}

                <ul className="sidebar_list text-sm font-medium space-y-1 sticky">
                    <li className="sidebar_list_item block p-2 hover:bg-gray-500">
                        <a href="" className="flex items-center gap-2 ">
                            <BsGrid1X2Fill className="icon"/>Dashboard
                        </a>
                    </li>

                    <li className="sidebar_list_item block p-2 hover:bg-gray-500">
                        <a href="" className="flex items-center gap-2">
                            <BsArchiveFill className="icon"/>Products
                        </a>
                    </li>

                    {/*<li className="sidebar_list_item block p-2 hover:bg-gray-500">
                        <a href="" className="flex items-center gap-2">
                            <BsGrid3X3GapFill className="icon"/>Categories
                        </a>
                    </li>*/}
        

                    <li className="sidebar_list_item block p-2 hover:bg-gray-500">
                        <a href="" className="flex items-center gap-2">
                            <BsPeopleFill className="icon"/>Customers
                        </a>
                    </li>
                
                    <li className="sidebar_list_item block p-2 hover:bg-gray-500">
                        <a href="" className="flex items-center gap-2">
                            <BsCurrencyDollar className="icon"/>Sales
                        </a>
                    </li>
                
                    <li className="sidebar_list_item block p-2 hover:bg-gray-500">
                        <a href="" className="flex items-center gap-2">
                            <BsMenuButtonWideFill className="icon"/>Reports
                        </a>
                    </li>
            
                    <li className="sidebar_list_item block p-2 hover:bg-gray-500">
                        <a href="" className="flex items-center gap-2">
                            <BsGearFill className="icon"/>Settings
                        </a>
                    </li>
                </ul>

                <div className="space-y-1 sticky mt-auto border-t px-2 justify-end text-xs">
                    <div className="p-4 text-sm  block">Support</div>
                    <div className="p-4 text-sm  block">User Profile</div>
                    <div className="p-4 text-sm  block">Logout</div>
                </div>

                
        
             
            
        </aside>
    );
};

export default Sidebar;