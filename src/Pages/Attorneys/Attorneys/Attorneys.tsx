import Switch from "react-bootstrap/esm/Switch"
import { Helmet } from "react-helmet"
import { Route } from "react-router"
import JuliaWood from "../JuliaWood/JuliaWood"
import KeatonRye from "../KeatonRye/KeatonRye"
import RobAshworth from "../RobAshworth/RobAshworth"
import ZachGroover from "../ZachGroover/ZachGroover"
import "./Attorneys.scss"

const Attorneys = () => {
  return (
    <div className="attorneys">
      <Switch>
        <Route path="/attorneys/rob-ashworth">
          <Helmet>
            <title>Ashworth Law Firm - Rob Ashworth</title>
          </Helmet>
          <RobAshworth />
        </Route>
        <Route path="/attorneys/julia-wood">
          <Helmet>
            <title>Ashworth Law Firm - Julia Wood</title>
          </Helmet>
          <JuliaWood />
        </Route>
        <Route path="/attorneys/keaton-rye">
          <Helmet>
            <title>Ashworth Law Firm - Keaton Rye</title>
          </Helmet>
          <KeatonRye />
        </Route>
        <Route path="/attorneys/zach-groover">
          <Helmet>
            <title>Ashworth Law Firm - Zach Groover</title>
          </Helmet>
          <ZachGroover />
        </Route>
      </Switch>
    </div>
  )
}

export default Attorneys