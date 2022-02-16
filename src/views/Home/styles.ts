import { styled } from 'src/stitches'

export const SelectContainer = styled('div', {
  // margin: '0 26px',
  margin: '38px 0',
  maxWidth: '240px',
  fontSize: '18px',
  fontFamily: 'Roboto',
  letterSpacing: '0.02em',
  // textTransform: 'uppercase',
  '&>label': {
    fontSize: '15px',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
    textTransform: 'none',
    marginBottom: '10px',
    display: 'block'
  }
})

export const SelectOption = styled('div', {
  display: 'flex',
  alignItems: 'center',
  img: {
    maxWidth: '24px',
    maxHeight: '24px',
    marginRight: '10px'
  }
})
