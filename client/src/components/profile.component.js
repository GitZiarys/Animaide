import React, { Component } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      profileImage: "",
      username: ""
    };
  }
  getImage = () => {
    axios
      .get("http://localhost:8080/api/test/")
      .then((response) => {
        const data = response.data
        this.setState({ profileImage: data });
        console.log(data);
        console.log(this.state);
      })
      .catch(() => {
        console.log("error");
      });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    const payload = {
      profileImage: "",
      username: this.state.currentUser.username
    };

    axios({
      url: "http://localhost:8080/api/test/image",
      method: "PUT",
      data: payload,
    })
      .then(() => {
        this.getImage();
      })
      .catch(() => {
        console.log("error");
      });
  };

  render() {
    const { currentUser } = this.state;

    console.log(currentUser);
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
          <div>
            <img alt={currentUser.username} src={currentUser.profileImage}/>
          </div>
          <div>
            <h2>Changer de photo de profil :</h2>
            <button type="button" onClick={ this.submit }>
            <span>Reload</span>
            </button>
          </div>
        </header>
      </div>
    );
  }
}