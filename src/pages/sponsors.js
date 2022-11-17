/** @jsx jsx */
import { Container, jsx } from "theme-ui";
import FlexList from "../components/flex-list";
import SectionHeading from "../components/section-heading";
import SponsorCard from "../components/sponsor-card";
import SponsorData from "../data/sponsors.yml";
import { Header } from './../components/header';

const Sponsors = ({ data }) => {
  return (
    <div className="body-wrap">
      <Header bg={"#2f2762"} classHeader={"absolute"} />
      <div sx={{ maxWidth: "1000px", margin: "auto" }}>
        <Container>
          <div sx={{ display: "flex", justifyContent: "center" }}>
            <SectionHeading mt={100}>Sponsors</SectionHeading>
          </div>
          <FlexList
            sx={{
              justifyContent: "center",
              alignContent: "space-evenly",
            }}
          >
            {SponsorData.map((sponsor) => (
              <SponsorCard key={sponsor.id} as="li" {...sponsor} />
            ))}
          </FlexList>
        </Container>
      </div>
    </div>
  );
};

export default Sponsors;
