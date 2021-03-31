import "./Home.scss"
const Home = () => {
  return (
    <div className="home">
      <section id="main">
        <img
          src="/assets/building/home.jpg"
          alt="Ashworth Law Firm"
          className="home-pic"
        />
        <div className="display-bottom-middle text-container">
          <h3>Ashworth Law Firm, Franklin, TN Office</h3>
          <p>
            Welcome to the Franklin, TN based Ashworth Law Firm. Our Franklin attorneys are dedicated to providing the best service possible for our clients and community.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home