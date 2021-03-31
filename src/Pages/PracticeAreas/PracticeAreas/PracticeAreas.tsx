import Switch from "react-bootstrap/esm/Switch"
import { Route } from "react-router"
import BusinessLaw from "../BusinessLaw/BusinessLaw"
import CommercialLeases from "../CommercialLeases/CommercialLeases"
import EstatePlanning from "../EstatePlanning/EstatePlanning"
import RealEstateClosings from "../RealEstateClosings/RealEstateClosings"
import "./PracticeAreas.scss"

const PracticeAreas = () => {
  return (
    <div className="practice-areas">
      <Switch>
        <Route path="/practice-areas/business-law">
          <BusinessLaw />
        </Route>
        <Route path="/practice-areas/commercial-leases">
          <CommercialLeases />
        </Route>
        <Route path="/practice-areas/estate-planning">
          <EstatePlanning />
        </Route>
        <Route path="/practice-areas/real-estate-closings">
          <RealEstateClosings />
        </Route>
      </Switch>
    </div>
  )
}

export default PracticeAreas