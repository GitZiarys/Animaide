import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const Header_button = {
  display: "inline-block",
};

class AnimaideRecentMissions extends React.Component {

  state = {
    _id: "",
    title: "",
    body1: "",
    body2: "",
    tag: "",
    localisation: "",
    localisationTag: "",
    image: "",
    posts: [],
    search: ""
  };

  componentDidMount = () => {
    this.getMission();
  };

  getMission = () => {
    axios
      .get("http://35.246.164.222/api")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
      })
      .catch(() => {
        alert("error");
      });
  };


  displayMission = (posts) => {
    if (!posts.length) return null;

    return posts.sort((a, b) => b._id.localeCompare(a._id)).slice(0, 5).map((post, index) => (
        <div className="recentmission_display" key={index}>
          <img src={post.image} alt="mission" className="recentmission_image"/>
          <h3 className="recentmission_title">{post.title}</h3>
          <p className="recentmission_description">{post.body2}</p>
          <Link className="recentmission_button" to={"/missions/"+post.slug} style={Header_button}>Découvrir la mission</Link>
        </div>
    ));

    
  };

  render() {

 return (
  <section className="container_recentmissions">
    <div className="recentmissions_header">
      <h2 className="recentmissions_title">Découvrir les missions récentes</h2>
      <Link className="recentmission_allmisions" to={"/missions"} style={Header_button}>Découvrir toutes les autres missions</Link>
    </div>
    <div className="recentmission_container">{this.displayMission(this.state.posts)}</div>
    
</section>
 )
}

}


export default AnimaideRecentMissions;