import React from "react";
import { Container } from "@material-ui/core";
import { PlanButton } from "../components/HomepagePlans";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <div className="header-banner">Banner Holding Spot</div>

        <section className="methodology">
          Include Radar Chart .GIF and explaination. Include PDF download for
          assessment test.
        </section>

        <section className="plans">
          <PlanButton key="1" title="Title" />
        </section>

        <section className="about">Dave's bio</section>

        <section className="testimonials" />
      </Container>
    </React.Fragment>
  );
}
