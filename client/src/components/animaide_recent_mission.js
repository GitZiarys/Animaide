import React from "react";
import axios from "axios";
import "../App.css";

class AnimaideRecentMissions extends React.Component {

  state = {
    _id: "",
    title: "",
    body1: "",
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
    if (!posts.length) return null;

    return posts.sort((a, b) => b._id.localeCompare(a._id)).slice(0, 4).map((post, index) => (
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
  <div className="recent">{this.displayMission(this.state.posts)}</div>
  <div>Plus de missions blablabla</div>
</section>
 )
}

}


export default AnimaideRecentMissions;