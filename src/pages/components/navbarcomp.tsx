import Link from 'next/link'
import {Button, Nav} from 'react-bootstrap';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApiIcon from '@mui/icons-material/Api';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Airbnb <WorkspacesIcon/></Navbar.Brand>
      <Nav className="me-auto">
        <Link href="/" passHref>
        <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/features" passHref>
        <Nav.Link>Features</Nav.Link>
        </Link>
        <Link href="/" passHref>
        <Nav.Link>Pricing</Nav.Link>
        </Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavbarComponent;