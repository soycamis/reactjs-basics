import React from "react";
import { Link } from "react-router-dom";

import "./styles/Index.css";

function Index() {
  return (
    <section className="Index__container">
      <Link to="/badges/" className="Index__Link">
        Badges
      </Link>
    </section>
  );
}

export default Index;
