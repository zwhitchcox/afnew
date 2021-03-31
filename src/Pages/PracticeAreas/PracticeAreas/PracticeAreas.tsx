import Switch from "react-bootstrap/esm/Switch"
import { Route } from "react-router"
import BusinessLaw from "../BusinessLaw/BusinessLaw"
import CommercialLeases from "../CommercialLeases/CommercialLeases"
import EstatePlanning from "../EstatePlanning/EstatePlanning"
import RealEstateClosings from "../RealEstateClosings/RealEstateClosings"
import { Helmet } from 'react-helmet'
import "./PracticeAreas.scss"

const PracticeAreas = () => {
  return (
    <div className="practice-areas">
      <Switch>
        <Route path="/practice-areas/business-law">
          <Helmet>
            <title>Ashworth Law Firm - Business Law</title>
          </Helmet>
          <BusinessLaw />
        </Route>
        <Route path="/practice-areas/commercial-leases">
          <Helmet>
            <title>Ashworth Law Firm - Commercial Leases</title>
          </Helmet>
          <CommercialLeases />
        </Route>
        <Route path="/practice-areas/estate-planning">
          <Helmet>
            <title>Ashworth Law Firm - Estate Planning</title>
          </Helmet>
          <EstatePlanning />
        </Route>
        <Route path="/practice-areas/real-estate-closings">
          <Helmet>
            <title>Ashworth Law Firm - Real Estate Closings</title>
          </Helmet>
          <RealEstateClosings />
        </Route>
      </Switch>
    </div>
  )
}

export default PracticeAreas