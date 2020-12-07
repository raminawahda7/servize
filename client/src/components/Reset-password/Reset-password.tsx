// import { showSign } from '../actions/actions.js';
// import './NewPassword.css';
import { Link, Redirect } from 'react-router-dom';
// import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import React from 'react';
// const axios = require('axios');
const $ = require('jquery');


const ResetPassword = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Reset Password</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                            New Password
                        </label>
                        <input type="password" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                            Confirm Password
                        </label>
                        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                        <div className="text-center mt-4">
                            <MDBBtn color="indigo" type="submit">Update</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ResetPassword;
