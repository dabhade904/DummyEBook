import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      TITLE: "",
      AUTHOR: "",
      YEAR: "",
      RATING: "",
      PRICE: "",
      DESCRIPTION: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
  }

  handleSubmit(e) {}

  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields">
        <div className="FormField">
            <label className="FormField__Label" htmlFor="Title">
              Title
            </label>
            <input
              type="title"
              id=""
              className="FormField__Input"
              placeholder="Enter book title name"
              name="title"
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="Author">
              Author
            </label>
            <input
              type="Author"
              id=""
              className="FormField__Input"
              placeholder="Enter book author name"
              name="author"
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="Year">
              Year
            </label>
            <input
              type="Year"
              id=""
              className="FormField__Input"
              placeholder="Enter book published year"
              name="year"
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="Price">
              Price
            </label>
            <input
              type="Price"
              id=""
              className="FormField__Input"
              placeholder="Enter book price"
              name="price"
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="Rating">
              Rating
            </label>
            <input
              type="rating"
              id="email"
              className="FormField__Input"
              placeholder="Rating of book"
              name="rating"
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="description">
              Description
            </label>
            <input
              type="Description"
              id="email"
              className="FormField__Input"
              placeholder="Enter book description"
              name="descrition"
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <button
              className="FormField__Button mr-20"
              onSubmit={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
