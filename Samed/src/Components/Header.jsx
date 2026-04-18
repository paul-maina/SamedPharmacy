import { UserIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    
      <div className="fixed top-0 left-0 w-full z-50 shadow">
   
        <div className="bg-sky-700 text-white">
          <div className="flex justify-between items-center px-4 md:px-16 py-2 text-sm">
            <div>Free delivery within Mombasa</div>
            <div className="hidden md:flex gap-5">
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

       
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 sm:px-6 py-2 lg:px-16 gap-4">
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://i.imgur.com/prS4lTC.png"
                alt="logo"
                className="h-18 w-auto"
              />
            </Link>

            <form className="flex-1 mx-2">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full px-3 py-1.5 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </form>

            <ul className="flex gap-3 sm:gap-5 items-center">
              <li>
                <Link to="/cart" className="flex flex-col items-center cursor-pointer">
                  <ShoppingCartIcon className="w-5 h-5" />
                  <span className="text-xs sm:text-sm">Cart</span>
                </Link>
              </li>
              <li>
                <Link to="/Account" className="flex flex-col items-center cursor-pointer">
                  <UserIcon className="w-5 h-5" />
                  <span className="text-xs sm:text-sm">Login</span>
                </Link>
              </li>
            </ul>

            <button
              className="md:hidden ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

    
        {isOpen && (
          <div className="md:hidden bg-sky-700 text-white font-normal absolute left-0 right-0">
            <div className="px-4 py-3 space-y-2 border-b border-white/20">
              <Link to="/about" className="block">About Us</Link>
              <Link to="/services" className="block">Services</Link>
              <Link to="/blogs" className="block">Blogs</Link>
              <Link to="/contact" className="block">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;






/*<div className="dropdownMenu">
        <ul className="flex items-center gap-10 bg-sky-700 text-white p-4 font-normal">
          <li>
            <div className="flex items-center mx-16">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col gap-1 w-6 mr-4"
              >
                <span className="block h-0.5 w-full bg-white"></span>
                <span className="block h-0.5 w-full bg-white"></span>
                <span className="block h-0.5 w-full bg-white"></span>
              </button>
              <span>ALL CATEGORIES</span>
            </div>

            {isOpen && (
              <div className="absolute left-0 bg-sky-700 text-white rounded z-50 p-4 flex flex-col gap-y-2 mx-16">
                {[
                  {
                    name: "Medical Conditions",
                    subcategories: [
                      "Fever",
                      "Stomach Care Digestive health",
                      "Pain Reliefmanagement",
                      "Bone joint and muscle aches",
                      "Diabetes",
                      "Reproductive Health",
                      "Allergy Relief",
                      "HIV",
                      "Bacterial fungal Protozoal infections",
                      "Hypertension",
                      "Oral care"
                    ]
                  },
                  {
                    name: "Vitamins & Supplements",
                    subcategories: [
                      "Supplements",
                      "Health foods & drinks",
                      "Workout Essentials",
                      "Weight Management"
                    ]
                  },
                  {
                    name: "Beauty & Skin Care",
                    subcategories: [
                      "Hair care",
                      "Acne",
                      "Face care",
                      "Beard care"
                    ]
                  },
                  { name: "Personal Care & Hygiene", subcategories: [] },
                  { name: "First Aid & Emergency", subcategories: [] },
                  { name: "Medical Devices", subcategories: [] }
                ].map((category, index) => (
                  <div key={index} className="group relative">
                    <Link to="/" className="block hover:bg-gray-100 rounded">
                      {category.name}
                    </Link>
                    {category.subcategories.length > 0 && (
                      <ul className="hidden group-hover:block absolute left-full top-0 ml-1 bg-sky-700 shadow-lg rounded p-2 w-max">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to="/"
                              className="block hover:bg-sky-200 hover:text-black rounded"
                            >
                              {subcategory}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>

          <div className="">
            <Link to="/offers" className="hover:text-black">
              OFFERS
            </Link>
          </div>

          <div className="">
            <Link to="/submit prescription" className="hover:text-black">
              SUBMIT PRESCRIPTION
            </Link>
          </div>
        </ul>
        </div>*/