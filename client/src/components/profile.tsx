import { IoIosArrowForward } from "react-icons/io";
import { Avatar } from ".";
import { RiLogoutBoxFill } from "react-icons/ri";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
  persistor,
} from "../store/store";
import { logout } from "../store/auth/authslice";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../routes";

export const ProfileMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state: RootState) => state.auth.user);

  const navigateToProfile = () => {};

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    navigate(LOGIN);
  };

  return (
    <div className="absolute top-[100%] right-[5%] w-80 z-50">
      <div className="bg-white shadow-lg rounded-lg p-5 m-2.5">
        <div className="flex items-center">
          <Avatar styles="w-12 rounded-full mr-4" src={user?.photo} />
          <div>
            <h3 className="text-sm font-medium -mb-2">Sithija Shehara</h3>
            <span
              className="text-purple-700 text-xs cursor-pointer"
              onClick={navigateToProfile}
            >
              See your profile
            </span>
          </div>
        </div>
        <hr className="mt-4 mb-2.5" />

        <span
          className="flex items-center my-3 cursor-pointer"
          onClick={handleLogout}
        >
          <RiLogoutBoxFill fill="gray" size={20} className="mr-3" />
          <p className="text-sm w-full">Logout</p>
          <span className="w-8 hover:bg-slate-100 p-2 rounded-full">
            <IoIosArrowForward size={12} />
          </span>
        </span>
      </div>
    </div>
  );
};
