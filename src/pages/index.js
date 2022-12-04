import React from "react";
import "../assets/stylesheets/application.scss";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { HeroBanner } from "../components/heroBanner";
import { SEO } from "../components/seo";
import Sponsors from "./sponsors";
import Keynotes from "./keynotes";
import Venue from "./venue";
import TimeTable from "./timetable";
import ScrollToTop from './../components/ScrollToTop';
import CommunityPartners from "./../components/CommunityPartners";

const IndexPage = () => {
  return (
    <>
      <div className="body-wrap">
        <Header classHeader="header-sticky" />
        <HeroBanner />
        {/* <section id="speaker-sec"><Speakers /></section> */}
        <section id="keynotes">
          <Keynotes />
        </section>
        <section id="timetable">
          <TimeTable />
        </section>
        <section id="sponsors">
          <Sponsors />
        </section>
        <section id="community-partners">
          <CommunityPartners />
        </section>
        <section id="venue">
          <Venue />
        </section>
        <Footer />
        {/* scroll top top component */}
        <ScrollToTop />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <SEO />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </>
);
