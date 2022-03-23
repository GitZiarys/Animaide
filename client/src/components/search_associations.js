import React from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

class SearchAssociations extends React.Component {

  state = {
    _id: "",
    assoTitle: "",
    assoBody: "",
    assoContact: "",
    assoslug: "",
    assoFB: "",
    localisation: "",
    assoImg: "",
    posts: [],
    search: "",
  };

  componentDidMount = () => {
    this.getAssociation();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  getAssociation = () => {
    axios
      .get("/api/associations")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
      })
      .catch(() => {
        alert("error");
      });
  };


  displayAssociation = (posts) => {
    const dataSearch = this.state.search;
    if (!posts.length) return null;

    return posts.sort((a, b) => b.assoTitle.localeCompare(a.assoTitle)).filter((postTag) => postTag.assoTitle.toLowerCase().includes(dataSearch)).map((post, index) => (
      <div className="result2" key={index}>
        <img src={post.assoImg} alt="association" />
        <h3>{post.assoTitle}</h3>
        <p>{post.assoBody}</p>
        <Link to={"/associations/"+post.assoslug}>Voir association</Link>
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
<div className="recent">{this.displayAssociation(this.state.posts)}</div>
</section>
 )
}

}


export default SearchAssociations;