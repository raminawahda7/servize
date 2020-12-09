import React from "react";



import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Profile.css'
import axios from 'axios';
import Header2 from '../Header2/header2';

class Profile extends React.Component {
    state = {
        royal: []
    };


    componentDidMount() {
        const id = "5fb4cc6bed78552714cfb3af"
        axios.get(`http://localhost:5000/fooddose/fastfoodres/royal/${id}`)
            .then(fastfoodres => {
                this.setState({
                    royal: fastfoodres.data[22]
                });
                console.log(this.state.royal)
            })

    }
    render() {
        return (
            <div className='royal'>
                <Header2 />
                <div className='royalimg'>
                    <img src={this.state.royal.Image} alt="img" class="royalimg" />
                    <div class="royalinfo">
                        <h1>Contact Details</h1>
                        <h2>Address: {this.state.royal.Address}</h2>
                        <h3>Phone: {this.state.royal.Phone}</h3>
                    </div>

                    <div class="royalsocial">
                        <a href="https://www.facebook.com/" ><FacebookIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
                        <a href="https://www.instagram.com/" ><InstagramIcon style={{ color: "black", fontSize: "xx-large" }} /></a>
                        <a href="https://www.twitter.com/" ><TwitterIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
                    </div>
                </div>
            </div >
        )
    }
}


// class Profile extends Component<{}, ClockState> {
//     username: string;
//     email: string;
//     phone: number;
//     address: string
// }

// constructor(name: string, e: string, ph: number, add: string) {
//     this.username = name;
//     this.email = e;
//     this.phone = ph;
//     this.address = add
//     // profileimg: 'https://i.pinimg.com/564x/96/4c/3a/964c3aeb864fb45f8f4ad17a50cca37d.jpg'
// }

// class Profile extends React.Component {

// constructor(props: any) {
//     super(props)
//     this.state = {
//         // usename: '',
//         // email: ''
//     }
//}
// render() {
//     return (
//         <div>
//             hello
//         </div>
// <div className="imgdiv">
//     <div className="row" id="row">
//         <div id="profile" className="col-sm-4 right" >
//             <br></br>
//             <br></br>
//             <br></br>
//             <div className='picContainer'>
//                 {/* <img className="img1"
//                         // src={this.state.profileimg}
//                         alt="userPic"
//                     /> */}
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <div className='textContainer' >
//                 <div>
//                     <h4 className="text">Name</h4>

//                 </div>
//                 <div>
//                     <h4 className="text">Email</h4>

//                 </div>
//                 <div>
//                     <h4 className="text">Phone Number</h4>

//                 </div>
//             </div>
//         </div>
//         <div className="col left" id="column">
//             <div className='cards__container' id="cards__container1">
//                 <div className="cards__wrapper">
//                     <br></br>
//                     <br></br>
//                     <div className="textContainer">
//                         <h4 className="text">Services</h4>
//                     </div>
//                     <br></br>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//         )
//     }
// }

export default Profile;