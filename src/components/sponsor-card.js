/** @jsx jsx */
import { jsx, Card } from "theme-ui";

export default ({ companyName, image }) => {
  return (
    <Card
      sx={{
        maxWidth: 256,
      }}
    >
      <img src={image} width={250} / >
      <div sx={{ textAlign: "center" }}>
        <h3 sx={{ color: "#2f2762" }}>{companyName}</h3>
      </div>
    </Card>
  );
};



