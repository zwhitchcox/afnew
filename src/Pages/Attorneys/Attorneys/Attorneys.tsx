import Switch from "react-bootstrap/esm/Switch"
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
          <RobAshworth />
        </Route>
        <Route path="/attorneys/julia-wood">
          <JuliaWood />
        </Route>
        <Route path="/attorneys/keaton-rye">
          <KeatonRye />
        </Route>
        <Route path="/attorneys/zach-groover">
          <ZachGroover />
        </Route>
      </Switch>
    </div>
  )
}

export default Attorneys