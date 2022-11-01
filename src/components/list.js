/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default props =>
  <Styled.ul
    {...props}
    sx={{
      listStyle: 'none',
      p: 0,
    }}
  />
