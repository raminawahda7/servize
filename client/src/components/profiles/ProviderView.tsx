import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
// import Context from '../utils/context';
import './ProviderProf.css'


export default function ProviderView() {
    // const context = useContext(Context)

    // const Profile = (props) => {
    return (
        <div className="container bootstrap snippets bootdey">
            <div className="row">
                <div className="profile-nav col-md-3">
                    <div className="panel">
                        <div className="user-heading round">
                            <a href="#">
                                <img src="https://i.pinimg.com/236x/4d/25/5f/4d255fadc15c380d8b03c7ef25a4c97b.jpg" alt="img" className="img" />
                            </a>
                            <h1>Name</h1>
                        </div>

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
                                    <span>Occupation </span>
                                </div>
                                <div className="bio-row">
                                    <span>City </span>
                                </div>
                                <div className="bio-row">
                                    <span>Area </span>
                                </div>
                                <div className="bio-row">
                                    <span>Phone </span>
                                </div>
                            </div>
                        </div>
                        <div>
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
                        </div>
                        <div className="bio-desk">
                            <h4 className="purple"></h4>
                            <p>Started : </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}    