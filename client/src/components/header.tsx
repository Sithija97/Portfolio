import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { HOME } from "../routes";
import { IoSearch } from "react-icons/io5";
import { Avatar, ProfileMenu } from ".";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate(HOME);

  const [diplayProfileMenu, setDiplayProfileMenu] = useState<boolean>(false);

  const handleProfileMenu = () => setDiplayProfileMenu(!diplayProfileMenu);

  return (
    <nav className="flex items-center justify-between bg-white py-1.5 px-[6%] z-49 relative top-0 w-full">
      {/* left */}
      <div className="flex items-center w-full">
        <img
          src={logo}
          alt="linkedin logo"
          className="w-8 h-8 mr-2 block"
          onClick={navigateToHome}
        />
        <form
          action=""
          className="flex items-center px-3 h-8 rounded-md w-[280px] bg-slate-100"
        >
          <IoSearch className="w-5 h-5  text-gray-600" />
          <input
            type="text"
            className="text-sm p-1 pl-2 pr-0 block focus:outline-none w-full text-gray-400 bg-slate-100"
            placeholder="Search"
          />
        </form>
      </div>

      {/* right */}
      <div onClick={handleProfileMenu}>
        <Avatar styles="w-10 rounded-full block cursor-pointer relative" />
      </div>

      {diplayProfileMenu && <ProfileMenu />}
    </nav>
  );
};
