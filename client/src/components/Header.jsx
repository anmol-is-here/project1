import React from "react";
import { Link } from "react-router-dom";
import { TbHomeSearch } from "react-icons/tb";
import { useSelector } from "react-redux";

const Header = () => {
  const {currentUser}  = useSelector((state) => state.user);
  if (currentUser) {
    console.log(currentUser);
  }
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-4xl flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search Property"
            className="bg-transparent w-24 sm:w-64 focus:outline-none"
          />
          <TbHomeSearch size={25} className="text-slate-600 " />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-slate-700 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-slate-700 hover:underline">About</li>
          </Link>{" "}
          <Link to="/profile">
            {currentUser ? (
              <img src={currentUser.avatar} alt="User Avatar" className="h-7 w-7 rounded-full " />
            ) : (
              <li className="text-slate-700 hover:underline">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
