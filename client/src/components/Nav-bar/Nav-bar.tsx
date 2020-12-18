import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store, add } from '../../actions/Users/usersActions';
import { connect } from 'react-redux'
import { State } from '../../reducers/Users/usersReducer'
import { useTranslation } from "react-i18next";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RootStore } from '../../reducers/rootReducer';
import Button from "@material-ui/core/Button";
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import ProviderSignup from '../Provider-signup/Provider-signup'
import "./Nav-bar.css";
const axios = require('axios');
const $ = require('jquery');
// import Logout from '../Logout/Logout';


$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black");
    }
});

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const userInStore = useSelector((state: any) => state.user);
    // const serializedState: any = localStorage.getItem("state");
    // const userInStore = JSON.parse(serializedState) 
    const dispatch = useDispatch();
    // console.log("store ===> ", userInStore)
    // console.log("store ===> ", userInStore)

    // const handleClick = () => {
    //     $("#signup-form").show();
    // }

    const categ = () => {
        // axios.get(`http://localhost:8000/category/`)

        //     .then((result: any) => {
        //         console.log("axios", result.data)
        //         // dispatch(store(result.data))
        //         props.store(true)

        //     })
        //     .catch((err: any) => {
        //         console.error("err===== =>", err);
        //     })

        // props.store(["test","123",542]);
        dispatch(add("yasir", "yasir123@gmail.com"))
        console.log("store ===> ", userInStore)

    }

    return (
        <header id="nav-bar">
            <nav>
                <div className="menu-icon">
                    <i className="fa fa-bars fa-2x"></i>
                </div>
                <div className="logo">
                    <Link to="/">{t("app_name")}</Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">{t("how_it_works")}</a></li>
                        <li onClick={categ}><a href="#">Browse Jobs</a></li>
                        {/* <li><a href="#">Language</a></li> */}
                        <li><Link to="/prov/signup">Become a Service Provider</Link></li>
                        <li><Link to="/user/login">{t("log_in")}</Link></li>
                        <li><Link to="/user/signup">{t("join")}</Link></li>
                        {/* <li onClick={handleClick}> <a href="#">Join</a></li> */}
                    </ul>
                    <div className="select">
                        <select
                            value={i18n.language}
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                        >
                            <option value="en">English</option>
                            <option value="ar">عربي</option>
                        </select>
                    </div>
                </div>
            </nav>
              
        </header>

    )
    // }
    // export default Navbar;
    //   return (
    //     <header id="nav-bar">
    //       <nav>
    //         <div className="menu-icon">
    //           <i className="fa fa-bars fa-2x"></i>
    //         </div>
    //         <div className="logo">
    //           <Link to="/">Servize</Link>
    //         </div>
    //         <div className="menu">
    //           <ul>
    //             <li>
    //               <a href="#">How it Works</a>
    //             </li>
    //             <li>
    //               <a href="#">Browse Jobs</a>
    //             </li>
    //             <li>
    //               <a href="#">Language</a>
    //             </li>
    //             <li>
    //               <Link to="/prov/signup">Become a Service Provider</Link>
    //             </li>
    //             <li>
    //               <Link to="/user/login">Log In</Link>
    //             </li>
    //             <li>
    //               <Link to="/user/signup">Join</Link>
    //             </li>
    //             <li>
    //               <Button
    //                 onClick={() => {
    //                   localStorage.clear();
    //                   window.location.href = "/";
    //                 }}
    //                 id="logout"
    //               >
    //                 Logout
    //               </Button>
    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //     </header>
    //   );
}

export default Navbar;
