import React from "react";
import "../App.css";

const AnimaideNewsletter = () => {
  return (
        <section className="container_newsletter">
            <div className="newsletter_display">
                <div className="newsletter_image"></div>
                <div className="newsletter">
                    <h2 className="newsletter_title">Newsletter</h2>
                    <p className="newsletter_description">Restez informés des futures missions de protection animale et recevez nos articles sur les évènements militants en France.</p>
                    <form className="newsletter_form">
                        <div className="newsletter_form_up">
                            <input className="newsletter_input" type="email" placeholder="@gmail.com"></input>
                            <input className="newsletter_submit" type="submit" value="S'inscrire"></input>
                        </div>
                        <label for="newsletter_check" className="newsletter_check_label">
                            <input className="newsletter_check" id="newsletter_check" type="checkbox" required></input>
                            <div className="newsletter_checkbox_check"></div>
                            Accepter nos<a className="newsletter_TC" href="/termsconditions">Termes et conditions</a>
                        </label>
                        </form>
                    </div>
                </div>
        </section>
  );
}

export default AnimaideNewsletter;