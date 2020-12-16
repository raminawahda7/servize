import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../actions/Users/usersActions';
import './Search.css';
const axios = require('axios');
const $ = require('jquery');

const Search = () => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");

    const handleClick = () => {
        axios.post(`http://localhost:8000/`,      //url for sending the request ?
            {
                city: city,
                category: category
            })

            .then((result: any) => {
                console.log("axios", result)
                // dispatch(store(result.data))  store the values in the redux store

                // redirect to the provider page  path= '/provider'

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    }
    // const handleChange = () => {

    // }
    console.log(category)

    return (

        <div>
            <input type="text" placeholder="search.."></input>

            <div className="cat dropdown">
                {/* <button className="dropbtn" onClick={()=>{setCat(!cat)}}>Category</button> */}
                <select className="dropdown-cat" onChange={(e) => { setCategory(e.target.value) }}>
                    <option>Electrician</option>
                    <option>Plumber</option>
                    <option>Carpenter</option>
                </select>
            </div>

            <div className="city dropdown">
                {/* <button className="dropbtn" onClick={()=>{setCity(!city)}}>City</button> */}
                <select className="dropdown-city" onChange={(e) => { setCity(e.target.value) }}>
                    <option>Ramallah</option>
                    <option>Nablus</option>
                    <option>Hebron</option>
                    <option>Jenin</option>
                    <option>Tulkarem</option>
                    <option>Jericho</option>


                </select>
            </div>
            <button onClick={handleClick}>Submit</button>

        </div>
    )
}

export default Search;