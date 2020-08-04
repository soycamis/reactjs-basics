import React from "react";

import "./styles/BadgeForm.css";

class BadgeForm extends React.Component {
  render() {
    return (
      <section className="BadgeForm__container">
        <h1>New Badge!</h1>
        <form name="newBadge">
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.props.myOnChange}
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input
              onChange={this.props.myOnChange}
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>

          <div>
            <label htmlFor="lastName">Job Title:</label>
            <br />
            <input
              onChange={this.props.myOnChange}
              type="text"
              name="jobTitle"
              id="jobTitle"
            />
          </div>

          <div>
            <label htmlFor="lastName">Twitter:</label>
            <br />
            <input
              onChange={this.props.myOnChange}
              type="text"
              name="socialTwitter"
              id="socialTwitter"
            />
          </div>

          <div>
            <input className="Index__Link" type="submit" value="Save" />
          </div>
        </form>
      </section>
    );
  }
}

export default BadgeForm;
