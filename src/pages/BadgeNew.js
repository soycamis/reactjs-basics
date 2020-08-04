import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      socialTwitter: "",
    },
  };

  handleChange = (evt) => {
    let inputName = evt.target.name;
    let inputValue = evt.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [inputName]: inputValue,
      },
    });
  };

  render() {
    return (
      <section className="PageNew__container">
        <div className="PageNew__badge">
          <Badge
            firstName={this.state.form.firstName}
            lastName={this.state.form.lastName}
            avatarUrl="https://previews.123rf.com/images/vikatomas/vikatomas1902/vikatomas190200060/120808953-japan-red-sun-cat-ninja-illustration-vector-a-cat-with-a-bandage-martial-arts.jpg"
            jobTitle={this.state.form.jobTitle}
            socialTwitter={this.state.form.socialTwitter}
          />
        </div>
        <div className="PageNew__form">
          <BadgeForm myOnChange={this.handleChange} />
        </div>
      </section>
    );
  }
}

export default BadgeNew;
