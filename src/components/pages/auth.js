import React, { Component } from 'react';
import Login from '../auth/login';
import loginImg from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAugh = this.handleUnsuccessfulAugh.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleUnsuccessfulAugh() {
        this.props.handleUnsuccessfulLogin();
    }

    render() {
        return (
            <div className="auth-page-wrapper">
                <div className="left-column"
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                <div className="right-column">
                    <Login
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAugh={this.handleUnsuccessfulAugh}
                    />
                </div>
            </div>
        );
    }
}