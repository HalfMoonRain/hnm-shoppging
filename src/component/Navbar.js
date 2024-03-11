import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = ({ authenticate, setAuthenticate }) => {
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
  const goToLogout = () => {
    console.log(setAuthenticate());
    setAuthenticate(false);
    navigate("/");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어 읽어오기
      let keyword = event.target.value;
      // url 바꿔주기
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        {authenticate === false ? (
          <div class="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        ) : (
          <div class="login-button" onClick={goToLogout}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        )}
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
          <input type="text" onKeyDown={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
