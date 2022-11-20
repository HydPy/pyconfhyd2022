/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

export default ({ id, companyName, imagePath, ...props }) => {
  const sponsorQuery = graphql`
    query ($imagePath: String) {
      allFile(filter: { name: { eq: $imagePath } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `;
  return (
    <Card
      sx={{
        maxWidth: 256,
      }}
    >
      <img src={imagePath} />
      <div sx={{ textAlign: "center" }}>
        <h3 sx={{ color: "#2f2762" }}>{companyName}</h3>
      </div>
    </Card>
  );
};
