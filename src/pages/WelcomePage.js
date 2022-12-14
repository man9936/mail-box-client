import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import MailOptions from "../components/MailOptions";
import WelcomeModal from "../components/WelcomeModal";

const Welcome = () => {
  const emailLoggedIn = useSelector((state) => state.auth.email);

  return (
    // <div>

    //   <h1>Welcome to your mailbox</h1>
    //   <NavLink to="/composemail">
    //     <Button>Compose Mail</Button>
    //   </NavLink>
    // </div>
    <>
     <WelcomeModal />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mail Box Client</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:{" "}
              <a style={{ color: "orange" }} href="#login">
                {emailLoggedIn}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MailOptions />
      
    </>
  );
};

export default Welcome;
