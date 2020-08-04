import React from "react";
import { Link } from "react-router-dom";

import BadgeList from "../components/BadgesList";

import "./styles/Badges.css";

class Badges extends React.Component {
  state = {
    data: [
      {
        id: 1,
        firstName: "Camilo",
        lastName: "Sosa",
        avatarUrl:
          "https://previews.123rf.com/images/vikatomas/vikatomas1902/vikatomas190200060/120808953-japan-red-sun-cat-ninja-illustration-vector-a-cat-with-a-bandage-martial-arts.jpg",
        jobTitle: "Developer Ninja",
        socialTwitter: "camiilososa",
      },
      {
        id: 2,
        firstName: "c0dex",
        lastName: "Dev",
        avatarUrl:
          "https://previews.123rf.com/images/vikatomas/vikatomas1902/vikatomas190200060/120808953-japan-red-sun-cat-ninja-illustration-vector-a-cat-with-a-bandage-martial-arts.jpg",
        jobTitle: "Samurai Dev",
        socialTwitter: "c0dex__",
      },
    ],
  };
  render() {
    return (
      <section className="BadgesList__container">
        <h1>Badges List!</h1>
        <hr />
        <div>
          <Link className="Index__Link" to="/badges/new">
            Agregar nuevo
          </Link>
        </div>
        <div className="BadgeList__items">
          <BadgeList dataList={this.state.data} />
        </div>
      </section>
    );
  }
}

export default Badges;
