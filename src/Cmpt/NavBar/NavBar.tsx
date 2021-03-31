import { Button, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className="nav">
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>Ashworth Law Firm</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div style={{width: '100%'}} />
          <Nav className="mr-auto">
            <NavDropdown title="Practice Areas" id="practice-areas-dropdown">
              <Link to="/practice-areas/real-estate-closings" className="nav-link">
                Real Estate Closings
              </Link>
              <Link to="/practice-areas/business-law" className="nav-link">
                Business Law
              </Link>
              <Link to="/practice-areas/estate-planning" className="nav-link">
                Estate Planning
              </Link>
              <Link to="/practice-areas/commercial-leases" className="nav-link">
                Commercial Leases
              </Link>
            </NavDropdown>
            <NavDropdown title="Attorneys" id="team-dropdown">
              <Link to="/attorneys/rob-ashworth" className="nav-link">
                Rob Ashworth
              </Link>
              <Link to="/attorneys/julia-wood" className="nav-link">
                Julia Wood
              </Link>
              <Link to="/attorneys/keaton-rye" className="nav-link">
                Keaton Rye
              </Link>
              <Link to="/attorneys/zach-groover" className="nav-link">
                Zach Groover
              </Link>
            </NavDropdown>
            <NavDropdown title="Tools" id="tools-dropdown" className="tools-dropdown">
              <Nav.Link href="https://www.lodestarss.com/Live/Ashworth/main.php">Closing Calculator</Nav.Link>
            </NavDropdown>
            {/* <Dropdown className="nav-item">
              <Dropdown.Toggle
                id="tools-dropdown"
                as={NavLink}
                to="#"
                className="nav-link"
                active={false}
              >
                Tools
              </Dropdown.Toggle>
              <Dropdown.Menu
                align={{lg: 'right'}}
              >
                <Nav.Link href="https://www.lodestarss.com/Live/Ashworth/main.php">Closing Calculator</Nav.Link>
              </Dropdown.Menu>
            </Dropdown> */}
            <Nav.Link href="https://birdeye.com/ashworth-law-firm-pllc-150576455368515">Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar