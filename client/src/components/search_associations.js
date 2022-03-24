import React from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Header_button = {
  display: "inline-block",
};

class SearchAssociations extends React.Component {

  state = {
    _id: "",
    title: "",
    body1: "",
    body2: "",
    contact: "",
    slug: "",
    FB: "",
    localisation: "",
    image1: "",
    image2: "",
    logo: "",
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

    return posts.sort((a, b) => b.title.localeCompare(a.title)).filter((postTag) => postTag.title.toLowerCase().includes(dataSearch)).map((post, index) => (
      <div className="result2" key={index}>
        <Link className="association_card" to={"/associations/"+post.slug} style={Header_button}>
          <img className="association_card_img" src={post.logo} alt={post.title} />
        </Link>
      </div>
    ));

    
  };

  render() {

 return (
  <section className="container_allassociations">
    <div className="allassociations_first">
      <div className="allassociations_first_img"></div>
      <div className="allassociations_first_description">
        <h2 className="allassociations_first_title">Les Associations</h2>
        <p className="allassociations_first_subdescription">Sensibilisation, responsabilisation, engagements, actions et luttes en faveur de la défense des animaux. Nous te proposons des associations en faveur protection animale.</p>
      </div>
    </div>
    <div className="allassociations_second">
      <div className="allassociations_second_img"></div>
      <div className="allassociations_second_description">
        <h2 className="allassociations_first_title">Quelles sont leurs missions ?</h2>
        <p className="allassociations_first_subdescription">Lutter contre les abandons, contre l’expérimentation animale et les trafics d’animaux, sensibiliser l’opinion, faire évoluer les lois et le statut de l’animal. L'action de la Fondation ne se limite pas aux animaux abandonnés et au territoire français. Notre lutte s'impose partout où les animaux souffrent et ont besoin de reconnaissance.</p>
      </div>
    </div>
    <h2 className="allassociations_display_title">Découvre toutes les associations</h2>
    <div className="allassociations_display">
      <div className="allassociations_allcards">{this.displayAssociation(this.state.posts)}</div>
    </div>

</section>
 )
}

}


export default SearchAssociations;