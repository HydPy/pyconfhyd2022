/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import List from '../components/list'
import { Header } from '../components/header'
import Confdata from '../data/conference-schedule.yml'
import Workdata from '../data/workshop-schedule.yml'
import SectionHeading from '../components/section-heading'
import { useState } from 'react'
import ExperimentalSi from '../components/experimental-si'

export const buttonsx = (show) => {
  return show?{
      display: 'inline-block',
      outline: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '400',
      borderRadius: '8px',
      padding: '14px 24px',
      border: 'none',
      transition: 'box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s',
      // background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)',
      background: '#ec5d25',
      color: '#fff',}:
      {
        display: 'inline-block',
        outline: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '300',
        borderRadius: '8px',
        padding: '13px 23px',
        border: '1px solid #222222',
        transition: 'box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s',
        background: '#fff',
        color: '#222222',
        "&:hover": {
            borderColor: '#000000',
            background: '#f7f7f7',
        }
    
      }
}

const Schedule = ({data})=> {
  const conferenceschedule = Confdata
  const workshopschedule = Workdata
  
  const [show,setShow] = useState(true)
  return (
    <div className="body-wrap">
    <Header bg={"#2f2762"} classHeader={"absolute"}/>
    <div sx={{maxWidth:'900px',margin:'auto'}}>
      <Container>
        <div sx={{display:'flex',justifyContent:'center'}}>
          <SectionHeading>
            Schedule
            </SectionHeading>
        </div>
        <div sx={{
          m:3,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <button sx={buttonsx(show)} onClick={()=>setShow(true)}>Conference</button>
          <button sx={buttonsx(!show)} onClick={()=>setShow(false)}>Workshop</button>
        </div>
        {
          show &&
            <div>
              <List>
                {conferenceschedule.map(item => (
                  <li key={item.time}>
                    <ExperimentalSi {...item} />
                  </li>
                ))}
              </List>
            </div>
        }
        {
          !show &&
          <div>
              <List>
                {workshopschedule.map(item => (
                  <li key={item.time}>
                    <ExperimentalSi {...item} />
                  </li>
                ))}
              </List>
            </div>
        }
      </Container>
    </div>
    </div>
  )
}

export default Schedule;