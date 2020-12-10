import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import Context from '../utils/context';
import './ProviderProf.css'


export default function ProviderProf() {
    // const context = useContext(Context)

    // const Profile = (props) => {
    return (
        <div>
            <img src="https://i.pinimg.com/236x/4d/25/5f/4d255fadc15c380d8b03c7ef25a4c97b.jpg" alt="img" className="img" />
            <div className="info">
                <h1>Name</h1>
                <h2>Contact Details</h2>
                <h3>Email</h3>
                <h4>Phone</h4>
                <h5>City</h5>
            </div>

            <div className="social">
                <a href="https://www.facebook.com/" ><FacebookIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
                <a href="https://www.instagram.com/" ><InstagramIcon style={{ color: "black", fontSize: "xx-large" }} /></a>
                <a href="https://www.twitter.com/" ><TwitterIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
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