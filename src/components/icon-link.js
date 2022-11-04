/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <a
    {...props}
    sx={{
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
      },
      '& > svg': {
        display: 'inline-block',
        verticalAlign: 'middle',
      }
    }}
  />
