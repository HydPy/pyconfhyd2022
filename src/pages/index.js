import React from "react";
import "../static/stylesheets/application.scss";
import {Header} from '../components/header';
import {HeroBanner} from '../components/heroBanner';
import {SEO} from "../components/seo";
import Speaker from "./speakers";

const IndexPage = () => {
  return (
    <div className="body-wrap">
      <Header classHeader={"absolute"} bg={"fff"}/>
      <HeroBanner />
      <section id="speaker-sec"><Speaker /></section>
    </div>
  );
};

export default IndexPage;

export const Head = () => (<SEO />)
