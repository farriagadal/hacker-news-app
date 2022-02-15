import { styled } from 'src/stitches'

export const List = styled('div', {
  marginTop: '70px',
  marginBottom: '63px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  a: {
    width: 98,
    height: '28px',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.75',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#606060',
    textDecoration: 'none',
    border: 'solid 1px #d6d6d6',
    '&[aria-current]': {
      border: 'solid 1px #1797ff',
      color: '#1797ff'
    },
    '&:first-child': {
      borderTopLeftRadius: '2px',
      borderBottomLeftRadius: '2px'
    },
    '&:last-child': {
      borderTopRightRadius: '2px',
      borderBottomRightRadius: '2px'
    }
  }
})
