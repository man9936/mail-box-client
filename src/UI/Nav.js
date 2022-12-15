import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const email = useSelector((state) => state.auth.email);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Mail Box Client</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Navbar.Text>
            <NavLink style={{ color: "white" }} to="/welcome">
              Home
            </NavLink>
          </Navbar.Text>

          <Navbar.Text>
            Signed in as:{"  "}
            <a style={{ color: "orange" }} href="#login">
              {email}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
