import React from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Header_button = {
  display: "inline-block",
};

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
    if (!posts.length) return null;

    return posts.sort((a, b) => b._id.localeCompare(a._id)).filter((postTag) => postTag.title.includes(dataSearch)).filter((postTag2) => postTag2.body1.includes(dataSearch2)).map((post, index) => (
      <div className="container_missioncard" key={index}>
        <div className="mission_card_left">
          <img className="mission_card_img" src={post.image} alt="mission" />
          <Link className="mission_card_left_link" to={"/missions"+"/"+post.slug} style={Header_button}></Link>
        </div>
        <div className="mission_card_right">
          <img className="mission_card_right_img" alt={post.assoTitle} src={post.assoImg}/>
          <h2 className="mission_card_right_title" >{post.title}</h2>
          <p className="mission_card_right_description">{post.body2}</p>
          <div className="mission_card_right_footer">
            <div className="mission_card_right_footer_decoration"></div>
            <p className="mission_card_right_footer_localisation">{post.localisation}</p>
            <Link className="mission_card_right_button" to={"/missions"+"/"+post.slug} style={Header_button}>Découvrir la mission</Link>
          </div>
        </div>
      </div>
    ));
  };

render() {

 return (
  <section className="container_allmissions">
    <h1 className="allmissions_title">Les dernières missions</h1>
    <div className="allmissions_input_display">
      <div className="allmissions_input_left">
        <div className="allmissions_input_img"></div>
        <input className="allmissions_input_input" type="text" name="search" placeholder="Quelle cause aider aujourd’hui ?" value={this.state.search} onChange={this.handleChange} />
      </div>
      <div className="allmissions_input_right">
        <div className="allmissions_input_img2"></div>
        <input className="allmissions_input_input" type="text" name="search" placeholder="Où ?" />
      </div>
    </div>

    {/* <h2>Recherche par body1</h2>
      <div className="form-input">
        <input type="text" name="search2" placeholder="Tag à rechercher" value={this.state.search2} onChange={this.handleChange}/>
      </div> */}

    <div className="recent">{this.displayMission(this.state.posts)}</div>
  </section>
 )
}

}


export default SearchMissions;