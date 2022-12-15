import { NavLink } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { emailActions } from "../store/EmailFunction";
const MailOptions = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const inboxHandler = () => {
    dispatch(emailActions.fetchHandler());
    history.replace("./inboxPage");
  };

  return (
    <Container style={{ width: "80%" }}>
      <ButtonGroup horizontal="true" className="mt-3">
        <NavLink to="/composemail">
          <Button variant="warning" style={{ margin: "5px" }}>
            Compose Mail
          </Button>
        </NavLink>
        <Button
          onClick={inboxHandler}
          variant="warning"
          style={{ margin: "5px" }}
        >
          Inbox
        </Button>
        <Button variant="warning" style={{ margin: "5px" }}>
          Sent Mail
        </Button>
        <Button variant="danger" style={{ margin: "5px" }}>
          Logout
        </Button>
      </ButtonGroup>
    </Container>
  );
};
export default MailOptions;
