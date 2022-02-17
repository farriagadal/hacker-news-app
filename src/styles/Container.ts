import { styled } from '../stitches'

export const Container = styled('div', {
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 'calc(100% - 40px)',
  padding: '0 20px',
  '@sm': {
    maxWidth: '640px',
    padding: '0'
  },
  '@md': {
    maxWidth: '768px'
  },
  '@lg': {
    maxWidth: '1024px'
  },
  '@xl': {
    maxWidth: '1172px'
  }
})
