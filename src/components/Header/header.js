import React from "react";
import {Link} from "react-router-dom";

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand px-3" href="#">Books Application</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link to={"/books"} className={"nav-link"}>Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categories"} className={"nav-link"}>Categories</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default header;