import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../../pages/Signup/Signup";
import Signin from "../Signin/Signin";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isSigninClicked, setIsSigninClicked] = useState(false);
  const [BtnStatus, setBtnStatus] = useState(false);
  const [ScrollY, setScrollY] = useState(0);
  const clickSigninBtn = () => {
    setIsSigninClicked(!isSigninClicked);
  };

  const clickCloseBtn = () => {
    setIsSigninClicked(false);
  };

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  return (
    <div>
      <div id="nav-body">
        <span id="title">
          <img id="logo" src="" alt=""></img>
          <span id="name">
            <Link to="/" id="name1">
              aroundbestR
            </Link>
          </span>
        </span>
        <div className="menu">
          {isSigninClicked ? (
            <Signin
              clickSigninBtn={clickSigninBtn}
              clickCloseBtn={clickCloseBtn}
              setIsSigninClicked={setIsSigninClicked}
            />
          ) : null}
          <button id="menu1" onClick={clickSigninBtn}>
            Sign In
          </button>
          <Link to="/mypage" id="menu2">
            mypage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
//로그인은 모달창 띄우기
//마이페이지 링크로 구현
