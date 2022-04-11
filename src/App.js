import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Mypage from "./pages/Mypage";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import PlusButton from "./components/ScrollButton/PlusButton";
import Writing from "./pages/writing/Writing";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/mypage" exact>
            <Mypage />
          </Route>
          <Route path="/login" exact>
            <Signup />
          </Route>
          <Route path="/writing">
            <Writing />
          </Route>
        </Switch>
        <PlusButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
