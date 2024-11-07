import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  //cartItems
  const cartItems = useSelector((state) => state.cart);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // toggle functions
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSettingsDropdown = () =>
    setSettingsDropdownOpen(!settingsDropdownOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  const handleSaveChanges = () => {
    // Handle save changes logic here
    alert(`Saving changes for Name: ${newName}, Email: ${newEmail}`);
    toggleModal(); // Close the modal after saving
  };

  const handleDeleteAccount = () => {
    // Insert your delete account logic here, such as API call or localStorage cleanup
    localStorage.removeItem("users");
    setIsDeleteModalOpen(false); // Close delete confirmation modal
    navigate("/signup"); // Redirect after account deletion
  };

  // navList Data
  const navListLeft = (
    <ul className="flex space-x-10 text-black font-medium text-md ">
      {/* Home */}
      <li>
        <Link to={"/"} className=" hover:text-[#dd3333]">
          Home
        </Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/signup"} className=" hover:text-[#dd3333]">
            Signup
          </Link>
        </li>
      ) : (
        ""
      )}

      {/* Login */}
      {!user ? (
        <li>
          <Link to={"/login"} className=" hover:text-[#dd3333]">
            Login
          </Link>
        </li>
      ) : (
        ""
      )}

      {/* About */}
      <li>
        <Link to={"/aboutus"} className=" hover:text-[#dd3333]">
          About
        </Link>
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
            <ul className="absolute top-12 left-0 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-32 text-md">
              <li>
                <Link
                  to={
                    user.role === "admin"
                      ? "/admin-dashboard"
                      : "/user-dashboard"
                  }
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </Link>
              </li>
              <li className="relative">
                <span
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex justify-between items-center cursor-pointer"
                  onClick={toggleSettingsDropdown}
                >
                  Settings
                  <i className="fas fa-chevron-right ml-2"></i>
                </span>
                {settingsDropdownOpen && (
                  <ul className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-md w-32 text-md">
                    <li>
                      <span
                        onClick={toggleModal}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                      >
                        Edit Profile
                      </span>
                    </li>
                    <hr className="border-t border-gray-300 my-1" />
                    <li>
                      <span
                        onClick={toggleDeleteModal}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                      >
                        Delete Account
                      </span>{" "}
                    </li>
                  </ul>
                )}
              </li>
              <hr className="border-t border-gray-300 my-1" />
              <li className="cursor-pointer" onClick={logout}>
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Logout
                </span>
              </li>
            </ul>
          )}
        </li>
      )}

      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"} className="hover:text-[#dd3333]">
            <i className="fas fa-user-circle text-2xl"></i>
          </Link>
        </li>
      )}

      {/* Cart */}
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
    <nav className=" bg-white sticky top-0 shadow-md z-50">
      {/* main  */}
      <div className="playfair lg:flex lg:justify-between items-center py-3 lg:px-10 ">
        {/* left side (Logo and Left Links) */}
        <div className="flex items-center space-x-12">
          <Link to={"/"}>
            <img
              src="/public/rslogo.png"
              alt="RS Craftmandu Logo"
              className="sm:mb-5 md:mb-5 lg:mb-0 h-12" // Adjust the height as needed
            />
          </Link>
          <div className="sm: mb-5 md:mb-5 lg:mb-0">
            {" "}
            {/* Added margin-left to create space between logo and nav links */}
            {navListLeft}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-start ml-2 lg:mx-10 ">
          <SearchBar />
          <div className="flex items-center ml-2  space-x-10 flex-row">
            {navListRight}
            <div className="flex-none">{/* Cart icon */}</div>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-[#f9f9f9] border-2 border-[#dd3333] shadow-md rounded-lg w-1/3 p-6">
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
              <h2 className="text-2xl font-semibold text-center text-[#dd3333] mb-6">
                Edit Your Profile
              </h2>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-[#dd3333] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your New Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full p-2 border border-[#dd3333] shadow-md rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-[#dd3333] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your New E-mail"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full p-2 border border-[#dd3333] shadow-md rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <button
                  className="w-full py-3 bg-[#dd3333] text-white rounded-md font-semibold hover:bg-[#ff4444]"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Delete Account Confirmation Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-[#f9f9f9] border-2 border-[#dd3333] shadow-md rounded-lg w-1/3 p-6">
              {/* Close (Cross) Icon */}
              <button
                onClick={toggleDeleteModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
              <h2 className="text-2xl font-semibold text-center text-[#dd3333] mb-6">
                Delete Your Account?
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Are you sure you want to delete your account? This action cannot
                be undone.
              </p>
              <div className="flex justify-around">
                {/* Delete Button */}
                <button
                  onClick={handleDeleteAccount}
                  className="px-4 py-2 bg-[#dd3333] text-white rounded-md font-semibold hover:bg-[#ff4444]"
                >
                  Delete
                </button>
                {/* Cancel Button */}
                <button
                  onClick={toggleDeleteModal}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-semibold hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
