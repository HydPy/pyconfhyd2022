/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'

export default ({
  time,
  speaker,
  title,
}) =>
  <Flex
    sx={{
      m:4,
      p:4,
      backgroundColor:'#2f2762',
      flexWrap: [ 'wrap','nowrap'],
      alignItems: 'baseline',
      color: 'white'
      // boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
    }}>
    <div
      sx={{
        flex: 'none',
        width: [ '20%',],
      }}>
      <Styled.h3
        sx={{
          fontSize: 3,
        }}>
        {time}
      </Styled.h3>
    </div>
    <div
      sx={{
        flex: 'none',
        width: [ '50%'],
      }}>
      <Styled.h4
        sx={{
          fontSize: 3,
        }}>
        {title}
      </Styled.h4>
      {speaker}
    </div>
  </Flex>

