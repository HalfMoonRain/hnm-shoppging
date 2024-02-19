import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>
        <div class="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div class="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
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
