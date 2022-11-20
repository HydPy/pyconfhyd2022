/** @jsx jsx */
import {
  GitHub, Linkedin, Twitter
} from 'react-feather'
import { jsx, } from 'theme-ui'
import BackgroundImage from './background-image'
import Card from './card'
import IconLink from './icon-link'

export default ({
  id,
  name,
  image,
  bio,
  company,
  twitter,
  github,
  linkedin,
  ...props
}) =>
  <Card
    {...props}>
    <BackgroundImage
      src={image}
      sx={{
        mb: 4
      }}
    />
    <div sx={{textAlign: 'center',}}>
    <h3 sx={{color: '#2f2762'}}>
      {name}
    </h3>
    <div
      sx={{
        fontSize: 1,
        fontWeight: 'bold',
        mb: 2,
        color: 'grey'
      }}>
      {company}
    </div>
    <p sx={{
        mb: 0,
        fontSize:2,
        fontWeight: 'medium'
      }}>
      {bio}</p>

    {/* <Flex mx={-2}> */}
      {twitter && (
        <IconLink href={twitter}>
          <Twitter />
        </IconLink>
      )}
      {github && (
        <IconLink href={github}>
          <GitHub />
        </IconLink>
      )}
      {
        linkedin && (
          <IconLink href={linkedin}>
            <Linkedin />
          </IconLink>
        )
      }
    {/* </Flex> */}
    </div>
  </Card>
