import * as React from "react";

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
    <div>
      {children}
    </div>
  );
};

export default Layout;
