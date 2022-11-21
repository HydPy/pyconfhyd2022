import * as React from "react";
import "../assets/stylesheets/misc.css";

const Layout = ({ pageTitle, children }) => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)

  return (
    <div className='misc'>
      {children}
    </div>
  );
};

export default Layout;
