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

    // const [cat, setCat] = useState(false);
    // const [city, setCity] = useState(false);

    const handleClick = () => {
        axios.post(`http://localhost:8000/`)    // sending data

            .then((result: any) => {
                console.log("axios", result.data)
                // dispatch(store(result.data))

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    }

    return (
       


        <div>
            <input type="text" placeholder="search.."></input>

            <div className="dropdown">
                {/* <button className="dropbtn" onClick={()=>{setCat(!cat)}}>Category</button> */}
                <select className="dropdown-cat">
                    <option>Cat 1</option>
                    <option>Cat 2</option>
                    <option>Cat 3</option>
                </select>
            </div>

            <div className="dropdown">
                {/* <button className="dropbtn" onClick={()=>{setCity(!city)}}>City</button> */}
                <select className="dropdown-city">
                    <option>City 1</option>
                    <option>City 2</option>
                    <option>City 3</option>
                    <option>City 4</option>
                    <option>City 5</option>
                    <option>City 6</option>
                    
                    
                </select>
            </div>
            <button onClick={handleClick}>Submit</button>
            
        </div>
    )
}

export default Search;