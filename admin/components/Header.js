import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./TopBar/User";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = this.props.settings;
        return (
            <header>
                <div className="left-side">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        onClick={this.props.sidebarToggle}
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <Link className="navbar-brand brand" to="/">
                        {settings.site_title.value}
                    </Link>
                </div>

                <div className="right-side">
                    <User author={this.props.author} />
                </div>
            </header>
        );
    }
}
export default Header;