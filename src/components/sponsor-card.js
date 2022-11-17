/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { DynamicImage } from "gatsby-plugin-image";

export default ({ id, companyName, imagePath, ...props }) => (
  <Card
    {...props}
    sx={{
      maxWidth: 256,
    }}
  >
    CARD: {imagePath}
    <img src={`../static/images/sponsors/${imagePath}`} />
    <div sx={{ textAlign: "center" }}>
      <h3 sx={{ color: "#2f2762" }}>{companyName}</h3>
    </div>
  </Card>
);
