import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    // navList Data
    const navListLeft = (
        <ul className="flex space-x-10 text-black font-medium text-md ">
            {/* Home */}
            <li>
                <Link to={'/'} className="hover:text-[#dd3333]">Home</Link>
            </li>

            {/* Contact */}
            <li>
                <Link to={'/allproduct'} className="hover:text-[#dd3333]">Contact</Link>
            </li>

            {/* About */}
            <li>
                <Link to={'/signup'} className="hover:text-[#dd3333]">About</Link>
            </li>
        </ul>
    );

    const navListRight = (
        <ul className="flex space-x-10 text-black font-medium text-md ">
            {/* Profile */}
            <li>
                <Link to={'/user-dashboard'} className="hover:text-[#dd3333]">
                <i className="fas fa-user-circle text-2xl"></i>
                </Link>
            </li>

            {/* Cart */}
            <li>
                <Link to={'/cart'} className="hover:text-[#dd3333]">
                <i className="fas fa-shopping-cart text-2xl"></i>
                </Link>
            </li>

            <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gray-300 sticky top-0 shadow-md">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-10 ">
                {/* left side (Logo and Left Links) */}
                <div className="flex items-center space-x-12">
                    <Link to={'/'}>
                        <h2 className="font-bold text-dd3333 text-2xl">RS Craftmandu</h2>
                    </Link>
                    <div> {/* Added margin-left to create space between logo and nav links */}
                        {navListLeft}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex-grow flex-justify-center lg:justify-start lg:mx-10">
                    <SearchBar />
                </div>

                {/* right side (Profile and Cart) */}
                <div className="flex items-center space-x-10">
                    {navListRight}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;