import { UserIcon,EnvelopeIcon,LockClosedIcon  } from "@heroicons/react/24/outline";
import { useState } from "react";

function Account(){

const [action, setAction]=useState("Login")

    return(
        <div className="container min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
            
            <div className="Header text-2xl font-bold mb-6">
                <div className="text">{action}</div>
            </div>

            <div className="inputs w-full max-w-sm space-y-4">
                
                <div className="input flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
                    <UserIcon className="w-5 h-5 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="px-4 w-full outline-none"
                    />
                </div>

                <div className="input flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="px-4 w-full outline-none"
                    />
                </div>

                <div className="input flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
                    <LockClosedIcon className="w-5 h-5 text-gray-400" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="px-4 w-full outline-none"
                    />
                </div>

            </div>

            <div className="forgot_password text-sm text-blue-500 mt-3 cursor-pointer hover:underline ">
                Forgot Password?
            </div>

            <div className="Submit flex gap-4 mt-6 w-full max-w-sm">
                <button className={action==="Sign Up"? "submit"
                    :"w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"} 
                   onClick={() => setAction("Sign Up")}>
                    Sign Up
                </button>
                <button className={action==="Login"?"submit" 
                    :"w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition cursor-pointer"}
                   onClick={() => setAction("Login")}>
                   Login
                </button>
            </div>
                
        </div>
    );
}

export default Account;

/*

<form action="">
      <h>Login<h>
    <div className="input flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">

                <div className="input flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                    <input 
                        type="email" 
                        placeholder="Email" required
                        className="px-4 w-full outline-none"
                    />
                </div>

                <div className="input flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
                    <LockClosedIcon className="w-5 h-5 text-gray-400" />
                    <input 
                        type="password" 
                        placeholder="Password" required
                        className="px-4 w-full outline-none"
                    />
                </div>

            </div>

            <div className="forgot_password text-sm text-blue-500 mt-3 cursor-pointer hover:underline ">
                Forgot Password?
</form>


*/