import React from "react";
import axios from "axios";
import "../App.css";

class SearchMissions extends React.Component {

  state = {
    _id: "",
    title: "",
    body1: "",
    body2: "",
    slug: "",
    tag: "",
    localisation: "",
    localisationTag: "",
    image: "",
    posts: [],
    search: "",
    search2: ""
  };

  componentDidMount = () => {
    this.getMission();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  getMission = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
      })
      .catch(() => {
        alert("error");
      });
  };


  displayMission = (posts) => {
    const dataSearch = this.state.search;
    const dataSearch2 = this.state.search2;
    if (!posts.length) return null;

    return posts.sort((a, b) => b._id.localeCompare(a._id)).filter((postTag) => postTag.title.includes(dataSearch)).filter((postTag2) => postTag2.body1.includes(dataSearch2)).map((post, index) => (
      <div className="result2" key={index}>
        <img src={post.image} alt="mission" />
        <h3>{post.title}</h3>
        <p>{post.body1}</p>
      </div>
    ));

    
  };

  render() {

 return (
  <section className="container_recentmissions">
      <h2>Recherche par titre</h2>

<div className="form-input">
  <input
    type="text"
    name="search"
    placeholder="Tag à rechercher"
    value={this.state.search}
    onChange={this.handleChange}
  />
</div>

      <h2>Recherche par body1</h2>

<div className="form-input">
  <input
    type="text"
    name="search2"
    placeholder="Tag à rechercher"
    value={this.state.search2}
    onChange={this.handleChange}
  />
</div>
  <div className="recent">{this.displayMission(this.state.posts)}</div>
</section>
 )
}

}


export default SearchMissions;