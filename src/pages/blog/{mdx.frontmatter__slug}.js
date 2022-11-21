import * as React from "react";
import { graphql } from "gatsby";
import BlogLayout from '../../components/blog-layout'

const BlogPage = ({ data, children }) => {
  return (
    <>
    <BlogLayout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <hr/>
      {children}
    </BlogLayout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export default BlogPage;

export const Head = () => (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  </>
)
