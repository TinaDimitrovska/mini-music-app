import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import BrowseArtist from "./BrowseArtist";

export default function Home() {
  return (
    <>
      <Container>
        <Link to="/">
          {" "}
          <Row className="text-center">
            <Col md={12}>
              <Header />
            </Col>
          </Row>
        </Link>
        <BrowseArtist />
      </Container>
    </>
  );
}
