/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default props =>
  <Styled.h2
    {...props}
    sx={{
      width: '100%',
      textAlign: 'center',
      mt: 5,
      mb: 2,
      display: 'inline-block',
      outline: 'none',
      cursor: 'pointer',
      fontSize: '30px',
      // lineHeight: '20px',
      fontWeight: '600',
      borderRadius: '8px',
      padding: '13px 23px',
      border: '1px solid  #646464',
      transition: 'box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s',
      background: '#4584b6',
      color: '#ffde57',
    }}
  />
