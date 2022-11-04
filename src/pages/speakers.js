/** @jsx jsx */
import { Container, jsx, Styled } from 'theme-ui';
import FlexList from '../components/flex-list';
import { Header } from '../components/header';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading'
import SpeakerCard from '../components/speaker-card';
import SpeakerData from '../data/speakers.yml';

export default ({
  data,
}) => {

  return (
    <div className="body-wrap">
    <Header bg={"#2f2762"} classHeader={"absolute"}/>
    <Layout>
      <Container>
        <SectionHeading>
        Speakers
        </SectionHeading>
        <FlexList
          sx={{
            justifyContent: 'center',
            alignContent: 'space-evenly'
          }}>
          {SpeakerData.map((speaker,index) => (
            <SpeakerCard
              key={speaker.id}
              as='li'
              {...speaker}
            />
          ))}
        </FlexList>
      </Container>
    </Layout>
    </div>
  )
}
