import "./Header.css";
import React, { useEffect } from "react";
import logo from "../../Assets/images/logo.svg";
import home_icon from "../../Assets/images/home-icon.svg";
import movie_icon from "../../Assets/images/movie-icon.svg";
import search_icon from "../../Assets/images/search-icon.svg";
import watchlist_icon from "../../Assets/images/watchlist-icon.svg";
import originals_icon from "../../Assets/images/original-icon.svg";
import series_icon from "../../Assets/images/series-icon.svg";
import { auth, provider } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../../features/user/userSlice";
import Login from '../Login/Login'

const Header = (props) => {

  const dispatch=useDispatch();
   const history =useHistory();
  const userName =useSelector(selectUserName);
  const userPhoto=useSelector(selectUserPhoto);

  useEffect(()=>{
     auth.onAuthStateChanged(async(user)=>{
      if(user){
        setUser(user);
        history.push("/home");
           }
     })
  })



  const handleAuth = () => {
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
       setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  const setUser=(user)=>{
    dispatch(
      setUserLoginDetails(
        {
          name:user.displayName,
          email:user.email,
          photo:user.photoURL,

        }
      )
    )
  }

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {
        !userName?
        <div className="login">
      <button onClick={handleAuth}>LOGIN</button>
      </div>
        :
        <>
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
        <a>
          <img src={movie_icon} alt="" />
          <div className="hr">
            <span>MOVIES</span>
            <hr />
          </div>
        </a>
        <a>
          <img src={series_icon} alt="" />
          <div className="hr">
            <span>SERIES</span>
            <hr />
          </div>
        </a>
      </div>
      <div className="userprofile">
        <img src={userPhoto} alt="userPhoto" />
        {/* <p>{userName}</p> */}
      </div>
      </>
      }
      {/* <div className="login">
      <button onClick={handleAuth}>LOGIN</button>
      </div> */}
    </nav>
  );
};

export default Header;
