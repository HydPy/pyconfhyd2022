/** @jsx jsx */
import React from "react";
import SectionHeading from "../components/section-heading";
import SponsorCard from "../components/sponsor-card";
import { Header } from "../components/header";
import { jsx, Container } from "theme-ui";
import "../assets/stylesheets/application.scss";
import "../assets/stylesheets/sponsors.css";
import sponsorsData from "../data/sponsors.yml";

const Sponsors = () => {
  const sponsors = sponsorsData.tiers.filter((t) => t.sponsors.length > 0);
  return (
    <div className="body-wrap">
      <Container p={5}>
        <article>
          <SectionHeading mt={30} style={{display:'flex', justifyContent: 'center'}}>Our Sponsors</SectionHeading>
          {sponsors.length > 0 && <hr />}

          {sponsors.map((tier, index) => (
            <>
              <SponsorTier tier={tier} />
              {index !== sponsors.length - 1 && <hr />}
            </>
          ))}
        </article>
      </Container>
    </div>
  );
};

const SponsorTier = ({ tier }) => {
  return (
    <div className="sponsors__tier">
      <h4 className="sponsors__tier-title">
        <span>{tier.name}</span>
      </h4>
      <div className="sponsors__logos center">
        {tier.sponsors.map((sponsor) => (
          <a
            key={sponsor.url}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sponsor.image} alt={sponsor.name} />
          </a>
        ))}
        &nbsp;
      </div>
    </div>
  );
};

export default Sponsors;
