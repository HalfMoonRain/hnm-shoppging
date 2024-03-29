import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { faL } from "@fortawesome/free-solid-svg-icons";
import PrivateRoute from "./route/PrivateRoute";
// 1. 전체상품페이지, 로그인, 상품상세 페이지
// 1-1 네비게이션바 만들기
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 3. 상품디테일 을 눌렀으나 로그인이 안되있을 경우에는 로그인 페이지가 나온다
// 4. 로그인이 되어있으면 상품 디테일 페이지를 볼 수 있다.

// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
// 7. 상품을 검색 할 수 있다.
//  "server-start": "json-server --watch db.json --port 5000"

function App() {
  const [authenticate, setAuthenticate] = useState(false); // 로그인은 true

  useEffect(() => {
    console.log("Auth", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
