import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToText } from "../../actions/index";
import styles from "./Signup.module.css";
import axios from "axios";

function Signup({ clickSigninBtn, setIsSignUpClicked, clickCloseBtn }) {
  const [userinfo, setuserinfo] = useState({
    userId: "",
    userName: "",
    mobile: "",
    password: "",
    password2: "",
  });
  const { userId, userName, mobile, password, password2 } = userinfo;
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleTest = (e) => {
    addToText(e);
  };
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  const checkIdPass = (asValue) => {
    var regExp = /^[a-zA-z0-9]{4,12}$/;
    return regExp.test(asValue);
  };
  const checkmobile = (asValue) => {
    var regExp = /^[0-9]{9,11}$/;
    return regExp.test(asValue);
  };

  const handleSignup = () => {
    if (!userId || !userName || !mobile || !password || !password2) {
      setErrorMessage("모든 항목을 입력해주세요");
      return false;
    }
    if (password !== password2) {
      setErrorMessage("두 비밀번호가 같지 않습니다.");
      return false;
    }
    if (!checkmobile(mobile)) {
      setErrorMessage("휴대폰번호는 숫자만 입력해주세요");
      return false;
    }
    if (!checkIdPass(password)) {
      setErrorMessage("비밀번호는 4-12자리의 숫자,영문입니다.");
      return false;
    }
    if (!checkIdPass(userId)) {
      setErrorMessage("아이디는 4-12자리의 숫자,영문입니다.");
      return false;
    }
  };

  const signupreq = () => {
    const userData = {
      userId: userId,
      password: password,
      userName: userName,
      mobile: mobile,
      // signUpType:signUpType,
    };
    // http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/
    axios
      .post(
        "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/sign-up",
        userData,
        {
          "Content-Type": "application/json",
          // withCredentials: true,
        }
      )
      .then((result) => {
        // console.log(result.data);
        if (result.data.message === "ok") {
          clickCloseAll();

          history.push("/");
        }
      })
      .catch((err) => {
        setErrorMessage("사용중인 아이디입니다.");
      });
  };
  const clickCloseAll = () => {
    setIsSignUpClicked(false);
    clickCloseBtn();
  };
  const clickClose = () => {
    setIsSignUpClicked(false);
  };
  return (
    <div>
      <section className={styles.backdrop}>
        <div className={styles.popup}>
          <h1 className={styles.signup}>Sign Up</h1>
          <div className={styles.warningtext}>모든 항목은 필수입니다</div>
          <br />
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                className={styles.inputText}
                onChange={handleInputValue("userId")}
                placeholder="아이디"
              />
            </div>
            <div>
              <input
                type="password"
                className={styles.inputText}
                onChange={handleInputValue("password")}
                placeholder="비밀번호"
              />
            </div>
            <div>
              <input
                type="password"
                className={styles.inputText}
                onChange={handleInputValue("password2")}
                placeholder="비밀번호 확인"
              />
            </div>
            <div>
              <input
                type="text"
                className={styles.inputText}
                onChange={handleInputValue("userName")}
                placeholder="이름"
              />
            </div>
            <div>
              <input
                type="tel"
                className={styles.inputText}
                onChange={handleInputValue("mobile")}
                placeholder="전화번호"
              />
            </div>
            <div>
              <button className={styles.exit} onClick={clickClose}>
                이미 아이디가 있으신가요?
              </button>
            </div>
            <br />
            <button
              className={styles.btnsignup}
              type="submit"
              onClick={handleSignup}
            >
              회원가입
            </button>
            <br />
            <br />

            {errorMessage ? (
              <div className={styles.alert}>{errorMessage}</div>
            ) : null}
          </form>
        </div>
      </section>
    </div>
  );
}
export default Signup;
