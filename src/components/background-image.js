/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({
  src,
  ratio = 1,
  ...props
}) =>
  <div
    {...props}
    sx={{
      width: '100%',
      height: 0,
      pb: (ratio * 100) + '%',
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 9999,
      borderColor: '#2f2762',
      // borderColor: '#D3D3D3',
      // borderColor:'#FFD580',
      borderStyle: 'solid',
      borderWidth: 'light',
      boxShadow: '0 0 8px 0 rgba(0,0,0,16%)'   
    }}
  />
