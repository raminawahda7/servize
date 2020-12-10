import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import Context from '../utils/context';
import './ProviderProf.css'


export default function UserProf() {
    // const context = useContext(Context)

    // const Profile = (props) => {
    return (
        <div>
            <img src="https://i.pinimg.com/236x/e0/10/33/e0103395bedca2f42a6dc1cddf5c557e.jpg" alt="img" className="img" />
            <div className="info">
                <h1>Name</h1>
                <h3>Email</h3>
                <h4>Phone</h4>
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