import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../actions/Users/usersActions';
import ProviderCard from "../Provider-card/Provider-card";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Categories.css';
const axios = require('axios');
const $ = require('jquery');



const Categories = () => {
    const userInStore = useSelector((state: any) => state.user);
    // const serializedState: any = localStorage.getItem("state");
    // const userInStore = JSON.parse(serializedState) 
    const dispatch = useDispatch();
    console.log("store ===> ", userInStore)

    useEffect (() => {
        // let options = {
        //     url: `http://localhost:8000/category/`,
        //     method: 'get',
        //     // data: { email: input[0].value }
        // }

        // axios(options)
        //     .then((results: any) => {
        //         console.log("axios", results.data);
        //         dispatch(store(results.data))
        //     })
        //     .catch((err: any) => {
        //         console.error("err===== =>", err);
        //     })

        // axios.post(`http://localhost:8000/auth/users/`, {
        //     name: formData.username,
        //     email: formData.email,
        //     password: formData.password,
        //     re_password: formData.password
        // })

        //     .then((result: any) => {
        //         console.log(result)

        //     })
        //     .catch((err: any) => {
        //         console.error("err===== =>", err);
        //     })

        
    })

    return (
        <div className="list">
            {/* {userInStore.user.map((user: any, index: any) =>
                <ProviderCard
                    key={index}
                    user={user}
                />
            )} */}
        </div>

        // <div id="cat-img" className="carousel slide carousel-multi-item" data-ride="carousel">


        //  <div className="controls-top">
        //         <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
        //         <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
        //     </div> 



        // <ol className="carousel-indicators">
        //     <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
        //     <li data-target="#multi-item-example" data-slide-to="1"></li>
        //     <li data-target="#multi-item-example" data-slide-to="2"></li>
        // </ol> 


        //    <div className="carousel-item">

        //         <div className="row">

        //             <div className="col-md-3">
        //                 <div className="card mb-2">
        //                     <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
        //                         alt="Card image cap" />
        //                     <div className="card-body">
        //                         <h4 className="card-title">Card title</h4>
        //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
        //         card's content.</p>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="col-md-3 d-none d-md-block">
        //                 <div className="card mb-2">
        //                     <img className="card-img-top" src="https://picsum.photos/seed/picsum/200/160"
        //                         alt="Card image cap" />
        //                     <div className="card-body">
        //                         <h4 className="card-title">Card title</h4>
        //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
        //         card's content.</p>
        //                         <a className="btn btn-primary">Button</a>
        //                     </div>
        //                 </div>
        //             </div>

        //             <Link to="/provider">
        //                 <div className="tset" onClick={handleClick}>
        //                     <div className="">
        //                         <a className="" >
        //                         <Link to="/provider">
        //                             <h4 className="">Card title</h4>
        //                         </Link> 
        //                             <p className="">Some quick example text to build on the card title and make up the bulk of the
        //             card's content.</p>

        //                             <img className="" src=""
        //                                 alt="Card image cap" />
        //                         </a>
        //                     </div>
        //                 </div>
        //             </Link>

        //         </div>

        //     </div>



        // </div>
    );
}

export default Categories;