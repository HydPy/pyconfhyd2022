/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import FlexList from '../components/flex-list';
import { Header } from '../components/header';
import SectionHeading from '../components/section-heading';
import SpeakerCard from '../components/speaker-card';
import SpeakerData from '../data/speakers.yml';
import KeynoteData from '../data/keynotes.yml'

const Speaker = ({
  data,
}) => {

  return (
    <div className="body-wrap">
    <Header bg={"#2f2762"} classHeader={"absolute"}/>
    <div sx={{maxWidth:'1000px',margin:'auto',}}>
      <Container>
        <div sx={{display:'flex',justifyContent:'center'}}>
          <SectionHeading mt={100}>
            Keynotes
          </SectionHeading>
        </div>
        <FlexList
          sx={{
            justifyContent: 'center',
            alignContent: 'space-evenly'
          }}>
          {KeynoteData.map((keynote) => (
            <SpeakerCard
              key={keynote.id}
              as='li'
              {...keynote}
            />
          ))}
        </FlexList>
        <div sx={{display:'flex',justifyContent:'center'}}>
          <SectionHeading>
            Speakers
            </SectionHeading>
        </div>
        <FlexList
          sx={{
            justifyContent: 'center',
            alignContent: 'space-evenly'
          }}>
          {SpeakerData.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              as='li'
              {...speaker}
            />
          ))}
        </FlexList>
      </Container>
    </div>
    </div>
  )
}

export default Speaker;