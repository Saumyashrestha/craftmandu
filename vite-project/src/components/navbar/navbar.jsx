import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {

    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    //cartItems
    const cartItems = useSelector((state) => state.cart);
    
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // toggle dropdown
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // navList Data
    const navListLeft = (
        <ul className="flex space-x-10 text-black font-medium text-md ">
            {/* Home */}
            <li>
                <Link to={'/'} className=" hover:text-[#dd3333]">Home</Link>
            </li>

             {/* Signup */}
             {!user ? <li>
                <Link to={'/signup'} className=" hover:text-[#dd3333]">Signup</Link>
            </li> : ""}

             {/* Login */}
             {!user ? <li>
                <Link to={'/login'} className=" hover:text-[#dd3333]">Login</Link>
            </li> : ""}


            {/* About */}
            <li>
                <Link to={'/aboutus'} className=" hover:text-[#dd3333]">About</Link>
            </li>
        </ul>
    );

    const navListRight = (
        <ul className="flex space-x-10 text-black font-medium text-md relative">
            {/* Profile */}
            {user && (
                 <li className="relative cursor-pointer">
                 <i 
                     className="fas fa-user-circle text-2xl hover:text-[#dd3333]" 
                     onClick={toggleDropdown}
                 ></i>
                 {dropdownOpen && (
                     <ul className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-40 text-md">
                         <li>
                             <Link to={'/profile'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                         </li>
                         <li>
                             <Link to={'/settings'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</Link>
                         </li>
                         <hr className="border-t border-gray-300 my-1" />
                         <li className="cursor-pointer" onClick={logout}>
                             <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</span>
                         </li>
                     </ul>
                 )}
             </li>
            )}


            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'} className="hover:text-[#dd3333]">
                <i className="fas fa-user-circle text-2xl"></i>
                </Link>
            </li>} 

            {/* Cart */}
            <li>
                <Link to={'/cart'} className="hover:text-[#dd3333]">
                <i className="fas fa-shopping-cart text-2xl"><span className="text-xs">({cartItems.length})</span></i>
                </Link>
            </li>

        </ul>
    );

    return (
        <nav className=" bg-white sticky top-0 shadow-md z-50">
            {/* main  */}
            <div className="playfair lg:flex lg:justify-between items-center py-3 lg:px-10 ">
                {/* left side (Logo and Left Links) */}
                <div className="flex items-center space-x-12">
                    <Link to={'/'}>
                    <img 
      src="/public/rslogo.png" 
      alt="RS Craftmandu Logo" 
      className="sm:mb-5 md:mb-5 lg:mb-0 h-12" // Adjust the height as needed
    />
                    </Link>
                    <div className="sm: mb-5 md:mb-5 lg:mb-0"> {/* Added margin-left to create space between logo and nav links */}
                        {navListLeft}
                    </div>
                </div>
                    
                    {/* Search Bar */}
                    <div className="flex justify-start ml-2 lg:mx-10 ">
                        <SearchBar />
                        <div className="flex items-center ml-2  space-x-10 flex-row">
                            {navListRight}
                            <div className="flex-none">
                                {/* Cart icon */}
                            </div>
                        </div>
                    </div>
              
            </div>
        </nav>
    );
}

export default Navbar;