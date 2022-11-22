import * as React from "react";
import { graphql } from "gatsby";
import Layout from "./../components/layout";

const MiscPage = ({ data, children }) => {
  return (
    <>
      <Layout pageTitle={data.mdx.frontmatter.title} image={data.mdx.frontmatter.hero_image}>
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
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

// export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>;

export const Head = () => (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  </>
)

export default MiscPage;
