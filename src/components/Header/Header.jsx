import "./Header.css";
import React from "react";
import logo from "../../Assets/images/logo.svg";
import home_icon from "../../Assets/images/home-icon.svg";
import movie_icon from "../../Assets/images/movie-icon.svg";
import search_icon from "../../Assets/images/search-icon.svg";
import watchlist_icon from "../../Assets/images/watchlist-icon.svg";
import originals_icon from "../../Assets/images/original-icon.svg";
import series_icon from "../../Assets/images/series-icon.svg";
import { auth, provider } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";

const Header = () => {

const handleAuth=()=>{
  provider.setCustomParameters({ prompt: 'select_account' });
  signInWithPopup(auth,provider).then((result)=>{
    console.log(result)
  }).catch((error)=>{
    alert(error.message)
  });
};

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navMenu">
        <a href="/home">
          <img src={home_icon} alt="" />
          <div className="hr">
            <span>HOME</span>
            <hr />
          </div>
        </a>
        <a>
          <img src={search_icon} alt="" />
          <div className="hr">
            <span>SEARCH</span>
            <hr />
          </div>
        </a>
        <a>
          <img src={watchlist_icon} alt="" />
          <div className="hr">
            <span>WATCHLIST</span>
            <hr />
          </div>
        </a>
        <a>
          <img src={originals_icon} alt="" />
          <div className="hr">
            <span>ORIGINALS</span>
            <hr />
          </div>
        </a>
        <a >
          <img src={movie_icon} alt="" />
          <div className="hr">
            <span>MOVIES</span>
            <hr />
          </div>
        </a>
        <a >
          <img src={series_icon} alt="" />
          <div className="hr">
            <span>SERIES</span>
            <hr />
          </div>
        </a>
      </div>
      <div className="login">
        <button onClick={handleAuth}>LOGIN</button>
      </div>
    </nav>
  );
};

export default Header;
