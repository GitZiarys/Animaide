import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import {useNavigate} from 'react-router-dom';
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ce champ est requis !
      </div>
    );
  }
};

class LoginComp extends Component {
    
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

 
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    });
    this.form.validateAll();
     
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
        this.props.navigate("/");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username" className="login_label" >Nom d'utilisateur</label>
              <div className="input_display">
                <div className="input_img username"></div>
                <Input
                  type="text"
                  className="login_input"
                  name="username"
                  placeholder="exemple : CloudMaster"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  validations={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="login_label">Mot de passe</label>
              <div className="input_display">
                <div className="input_img password"></div>
                <Input
                  type="password"
                  className="login_input password_input "
                  id="password_input"
                  name="password"
                  placeholder="exemple : azerty"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required]}
                  />
                  <input type="checkbox" id="leak_password" />
              </div>
            </div>
            <div className="form-group">
              <button
                className="connection_button"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Se connecter</span>
              </button>
            </div>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
      
    );
  }

  LeakPassword() {
    var element = document.getElementsByClassName('password_input');
    console.log(element)
  }

}




function WithNavigate(props) {
    let navigate = useNavigate();
    return <LoginComp {...props} navigate={navigate} />
}

export default WithNavigate;

