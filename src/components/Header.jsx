import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { HAMBURGER_ICON, YOUTUBE_LOGO, USER_ICON } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src={HAMBURGER_ICON}
          alt="menu"
        />
        <img
          className="h-10 cursor-pointer rounded-sm mx-2"
          src={YOUTUBE_LOGO}
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10">
        <input
          type="text"
          placeholder="🔍  Search"
          className="border border-gray-400 w-1/2 ml-[15%] px-5 py-2 text-start rounded-l-full focus:border-blue-700 focus:border-1 outline-none"
        ></input>
        <button className="border border-l-0 border-gray-400 px-5 py-2 cursor-pointer rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          src={USER_ICON}
          className="h-10 px-4 cursor-pointer"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
