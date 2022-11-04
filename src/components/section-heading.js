/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <h3
    {...props}
    sx={{
      mt: props.mt,
      textAlign: 'center',
      display: 'inline-block',
      outline: 'none',
      cursor: 'pointer',
      fontSize: '20px',
      // lineHeight: '20px',
      fontWeight: '400',
      borderRadius: '4px',
      padding: '20px 80px',
      border: '10px solid #4584b6',
      transition: 'box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s',
      background: '#646464',
      color: '#ffde57',
    }}
  />
