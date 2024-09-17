import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector } from "react-redux";

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
        <ul className="flex space-x-10 text-black font-medium text-md ">
            {/* Profile */}

             {/* logout */}
             {user && <li className=" cursor-pointer" onClick={logout}>
             <i className=" fas fa-sign-out-alt text-2xl hover:text-[#dd3333]"></i>
            </li>}


            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'} className="hover:text-[#dd3333]">
                <i className="fas fa-user-circle text-2xl"></i>
                </Link>
            </li>}

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
                        <h2 className="sm: mb-5 md: mb-5 lg:mb-0  font-bold text-[#dd3333] text-2xl">RS Craftmandu</h2>
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