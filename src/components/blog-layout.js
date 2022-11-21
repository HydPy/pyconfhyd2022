import * as React from "react";
import { Header } from "./header";
import { Footer } from './footer';
import bookImage from "../images/faq.webp";

const BlogLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Header bg={"#000"} classHeader={"header-misc"}/>
      <div class="body-wrap">
        <section class="absolute w-screen -z-10 h-[80vh]">
          <img src={bookImage} alt="hero background" class="h-full" height="100%" width="100%" />
        </section>
        <section class="mx-auto z-10 pt-40 lg:px-5">
          <section class="blog-container bg-white .bg-black-shadow">
            <h1 class="text-center coc-title">{pageTitle}</h1>
            {children}
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogLayout;
