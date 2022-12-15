import { Container, Card } from "react-bootstrap";

const Inbox = (props) => {
  return (
    <>
      <Container
        className="mt-1 bg-primary"
        style={{
          margin: "100px 200px",
          border: "2px solid red",
          height: "400px",
          width: "60%",
        }}
      >
        <Card>
          <ul>
            {props.subject}
            {props.email}
          </ul>
        </Card>
      </Container>
    </>
  );
};

export default Inbox;
