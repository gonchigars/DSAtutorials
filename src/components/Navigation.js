import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/intro" className="text-blue-600 hover:underline">
            Introduction
          </Link>
        </li>
        <li>
          <Link to="/music-playlist" className="text-blue-600 hover:underline">
            Music Playlist
          </Link>
        </li>
        <li>
          <Link to="/other-examples" className="text-blue-600 hover:underline">
            Other Examples
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
