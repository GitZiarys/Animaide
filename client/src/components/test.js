import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  // La table de données est cet objet
  state = {
    title: "",
    body: "",
    tag: "",
    posts: [],
    search: "",
  };

  componentDidMount = () => {
    this.getTest();
  };

  getTest = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("Received");
      })
      .catch(() => {
        alert("error");
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
      title: this.state.title,
      body: this.state.body,
      tag: this.state.tag,
    };

    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("received");
        this.resetUserInputs();
        this.getTest();
      })
      .catch(() => {
        console.log("error");
      });
  };

  resetUserInputs = () => {
    this.setState({
      title: "",
      body: "",
      tag: "",
      search: "",
    });
  };

  displayTest = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div className="result2" key={index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>{post.tag}</p>
      </div>
    ));
  };

  displayTag = (posts) => {
    const dataSearch = this.state.search;
    if (!posts.length) return null;
    if (!dataSearch) return null;

    return posts
      .filter((postTag) => postTag.tag.includes(dataSearch))
      .map((post, index) => (
        <div className="result2" key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.tag}</p>
        </div>
      ));
  };

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <div className="test-1">
          <h2>Recherche par tag</h2>

          <div className="form-input">
            <input
              type="text"
              name="search"
              placeholder="Tag à rechercher"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
          <div className="result">{this.displayTag(this.state.posts)}</div>
        </div>
        <hr></hr>
        <div className="test-2">
          <h2>Formulaire de test</h2>
          <form onSubmit={this.submit}>
            <div className="form-input">
              <input
                type="text"
                name="title"
                placeholder="Nom"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <textarea
                placeholder="Texte"
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="form-input">
              <input
                type="text"
                name="tag"
                placeholder="Tag"
                value={this.state.tag}
                onChange={this.handleChange}
              />
            </div>
            <button>Envoyer</button>
          </form>
        </div>
        <hr></hr>
        <div className="test-3">
          <h2>Affichage de tous les posts</h2>
          <div className="result">{this.displayTest(this.state.posts)}</div>
        </div>
      </div>
    );
  }
}

export default App;
