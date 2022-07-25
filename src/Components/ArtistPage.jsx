import React, { Component } from "react";
import artists from "../db";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Albums from "./Albums";

export default class ArtistPage extends Component {
  render() {
    const artistName = parseInt(this.props.match.params.id);
    const artist = artists.find((artist) => artist.id === artistName);

    return (
      <>
        <Container>
          <NavLink activeClassName="active" exact to="/">
            {" "}
            <Row className="text-center">
              <Col md={12}>
                <Header />
              </Col>
            </Row>
          </NavLink>

          <Row>
            <Col sm={{ span: 6, offset: 3 }} className="px-0 bg-gray pb-5">
              <div key={artist.id}>
                <img
                  style={{ width: "30%", height: "30%" }}
                  src={require(`../images/covers/${artist.cover}.jpg`).default}
                  alt=""
                  className="imgDetail"
                />
                <span className="artistName">{artist.name}</span>
                <p className="para">{artist.bio}</p>
                {artist.albums.map((album) => (
                  <Albums
                    cover={album.cover}
                    title={album.title}
                    key={album.title}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
