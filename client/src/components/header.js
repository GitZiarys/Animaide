import React from "react";
import "../App";
import "../App.css";
import AuthService from "../services/auth.service";
import Login from "../components/login";
import Register from "../components/register.component";
import BoardUser from "../components/board-user.component";
import BoardAdmin from "../components/board-admin.component";
import { Routes, Route, Link } from "react-router-dom";

const Header_button = {
    display: "inline-block",
};

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser, showAdminBoard } = this.state;
    return (
      <section className="container_header">
          <div className="header_left">
            <Link className="header_logo" to={"/"}></Link>
            <Link className="header_link" to={"/missions"} style={Header_button}>Nos missions</Link>
            <Link className="header_link" to={"/associations"} style={Header_button}>Les associations</Link>
            <Link className="header_link" to={"/animaide"} style={Header_button}> Pourquoi Animaide ?</Link>
          </div>
          <div className="header_right">
          {showAdminBoard && (
            <div>
              <Link to={"/admin"}>Panel Admin</Link>
            </div>
          )}

          {currentUser ? (
            <div>
              <p className="header_user" style={Header_button}>Salut, {currentUser.username} ! </p>

              <Link
                className="header_button connect"
                href="/login"
                onClick={this.logOut} style={Header_button}
              >
                Déconnexion
              </Link>
            </div>
          ) : (
            <div>
              <Link className="header_button connect" to={"/login"} style={Header_button}>
                Se connecter
              </Link>

              <Link className="header_button signin" to={"/register"} style={Header_button}>
                S'inscrire
              </Link>
            </div>
          )}
        </div>
        <div>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/admin" element={<BoardAdmin />} />
          </Routes>
        </div>
      </section>
  );
}
}

export default Header;