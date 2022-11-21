import React from "react";
import "../assets/stylesheets/application.scss";
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {HeroBanner} from '../components/heroBanner';
import {SEO} from "../components/seo";
import Sponsors from "./sponsors";
import Keynotes from "./keynotes";
import Venue from "./venue";
import TimeTable from "./timetable";

const IndexPage = () => {
  return (
    <div className="body-wrap">
      <Header classHeader={"absolute"} bg={"fff"}/>
      <HeroBanner />
      {/* <section id="speaker-sec"><Speakers /></section> */}
      <section id="keynotes"><Keynotes/></section>
      <section id="timetable"><TimeTable/></section>
      <section id="sponsors"><Sponsors/></section>
      <section id="venue"><Venue/></section>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => (
<>
<SEO />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
</>
)
