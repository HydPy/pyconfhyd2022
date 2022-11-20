import * as React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/header";
import Layout from "./../components/layout";
import "../assets/stylesheets/application.scss";

const MiscPage = ({ data, children }) => {
  return (
    <>
      <Header classHeader={"header-misc"} />
      {data}
      <Layout pageTitle="layout test">
        {children}
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
