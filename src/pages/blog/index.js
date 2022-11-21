import * as React from "react";
import { graphql } from "gatsby";
import { jsx, Container } from "theme-ui";
import SectionHeading from "../../components/section-heading";
import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import Layout from "./../../components/layout";
import bookImage from "../../static/images/faq.webp";

const BlogPage = () => {
    return (
        <div className="body-wrap">
            <Header classHeader={"header-misc"}/>
            <Container p={5}>
                <article>
                <SectionHeading mt={30} style={{display:'flex', justifyContent: 'center'}}>All Blogs</SectionHeading>
                </article>
            </Container>
            <Footer />
        </div>
    );
};

export const query = graphql`
  query {
    allMdx {
        nodes {
            frontmatter {
                title
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
