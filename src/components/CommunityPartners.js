/** @jsx jsx */
import React from "react";
import SectionHeading from "../components/section-heading";
import { jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import "../assets/stylesheets/community-partners.scss";
import communityPartnersData from "../data/community-partners.yml";

const CommunityPartners = () => {
  return (
    <article className="wrapper cp-section">
      <SectionHeading mt={30}>Community Partners</SectionHeading>
      {/* hr */}
      {communityPartnersData.length > 0 && <hr />}

      <div className="cp-container">
        {communityPartnersData.map((partner) => (
          <CommunityCard {...partner} key={partner.title} />
        ))}
      </div>
    </article>
  );
};

const CommunityCard = ({ website, logo, title }) => {
  return (
    <>
      <div class="cp-card">
        <div class="cp-card__img">
          <a
            href={website}
            itemprop="image"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              class="img-special community-partners-img"
              loading="lazy"
              src={logo}
              alt={title}
              width={480}
              height={480}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default CommunityPartners;
