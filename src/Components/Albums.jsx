import React from "react";
import { Component } from "react";

export default class Albums extends Component {
  render() {
    const { cover, title } = this.props;
    return (
      <>
        <div className="albums">
          <img
            style={{ width: "35%", height: "30%" }}
            src={require(`../images/albums/${cover}.jpg`).default}
            alt={title}
          />
        </div>
      </>
    );
  }
}
