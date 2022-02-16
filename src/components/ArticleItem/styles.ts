import { styled } from 'src/stitches'

export const Item = styled('div', {
  display: 'flex',
  borderRadius: 6,
  border: 'solid 2px #d4d4d4',
  backgroundColor: '#fff',
  height: 90
})

export const TextSection = styled('div', {
  display: 'grid',
  alignSelf: 'center',
  padding: '0 25px',
  span: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 11,
    color: '#767676',
    img: {
      width: 16,
      marginRight: 10
    }
  },
  p: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: '#6b6b6b',
    margin: 0,
    marginTop: 5
  }
})

export const LikeSection = styled('div', {
  background: '#ccc'
})
