 import {NavLink} from 'react-router-dom'
import { Button,Container } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
 export default  function MailOptions(){
     return(
     <Container>
        <ButtonGroup vertical className="mt-3 ml-0">
            <NavLink to="/composemail">
                <Button variant="warning" style={{ margin: "5px" }}>
                    Compose Mail
                </Button>
          </NavLink>
          <Button variant="warning" style={{ margin: "5px" }}>
            Inbox
          </Button>
          <Button variant="warning" style={{ margin: "5px" }}>
            Sent Mail
          </Button>
        </ButtonGroup>
      </Container>
     )
 }