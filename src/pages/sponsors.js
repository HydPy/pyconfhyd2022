import React from "react";
import FlexList from "../components/flex-list";
import SectionHeading from "../components/section-heading";
import SponsorCard from "../components/sponsor-card";
import { Header } from "../components/header";
import "../assets/stylesheets/application.scss";
import "./sponsors.css";
import sponsorsData from "../data/sponsors.yml";

export const Sponsors = () => {
  const sponsors = sponsorsData.tiers.filter((t) => t.sponsors.length > 0);
  return (
    <div className="body-wrap">
      <Header bg={"#2f2762"} classHeader={"absolute"} />
      <article>
        {sponsors.length > 0 && <hr />}

        {sponsors.map((tier, index) => (
          <>
            <SponsorTier tier={tier} />
            {index !== sponsors.length - 1 && <hr />}
          </>
        ))}
      </article>
    </div>
  );
};

const SponsorTier = ({ tier }) => {
  return (
    <div className="sponsors__tier">
      <h4 className="sponsors__tier-title">
        <span>{tier.name}</span>
      </h4>
      <div className="sponsors__logos">
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
      </div>
    </div>
  );
};

export default Sponsors;
