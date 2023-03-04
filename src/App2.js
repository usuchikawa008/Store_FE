import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./App.css";

import AuthService from "./services/auth.service";

// import Login from "./components/auth/login.component";
// import Register from "./components/auth/register.component";
// import Profile from "./components/auth/profile.component";
import Home from "./components/board/home.component";
// import BoardUser from "./components/board/board-user.component";
// import BoardModerator from "./components/board/board-moderator.component";
// import BoardAdmin from "./components/board/board-admin.component";
import Category from "views/Category/Category";
import Cart from "views/Cart/Cart";
import SingleProduct from "views/Product/SingleProduct";

class App2 extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }

    render() {
        // const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        return (
            <div>
                <nav className="navbar navbar-expand navbar-light bg-light text-dark">
                    <img src={require('./assets/images/logo.png')} />

                    <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/products"} className="nav-link">
                                Products
                            </Link>
                        </li>

                        {/* {showModeratorBoard && (
                            <li className="nav-item">
                                <Link to={"/mod"} className="nav-link">
                                    Moderator Board
                                </Link>
                            </li>
                        )}

                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link">
                                    Admin Board
                                </Link>
                            </li>
                        )}

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/user"} className="nav-link">
                                    User
                                </Link>
                            </li>
                        )} */}
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                                Our story
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                About
                            </Link>
                        </li>


                    </div>


                    {/* {currentUser ?  */}
                    {/* (
                        <div className="navbar-nav ml-auto">
                            <form class="d-flex input-group w-auto">
                                <input
                                    type="search"
                                    class="form-control rounded"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />

                            </form>
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ) :  */}
                    {/* ( */}
                        <div className="navbar-nav ml-auto">
                            <form className="d-flex input-group w-auto">
                                <input
                                    type="search"
                                    class="form-control rounded"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />

                            </form>
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    {/* ) */}
                    {/* } */}
                </nav>

                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        {/* <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/user" element={<BoardUser />} />
                        <Route path="/mod" element={<BoardModerator />} />
                        <Route path="/admin" element={<BoardAdmin />} /> */}
                        <Route path="/products" element={<Category />} />
                        <Route path="/carts" element={<Cart />} />
                        <Route path="/product/id" element={<SingleProduct />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App2;