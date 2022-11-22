import * as React from "react";
import { Link, graphql } from "gatsby";
import BlogLayout from '../../components/blog-layout'

const BlogPage = ({ data, children }) => {
  return (
    <>
    <BlogLayout pageTitle="All Blogs">
        {
            data.allMdx.nodes.map((node) => (
            <>
            <article key={node.id}>
                <h3><Link to={`/blog/${node.frontmatter.slug}`} className="blog-link">{node.frontmatter.title}</Link></h3>
                <p>Posted: {node.frontmatter.date}</p>
            </article>
            <hr/>
            </>
            ))
        }
    </BlogLayout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(
        sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {type: {eq: "blog"}}}
    ) {
        nodes {
            frontmatter {
                title
                slug
                date(formatString: "MMMM D, YYYY")
            }
            id
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
