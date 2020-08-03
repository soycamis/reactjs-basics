import React from "react";

import "../styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <section className="Badge">
        <header className="Badge__header">
          <span role="img" aria-label="Tech">
            👾
          </span>
        </header>
        <main className="Badge__info">
          <div className="Badge__info-container">
            <div className="Badge__info-avatar">
              <img src={this.props.avatarUrl} alt="Avatar" />
            </div>
            <div className="Badge__info-name">
              {this.props.firstName} <br />
              {this.props.lastName}
            </div>
          </div>
          <div className="Badge__info-description">
            <p>{this.props.jobTitle}</p>
            <p>
              @{this.props.socialTwitter}
              <span role="img" aria-label="Cat Ninja">
                🐱‍👤
              </span>
            </p>
          </div>
        </main>
        <footer className="Badge__footer">
          <p>#reactjs ❤</p>
        </footer>
      </section>
    );
  }
}

export default Badge;
