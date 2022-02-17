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
