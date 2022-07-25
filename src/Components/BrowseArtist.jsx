import React, { Component } from "react";
import artists from "../db";
import Browse from "./Browse";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default class BrowseArtist extends Component {
  render() {
    return (
      <>
        <Row>
          <Col sm={{ span: 6, offset: 3 }} className="bg-gray">
            <h3 className="title1">Browse the artists</h3>
            {artists.map((artist) => (
              <Link to={`/artistPage/${artist.id}`} key={artist.id}>
                <Browse ImgSrc={artist.cover} text={artist.name} />
              </Link>
            ))}
          </Col>
        </Row>
      </>
    );
  }
}
