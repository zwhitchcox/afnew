import './App.scss';
import { FaEnvelope, FaFax, FaPhone } from 'react-icons/fa'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import NavBar from './Cmpt/NavBar/NavBar';
import Home from './Pages/Home/Home';
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy/PrivacyPolicy';
import Disclaimer from './Pages/Legal/Disclaimer/Disclaimer';
import Attorneys from './Pages/Attorneys/Attorneys/Attorneys';
import PracticeAreas from './Pages/PracticeAreas/PracticeAreas/PracticeAreas';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
       <main>
        <Switch>
          <Route path="/attorneys">
            <Attorneys />
          </Route>
          <Route path="/practice-areas">
            <PracticeAreas />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/disclaimer">
            <Disclaimer />
          </Route>
          <Route path="/" exact>
          </Route>
          <Route path="/">
            <h3>
              Not Found
            </h3>
            <br />
            <Link to="/">
              Go Home
            </Link>
          </Route>
        </Switch>
        <section id="contact">
          <div className="contact">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>
                <FaEnvelope /> info@ashworthfirm.com
              </p>
              <p>
                <FaPhone /> (615) 810-8150 (office)
              </p>
              <p>
                <FaFax /> (615) 810-8151 (fax)
              </p>
            </div>


          </div>
          <div className="location-home">
            <div className="location-container">
              <h4>Franklin Location</h4>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.907971755444!2d-86.86739156772792!3d35.923484476154876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886480f2d201fab7%3A0xffb42b2339a5b269!2sAshworth%20Law%20Firm%2C%20PLLC!5e0!3m2!1sen!2sus!4v1617145879358!5m2!1sen!2sus" width="90%" height="300" style={{border:0}} allowFullScreen={false} loading="lazy"></iframe>
            </div>
          </div>
        </section>
        </main>
        <footer>
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link to="/disclaimer">
            Disclaimer
          </Link>
        </footer>
      </Router>
    </div>
  )
}

export default App