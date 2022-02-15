import { styled } from '../stitches'

export const Container = styled('div', {
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@sm': {
    maxWidth: '640px'
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
