import { styled } from 'src/stitches'

export const List = styled('div', {
  display: 'flex',
  columnGap: 8,
  justifyContent: 'center',
  marginTop: 96,
  marginBottom: 96,
  button: {
    cursor: 'pointer',
    width: 32,
    height: 32,
    fontSize: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.65)',
    border: 'solid 1px #d9d9d9',
    borderRadius: 6,
    transition: '0.2s',
    // color: #fff,
    // b: {
    //   fontWeight: 'bold'
    // },
    '&:hover': {
      color: '#1890ff',
      // backgroundColor: '#58afff',
      borderColor: '#1890ff'
    },
    '&.active': {
      color: '#fff',
      backgroundColor: '#1890ff',
      borderColor: '#1890ff'
    },
    '&:active': {
      color: '#fff',
      backgroundColor: '#1890ff',
      borderColor: '#1890ff'
    }
  }
})
