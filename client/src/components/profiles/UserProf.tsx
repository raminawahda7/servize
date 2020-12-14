import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
// import Context from '../utils/context';
import './ProviderProf.css'


export default function ProviderProf() {
    return (
        <div className="container bootstrap snippets bootdey">
            <div className="row">
                <div className="profile-nav col-md-3">
                    <div className="panel">
                        <div className="user-heading round">
                            <a href="#">
                                <img src="https://i.pinimg.com/236x/e0/10/33/e0103395bedca2f42a6dc1cddf5c557e.jpg" alt="img" className="img" />
                            </a>
                            <h1>Name</h1>
                        </div>
                        <ul className="nav nav-pills nav-stacked">
                            <li className="active"><a href="#"> <i className="fa fa-user"></i> Profile</a></li>
                            {/* <li><a href="#"> <i className="fa fa-calendar"></i> Recent Activity <span
                                className="label label-warning pull-right r-activity">9</span></a></li> */}
                            <li><a href="#"> <i className="fa fa-edit"></i> Edit profile</a></li>
                        </ul>
                        <footer className="panel-footer">
                            {/* <button className="btn btn-warning pull-right">Post</button> */}
                            <ul className="nav nav-pills">
                                <li>
                                    <a href="https://www.google.com/maps/search/?api=1"><RoomIcon style={{ color: "blue", fontSize: "x-large" }} stroke={"blue"} stroke-width={1} /></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" ><FacebookIcon style={{ color: "blue", fontSize: "x-large" }} stroke={"blue"} stroke-width={1} /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" ><InstagramIcon style={{ color: "blue", fontSize: "x-large" }} stroke={"blue"} stroke-width={1} /></a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" ><TwitterIcon style={{ color: "blue", fontSize: "x-large" }} stroke={"blue"} stroke-width={1} /></a>
                                </li>
                            </ul>
                        </footer>
                        <div className="panel-body bio-graph-info">
                            <h1>Deatils</h1>
                            <div className="row">
                                <div className="bio-row">
                                    <p><span>Name</span></p>
                                </div>
                                <div className="bio-row">
                                    <span>Email </span>
                                </div>
                                <div className="bio-row">
                                    <span>City </span>
                                </div>
                                <div className="bio-row">
                                    <span>Phone </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}