import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../actions/Users/usersActions';
import SubCategories from "./subCategories";
import './Categories-card.css';
const axios = require('axios');
const $ = require('jquery');



const CategoriesCard = ({ user }: { user: any }) => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    // console.log("hi", user)
    const handleClick = () => {
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
        <div className="card" style={{ display: "flex" }}>
            <img src={user.catImage} alt="Avatar" />
            <div className="container">
                <   h4><b>{user.catName}</b></h4>
                {/* <p>Architect Engineer</p> */}

                <button onClick={handleClick}>
                    <Link to="/provider">Learn More</Link>
                </button>

                {/* <SubCategories user={user.subCategories} /> */}
            </div>

            {/* <div className="list">
                {userInStore.subCategories.map((user: any, index: any) =>
                    <SubCategories
                        key={index}
                        user={user}
                    />
                )}
            </div> */}
        </div>
    )
}



export default CategoriesCard;