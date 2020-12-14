import * as React from 'react';
import { Component } from 'react';


export default function Search() {
    return (
        <div className="dropdown">
            {/* <button onclick="myFunction()" class="dropbtn">Dropdown</button> */}
            <div id="myDropdown" className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}
