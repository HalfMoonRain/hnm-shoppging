import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const menuList = [
    "New",
    "All",
    "Season off",
    "Tops",
    "Tees",
    "Bottoms",
    "Accessories",
    "OAM",
  ];
  return (
    <div>
      <div>
        <div class="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div class="nav-section">
        <img
          width={100}
          src="https://ersco-official.com/SkinImg/logo.png"
        ></img>
      </div>
      <div class="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div class="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
