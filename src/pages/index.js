import React from "react";
import "../static/stylesheets/application.scss";
import {Header} from '../components/header';
import {HeroBanner} from '../components/heroBanner';
import {SEO} from "../components/seo";

const IndexPage = () => {
  return (
    <div className="body-wrap">
      <Header />
      <HeroBanner />
    </div>
  );
};

export default IndexPage;

export const Head = () => (<SEO />)
