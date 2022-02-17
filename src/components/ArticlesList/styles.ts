import { styled } from 'src/stitches'

export const List = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  columnGap: 40,
  rowGap: 30,
  '@sm': {
    gridTemplateColumns: '1fr 1fr'
  }
})

export const LoadingIcon = styled('img', {
  filter: 'brightness(0.6)',
  marginLeft: '50%',
  transform: 'translateX(-50%)',
  marginTop: '100px',
  marginBottom: '150px'
})

export const EmptyState = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.43,
  letterSpacing: 0.25,
  color: '#6b6b6b',
  margin: 0,
  marginTop: 80
})
