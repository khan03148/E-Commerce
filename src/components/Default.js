import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ButtonComponent } from "./ButtonComponent";
export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center mx-auto pt-5">
            <h1 className="text-title">Error 404</h1>
           

            <h2 className="text-title">
              The requsted page
              <strong className="text-danger">
                {this.props.location.pathname}{" "}
              </strong>
              can't found
            </h2>
            <Link to="/">
              <ButtonComponent cart>Back to Store</ButtonComponent>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
