import React, { Component } from "react";

class Home extends Component {
  render() {
    return <img src={process.env.PUBLIC_URL + "/test_image.png"} />;
  }
}

export default Home;
