import { useState } from "react";
import { BarChart3, UserCircle, ChevronDown, ChevronRight, LayoutDashboard, Package, ShoppingCart, Users, Settings,  HelpCircle,
  LogOut } from "lucide-react";



const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
    title: "Products",
    icon: Package,
    children: [
      { title: "All Products", path: "/products/all" },
      { title: "Add Product", path: "/products/add" },
      { title: "Categories", path: "/products/categories" },
      { title: "Brands", path: "/products/brands" },
      { title: "Inventory", path: "/products/inventory" },
    ],
  },
  {
    title: "Customers",
    icon: Users,
    children: [
      { title: "All Customers", path: "/customers/all" },
      { title: "Customer Groups", path: "/customers/groups" },
      { title: "Feedback", path: "/customers/feedback" },
      { title: "Support Tickets", path: "/customers/support" },
    ],
  },
  {
    title: "Sales",
    icon: ShoppingCart,
    children: [
      { title: "Orders", path: "/sales/orders" },
      { title: "Transactions", path: "/sales/transactions" },
      { title: "Invoices", path: "/sales/invoices" },
      { title: "Discounts", path: "/sales/discounts" },
    ],
  },
  {
    title: "Reports",
    icon: BarChart3,
    children: [
      { title: "Sales Reports", path: "/reports/sales" },
      { title: "Customer Reports", path: "/reports/customers" },
      { title: "Inventory Reports", path: "/reports/inventory" },
      { title: "Revenue Analytics", path: "/reports/revenue" },
    ],
  },
    
];

function Sidebar () {

  const toggleMenu = (title) => {
  setOpenMenu((prev) =>
    prev[title] ? {} : { [title]: true }
  );
  };

    const [activePage, setActivePage]= useState("Dashboard");
    const [openMenu, setOpenMenu] = useState({})

  return(
        <div className="flex">
            <aside className="w-64 h-screen bg-black text-gray-300 flex flex-col overflow-y-auto ">

                <nav className="space-y-1">
                    <div className="p-2 m-4 flex flex-col items-center gap-3 ">
                      <UserCircle className="icon text-4xl "/>
                      <div className="font-bold text-xl text-blue-500">SamAdmin</div> 
                    </div>
                    
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const children = item.children;
                        const isOpen = openMenu[item.title];
                        
                        return(
                            <div key={item.title}>
                                <button 
                                 onClick={()=>{
                                    if (children){toggleMenu(item.title);}
                                    else {setActivePage(item.title);}
                                 }}   
                                 className="items-center flex w-full p-2 ml-4 hover:bg-gray-500 transition gap-3 cursor-pointer"
                                >
                                    <Icon className="w-4 h-4"/>
                                    <span> {item.title} </span>

                                  {children &&(isOpen ?(
                                    <ChevronDown className="w-5 h-5"/>)
                                  : (
                                    <ChevronRight className=""/>))}

                                </button>

                                {children && isOpen &&(
                                  <div className="space-y-1 ml-10" >
                                    {item.children.map((children) =>(
                                      <button className="block text-sm hover:bg-gray-500 cursor-pointer w-full p-2 text-left"
                                       key={children.title}
                                       onClick={() => setActivePage(children.title)}
                                      >
                                        {children.title}
                                      </button>
                                    ))}
                                  </div>

                                )}
                            </div>
                            
                        )    
                    })}
                </nav>

                <div className="border-t border-gray-700 mt-auto">
                  <button
                    onClick={() => setActivePage("Settings")}
                    className="flex items-center w-full p-2 hover:bg-gray-500 gap-3 cursor-pointer"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                    
                  </button>
                  <button
                    onClick={() => setActivePage("Help")}
                    className="flex items-center w-full p-2 hover:bg-gray-500 gap-3 cursor-pointer"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Help</span>
                    
                  </button>
                  <button
                    onClick={() => setActivePage("Logout")}
                    className="flex items-center w-full p-2 hover:bg-gray-500 gap-3 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                    
                  </button>
                </div>

            </aside>
            
            <main className="flex-1">
                <div className="">main</div>
            </main>
        </div>
    
    );
    };

export default Sidebar;