import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
// import Context from '../utils/context';
import './UserProf.css'


export default function UserProf() {
    // const context = useContext(Context)

    // const Profile = (props) => {
    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25">
                                            <img src="https://i.pinimg.com/236x/e0/10/33/e0103395bedca2f42a6dc1cddf5c557e.jpg"
                                                className="img-radius" alt="User-Profile-Image" /> </div>
                                        <h6 className="f-w-600">Name</h6>
                                        <p>job</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Email</p>
                                                <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Phone</p>
                                                <h6 className="text-muted f-w-400">98979989898</h6>
                                            </div>
                                        </div>
                                        <footer className="panel-footer">
                                            <button className="btn btn-warning pull-right">Post</button>
                                            <ul className="nav nav-pills">
                                                <li>
                                                    <a href="https://www.google.com/maps/search/?api=1">
                                                        <RoomIcon style={{ color: "blue", fontSize: "x-large" }} stroke={"blue"}
                                                            stroke-width={1} /></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/">
                                                        <FacebookIcon style={{ color: "blue", fontSize: "x-large" }}
                                                            stroke={"blue"} stroke-width={1} /></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/">
                                                        <InstagramIcon style={{ color: "blue", fontSize: "x-large" }}
                                                            stroke={"blue"} stroke-width={1} /></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.twitter.com/">
                                                        <TwitterIcon style={{ color: "blue", fontSize: "x-large" }}
                                                            stroke={"blue"} stroke-width={1} /></a>
                                                </li>
                                            </ul>
                                        </footer>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Recent</p>
                                                <h6 className="text-muted f-w-400">Sam Disuja</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Most Viewed</p>
                                                <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                            </div>
                                        </div>
                                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                                                data-original-title="facebook" data-abc="true"><i
                                                    className="mdi mdi-facebook feather icon-facebook facebook"
                                                    aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                                                data-original-title="twitter" data-abc="true"><i
                                                    className="mdi mdi-twitter feather icon-twitter twitter"
                                                    aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                                                data-original-title="instagram" data-abc="true"><i
                                                    className="mdi mdi-instagram feather icon-instagram instagram"
                                                    aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// {/* <h1>{props.profile.profile.nickname}</h1>
// <br />
// <img src={props.profile.profile.picture} alt="" />
// <br />
// <h4> {props.profile.profile.email}</h4>
// <br />
// <h5> {props.profile.profile.name} </h5>
// <br />
// <h6> Email Verified: </h6>
// {props.profile.profile.email_verified ? <p>Yes</p> : <p>No</p>}
// <br /> */}

