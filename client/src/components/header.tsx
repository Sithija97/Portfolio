import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { HOME, ISSUES } from "../routes";
import { IoSearch } from "react-icons/io5";
import { Avatar, ProfileMenu } from ".";
import { useState } from "react";
import { RootState, useAppSelector } from "../store/store";

export const Header = () => {
  const navigate = useNavigate();

  const user = useAppSelector((state: RootState) => state.store.auth.user);

  const navigateToHome = () => navigate(HOME);

  const navigateToIssues = () => navigate(ISSUES);

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
        <h3
          className="pl-3 text-sm font-medium cursor-pointer"
          onClick={navigateToIssues}
        >
          Issues
        </h3>
      </div>

      {/* right */}
      <div onClick={handleProfileMenu}>
        <Avatar
          styles="w-10 rounded-full block cursor-pointer relative"
          src={user?.photo}
        />
      </div>

      {diplayProfileMenu && <ProfileMenu />}
    </nav>
  );
};
