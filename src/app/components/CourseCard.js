import React, { Component } from "react";

export default class CourseCard extends Component {
  render() {
    return (
      <div class="Box">
        <div class="circleImage">
          {" "}
          <img src={"assets/images/"+this.props.item.icon} alt="" />{" "}
        </div>
        <div class="tagsRight">
          <div class="hrs">20 HOURS</div>
        </div>
        <h2>{this.props.item.name}</h2>
        <p>
          Get ready for computer science. Create graphical programs, learn
          computing...
        </p>
        <div class="rm">RM9.99</div>
      </div>
    );
  }
}
