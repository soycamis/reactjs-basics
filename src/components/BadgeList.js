import React from "react";
import Badge from "./Badge";
// import Badge from "../components/Badge";

class BadgeList extends React.Component {
  render() {
    return (
      <>
        {this.props.dataList.map((item) => {
          return (
            <div className="BadgeList__item" key={item.id}>
              <Badge
                firstName={item.firstName}
                lastName={item.lastName}
                avatarUrl={item.avatarUrl}
                jobTitle={item.jobTitle}
                socialTwitter={item.socialTwitter}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default BadgeList;
