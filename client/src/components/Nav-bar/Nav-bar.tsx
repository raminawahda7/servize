import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../actions/Users/usersActions';
import './Nav-bar.css';
const axios = require('axios');
const $ = require('jquery');


$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
})

const Navbar = () => {
    const userInStore = useSelector((state: any) => state.user);
    // const serializedState: any = localStorage.getItem("state");
    // const userInStore = JSON.parse(serializedState) 
    const dispatch = useDispatch();
    // console.log("store ===> ", userInStore)

    const handleClick = () => {
        $("#signup-form").show();
    }

    const categ = () => {
        axios.get(`http://localhost:8000/category/`)

            .then((result: any) => {
                console.log("axios", result.data)
                dispatch(store(result.data))

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })

    }

    return (
        <header id="nav-bar">
            <nav>
                <div className="menu-icon">
                    <i className="fa fa-bars fa-2x"></i>
                </div>
                <div className="logo">
                    <Link to="/">Servize</Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">How it Works</a></li>
                        <li onClick={categ}><a href="#">Browse Jobs</a></li>
                        <li><a href="#">Language</a></li>
                        <li><Link to="/prov/signup">Become a Service Provider</Link></li>
                        <li><Link to="/user/login">Log In</Link></li>
                        {/* <li><Link to="/user/signup">Join</Link></li> */}
                        <li onClick={handleClick}> <a href="#">Join</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        
    )
}
export default Navbar;