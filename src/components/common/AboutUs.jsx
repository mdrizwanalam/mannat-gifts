import Header from "./Header";
import Footer from "./Footer";
import mannatBanner from "../../assets/images/mannat_banner.png";

const AboutUs = () => {
  return (
    <div className="main_wrapper">
      <Header />
      <section className="about_us_wrapper">
        <h1>About Mannat Gifts</h1>
        <div className="banner_section">
          <img src={mannatBanner} />
        </div>
        <div className="details_section">
          <p>
            Welcome to Mannat Gifts, your number one source for Gifting. We're
            dedicated to giving you the very best of personalized gifts, with a
            focus on unique gifts, value for money, and customized products.
          </p>
          <br />
          <p>
            Founded in 2022 by Rizwan Alam, Mannat Gifts has come a long way
            from its beginnings in Greater Noida (UP) . When Rizwan first
            started out, his passion for unique concept gifts drove them to
            start Mannat Gifts. so that Mannat Gifts can offer you unique Gifts.
            We now serve customers all over india, and are thrilled that we're
            able to turn our passion into our own website.
          </p>
          <p>
            we hope you enjoy our products as much as we enjoy offering them to
            you.
          </p>
          <p>Sincerely,</p>
          <p>Mannat Gifts</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
