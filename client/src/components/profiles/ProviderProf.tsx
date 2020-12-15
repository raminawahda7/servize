import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
import StarRating from '../rates/StarRate';
// import Context from '../utils/context';
import './ProviderProf.css'


export default function ProviderProf() {
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

                        <ul className="nav nav-pills nav-stacked">
                            <li className="active"><a href="#"> <i className="fa fa-user"></i> Profile</a></li>
                            <li><a href="#"> <i className="fa fa-calendar"></i> Recent Activity <span
                                className="label label-warning pull-right r-activity">  </span></a></li>
                            <li><a href="#"> <i className="fa fa-edit"></i> Edit profile</a></li>
                        </ul><br/><br/>
                        <div><StarRating/></div>
                       
                    </div>
                </div>
                <div className="profile-info col-md-9">
                    <div className="panel">
                        <form>
                            <textarea placeholder="Whats in your mind today?"
                                className="form-control input-lg p-text-area"></textarea>
                        </form>
                        <footer className="panel-footer">
                            <button className="btn btn-warning pull-right">Post</button>
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
                    </div>
                    <div className="panel">
                        <div className="bio-graph-heading">
                            Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna
                            metus.
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
                    </div>

                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        <div className="bio-chart">
                                            <div style={{ display: "inline", width: "20rem", height: "20rem" }}><canvas width="100"
                                                height="100px"></canvas><input className="knob" data-width="100"
                                                    data-height="100" data-displayprevious="true" data-thickness=".2" value="35"
                                                    data-fgcolor="#e06b7d" data-bgcolor="#e8e8e8" />
                                            </div>
                                        </div>
                                        <div className="bio-desk">
                                            <h4 className="red"></h4>
                                            <p>Started : 15 July</p>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        <div className="bio-chart">
                                            <div style={{ display: "inline", width: "20rem", height: "20rem" }}><canvas width="100"
                                                height="100px"></canvas><input className="knob" data-width="100"
                                                    data-height="100" data-displayprevious="true" data-thickness=".2" value="63"
                                                    data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8" />
                                            </div>
                                        </div>
                                        <div className="bio-desk">
                                            <h4 className="terques"> </h4>
                                            <Form>
                                                <Form.Group>
                                                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                                                </Form.Group>
                                            </Form>
                                            {/* <p>Started : 15 July</p>
                                            <p>Deadline : 15 August</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        <div className="bio-chart">
                                            <div style={{ display: "inline", width: "20rem", height: "20rem" }}><canvas width="100"
                                                height="100px"></canvas><input className="knob" data-width="100"
                                                    data-height="100" data-displayprevious="true" data-thickness=".2" value="75"
                                                    data-fgcolor="#96be4b" data-bgcolor="#e8e8e8" />
                                            </div>
                                        </div>
                                        <div className="bio-desk">
                                            <h4 className="green"></h4>
                                            {/* <p>Started : 15 July</p>
                                            <p>Deadline : 15 August</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        <div className="bio-chart">
                                            <div style={{ display: "inline", width: "20rem", height: "20rem" }}><canvas width="100"
                                                height="100px"></canvas><input className="knob" data-width="100"
                                                    data-height="100" data-displayprevious="true" data-thickness=".2" value="50"
                                                    data-fgcolor="#cba4db" data-bgcolor="#e8e8e8" />
                                            </div>
                                        </div>
                                        <div className="bio-desk">
                                            <h4 className="purple"></h4>
                                            {/* <p>Started : 15 July</p>
                                            <p>Deadline : 15 August</p> */}
                                        </div>
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


// export default Profile;