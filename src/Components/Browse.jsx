import React, { Component } from "react";

export default class Browse extends Component {
  render() {
    const { ImgSrc, text } = this.props;

    return (
      <>
        <div className="artistPhoto">
          <img
            className="artist"
            src={require("../images/covers/" + ImgSrc + ".jpg").default}
            alt=""
          />
          <span className="textColor">{text}</span>
        </div>
      </>
    );
  }
}
