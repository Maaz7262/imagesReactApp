import React from "react";
import { ListGroup, Image, Container } from "react-bootstrap";
const Welcome = () => {
  return (
    <Container style={{ padding: "80px" }}>
      <h1 style={{ textAlign: "center" }}>Welcome To Gallery</h1>
      <Container style={{ marginLeft: "35px" }}>
        <ListGroup horizontal>
          <ListGroup.Item style={{ padding: "20px" }}>
            <Image
              src="https://unsplash.it/300/300"
              style={{ maxWidth: "200px" }}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ padding: "20px" }}>
            <Image
              src="https://unsplash.it/400/400"
              style={{ maxWidth: "200px" }}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ padding: "20px" }}>
            <Image
              src="https://unsplash.it/500/500"
              style={{ maxWidth: "200px" }}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ padding: "20px" }}>
            <Image
              src="https://unsplash.it/200/200"
              style={{ maxWidth: "200px" }}
            />
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </Container>
  );
};
export default Welcome;
