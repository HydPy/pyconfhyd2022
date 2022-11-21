import * as React from "react";
import { graphql } from "gatsby";
import { Header } from "../../components/header";
import Layout from "./../../components/layout";
import bookImage from "../../static/images/faq.webp";

const MiscPage = ({ data, children }) => {
  return (
    <>
      <Header classHeader={"header-misc"}/>
      <Layout pageTitle="layout test">
        <div class="body-wrap">
          <section class="absolute w-screen -z-10 h-[80vh]">
            <img src={bookImage} alt="hero background" class="h-full" height="100%" width="100%" />
          </section>
          <section class="mx-auto z-10 pt-40 lg:px-5">
            <section class="blog-container bg-white .bg-black-shadow">
              <h1 class="text-center coc-title">{data.mdx.frontmatter.title}</h1>
                {children}
            </section>
          </section>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

// export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>;

export default MiscPage;
