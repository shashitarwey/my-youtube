import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="p-5 shadow-lg w-48 h-screen">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="mt-1">Sports</li>
          <li className="mt-1">Videos</li>
          <li className="mt-1">Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscription</h1>
        <ul className="pt-2">
          <li className="mt-1">Music</li>
          <li className="mt-1">Sports</li>
          <li className="mt-1">Gaming</li>
          <li className="mt-1">Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul className="pt-2">
          <li className="mt-1">Music</li>
          <li className="mt-1">Sports</li>
          <li className="mt-1">Gaming</li>
          <li className="mt-1">Movies</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
