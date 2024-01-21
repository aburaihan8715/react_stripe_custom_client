import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0">
      <nav className="flex justify-between h-[60px] bg-gray-700 items-center px-10 rounded ">
        <Link to={`/`}>logo</Link>
        <div>
          <ul>
            <li>
              <Link to={`/`}>home</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-3">
            <li>login</li>
            <li>logout</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
