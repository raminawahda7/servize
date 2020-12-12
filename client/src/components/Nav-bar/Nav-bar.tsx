import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Nav-bar.css';
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
    return (
        <header id="nav-bar">
            <nav>
                <div className="menu-icon">
                    <i className="fa fa-bars fa-2x"></i>
                </div>
                <div className="logo">
                    <a href="#">Servize</a>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">How it Works</a></li>
                        <li><a href="#">Browse Jobs</a></li>
                        <li><a href="#">Language</a></li>
                        <li><a href="#">Become a Seller</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><Link to="/user/forgot-password">Join</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
        // <nav className="navbar navbar-expand-lg navbar-dark indigo">
        //     <a className="navbar-brand" href="#">Navbar w/ text</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        //         aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarText">
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">Home
        //     <span className="sr-only">(current)</span>
        //                 </a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Features</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Pricing</a>
        //             </li>
        //         </ul>
        //         <span className="navbar-text white-text">
        //             Navbar text with an inline element
        //     </span>
        //     </div>
        // </nav>
    )
}
export default Navbar;