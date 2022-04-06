import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const Search = ({ onSubmit, word, setWord}) => {
  return (
    <Container className="mt-4">
        <Row>
            <Col>
            <Form onSubmit={onSubmit}>
                <Row>
                   <Col lg={2}></Col>
                    <Col xs={8} lg={6} className="justify-content-centre">
                    <Form.Control 
                    type="text"
                    value={word}
                    onChange= {(e) => setWord(e.target.value)}
                    placeholder="Search Images Here..." 
                    />
                    </Col>
                    <Col>
                    <Button variant="primary" type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>
            </Col>
        </Row>
    </Container>
  );
};

export default Search;
