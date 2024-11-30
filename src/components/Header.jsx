import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cachedResults } from '../utils/searchSlice';
import {
  HAMBURGER_ICON,
  YOUTUBE_LOGO,
  USER_ICON,
  YOUTUBE_SEARCH_API,
} from '../utils/constants';
import { useEffect, useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchcache = useSelector((store) => store.search);

  const getSearchSuggestions = async () => {
    console.log("API Call", searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  };

  /**
   * Search cache
   * 
   * {
   *    "iphone": ["iphone 11", "iphone 12"]
   * }
   *
   */
  useEffect(() => {
    // API Call
    // make an api call after every key press
    // but if the difference between two api calls is <200ms
    // decline the api call
    const timer = setTimeout(() => {
      if (searchQuery) {
        if (searchcache[searchQuery]) {
          setSuggestions(searchcache[searchQuery]);
        } else {
          getSearchSuggestions();
        }
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make an api after 200ms
   *
   * key - ip
   * - destroy the component (call useEffect return method)
   * - render the component
   * - useEffect()
   * - start new timer => make an api after 200ms
   *
   *
   * setTimeout(200) -> declines or clear the timer if key is pressed in less than 200ms
   *
   * new timer setTimeout(200) -> makes an api call
   */
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
        <div>
          <input
            type="text"
            placeholder="🔍  Search"
            className="border border-gray-400 w-1/2 ml-[15%] px-5 py-2 text-start rounded-l-full focus:border-blue-700 focus:border-1 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="border border-l-0 border-gray-400 px-5 py-2 cursor-pointer rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white ml-[10.5rem] w-[500px] py-2 px-2 rounded-sm shadow-lg border-gray-100 ">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="py-1 px-3 shadow-sm hover:bg-gray-200"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
