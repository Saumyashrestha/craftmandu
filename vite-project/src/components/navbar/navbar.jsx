import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };
  const cartItems = useSelector((state) => state.cart);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSettingsDropdown = () => setSettingsDropdownOpen(!settingsDropdownOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleSaveChanges = () => {
    alert(`Saving changes for Name: ${newName}, Email: ${newEmail}`);
    toggleModal();
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem("users");
    setIsDeleteModalOpen(false);
    navigate("/signup");
  };

  const navListLeft = (
    <ul className="flex flex-col lg:flex-row lg:space-x-10 text-black font-medium text-md">
      <li>
        <Link to={"/"} className="hover:text-[#dd3333]">
          Home
        </Link>
      </li>
      {!user && (
        <>
          <li>
            <Link to={"/signup"} className="hover:text-[#dd3333]">
              Signup
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="hover:text-[#dd3333]">
              Login
            </Link>
          </li>
        </>
      )}
      <li>
        <Link to={"/aboutus"} className="hover:text-[#dd3333]">
          About
        </Link>
      </li>
    </ul>
  );

  const navListRight = (
    <ul className="flex flex-col lg:flex-row lg:space-x-10 text-black font-medium text-md">
      {user && (
        <li className="relative cursor-pointer">
          <i
            className="fas fa-user-circle text-2xl hover:text-[#dd3333]"
            onClick={toggleDropdown}
          ></i>
          {dropdownOpen && (
            <ul className="absolute top-12 left-0 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-32 text-md">
              <li>
                <Link
                  to={user.role === "admin" ? "/admin-dashboard" : "/user-dashboard"}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </Link>
              </li>
              <li>
                <span
                  onClick={toggleSettingsDropdown}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                >
                  Settings
                </span>
                {settingsDropdownOpen && (
                  <ul className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-md w-32">
                    <li>
                      <span
                        onClick={toggleModal}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                      >
                        Edit Profile
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={toggleDeleteModal}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                      >
                        Delete Account
                      </span>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={logout} className="cursor-pointer">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Logout
                </span>
              </li>
            </ul>
          )}
        </li>
      )}
      <li>
        <Link to={"/cart"} className="hover:text-[#dd3333]">
          <i className="fas fa-shopping-cart text-2xl">
            <span className="text-xs">({cartItems.length})</span>
          </i>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-white sticky top-0 shadow-md z-50">
      <div className="flex justify-between items-center py-3 px-5 lg:px-10">
        <Link to={"/"}>
          <img
            src="/public/rslogo.png"
            alt="Logo"
            className="h-12"
          />
        </Link>
        <button className="lg:hidden text-2xl" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="hidden lg:flex items-center space-x-12">
          {navListLeft}
          <SearchBar />
          {navListRight}
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden px-5 py-3 space-y-2 bg-white">
          {navListLeft}
          <SearchBar />
          {navListRight}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
