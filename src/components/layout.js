import * as React from "react";
import "../assets/stylesheets/application.scss";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Header } from "../components/header";
import { Footer } from '../components/footer';
import "../assets/stylesheets/misc.css";

const Layout = ({ pageTitle, image, children }) => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)
  const imagePath = getImage(image)

  return (
    <>
      <Header classHeader="header-misc" />
      <div className="misc body-wrap">
        <section class="absolute w-screen -z-10 h-[80vh]">
          <GatsbyImage
            image={imagePath}
            alt="hero background"
            className="block-display"
            height="100%"
            width="100%"
          />
          {/* <img src={bookImage} alt="hero background" class="h-full" height="100%" width="100%" /> */}
        </section>
        <section class="container mx-auto z-10 pt-40 lg:px-5">
          <section class="bg-white container .bg-black-shadow">
            <h1 class="text-center coc-title">{pageTitle}</h1>
            {children}
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
