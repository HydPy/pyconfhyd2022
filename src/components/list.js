/** @jsx jsx */
import { jsx, } from 'theme-ui'

export default props =>
  <ul
    {...props}
    sx={{
      listStyle: 'none',
      p: 0,
    }}
  />
