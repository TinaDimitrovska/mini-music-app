import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class Header extends React.Component {
  render() {
    return (
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="px-0">
          <Card className="point">
            <Image
              src={require("../images/raw/Girls-Listen-Music_0.jpg").default}
              style={{ width: "100%" }}
            ></Image>
            <Card.ImgOverlay className="overlay bg-blue">
              <h1 className="text-center text-uppercase title">Music-Db</h1>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Header;
