import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import Logo from '../assets/Logo.png'
const Navbar = () => {
  const [showmodal, setShowModal] = useState(true);
  const { logOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const hendleLogout = () => {
    logOutUser()
      .then(() => {
        navigate('/');
        toast.success('Logout successfully');
        setShowModal(true)
      })
      .catch(() => {});
  };

  const Links = (
    <>
      <li>
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-recipe" className="font-medium">
          All Recipe
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-recipe" className={`${user? 'block': 'hidden'} font-medium`}>
          Add Recipe
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-recipe" className={`${user? 'block': 'hidden'} font-medium`}>
          My Recipe
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  bg-white/1 backdrop-blur-sm border-b border-gray-100 justify-between max-w-[1350px] mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-20 "
          >
            {Links}
            <Link
            to="/register"
            className="bg-primary hover:bg-secondary text-white font-bold py-1.5 px-4 rounded-md sm:hidden flex"
          >
            Register
          </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-1">
          <img
            className="w-8"
            src={Logo}
            alt=""
          />
          <h1 className="sm:text-2xl text-xl font-extrabold w-40">Recipe<span className="text-primary">Book</span></h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="md:navbar-end flex relative ">
          <Link
            to="/login"
            className="bg-primary hover:bg-secondary text-white font-bold py-1.5 px-4 rounded-md"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-primary hover:bg-secondary text-white font-bold py-1.5 px-4 rounded-md ml-4 hidden sm:flex"
          >
            Register
          </Link>
    
        {user && (
          <>
            <div onClick={() => setShowModal(!showmodal)}>
              <img
                className="h-10 w-10 bg-base-300 rounded-full ml-5 border border-primary"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div
              className={`${
                showmodal ? "hidden" : "block"
              } border absolute top-12 right-0 w-60 bg-base-100  border-gray-200  py-5 px-3 text-center rounded-2xl shadow-xl z-100`}
            >
              <h1 className="mb-3 text-2xl font-bold">{user?.displayName}</h1>
              <button onClick={hendleLogout} className="btn btn-primary rounded-md border-none mt-4">
                Log Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;