/** @jsx jsx */
import { jsx, } from 'theme-ui'

export default ({
  width = 280,
  ...props
}) =>
  <div
    {...props}
    sx={{
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: width,
      p: 20,
      m: 20,
      borderRadius: 10,
      // borderColor: '#2f2762',
      // borderColor: '#D3D3D3',
      borderColor:'#FFD580',
      borderStyle: 'solid',
      borderWidth: 'light',
      // boxShadow: '0 0 41px 0 rgba(0,0,0,0.25)'  
      boxShadow: '0 0 8px 0 rgba(0,0,0,16%)'   
    }}
  />
