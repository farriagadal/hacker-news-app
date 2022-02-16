import Select from 'react-select'
import { SelectContainer } from './styles'
// import { Container } from 'src/styles/Container'

export default function SelectInput (props: any) {
  const selectStyles = {
    control: (base: any) => ({
      ...base,
      padding: '0 12px',
      background: 'transparent',
      border: 'solid 1px #2e2e2e',
      borderRadius: 4,
      cursor: 'pointer',
      boxShadow: 'none',
      height: 32,
      minHeight: 32,
      '&:hover': {
        borderColor: '#1797ff'
      }
    }),
    placeholder: (base: any) => ({
      ...base,
      color: '#343434',
      fontWeight: '400',
      fontSize: 14,
      letterSpacing: 'normal',
      marginTop: '-2px'
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      color: '#343434',
      cursor: 'pointer'
    }),
    option: (base: any, { isSelected } : {isSelected:any}) => {
      return {
        ...base,
        fontSize: 14,
        fontWeight: '400',
        '&:hover': {
          backgroundColor: isSelected ? '#ccc' : '#fff'
        },
        backgroundColor: isSelected ? '#ddd' : '#fff',
        color: '#343434',
        cursor: 'pointer'
      }
    },
    menuList: (base: any) => ({
      ...base,
      padding: 0
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: 'none',
      paddingRight: 0
    }),
    valueContainer: (base: any) => ({
      ...base,
      paddingLeft: 0,
      fontSize: 14,
      fontWeight: '400',
      height: 30
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      paddingRight: 0
    }),
    singleValue: (base: any) => ({
      ...base,
      color: '#343434',
      fontWeight: '400',
      marginTop: '-3px'
    }),
    indicatorsContainer: (base: any) => ({
      ...base,
      color: '#343434',
      marginTop: '-3px'
    })
  }
  return (
    <SelectContainer>
      <Select options={props.options} styles={selectStyles} placeholder="Select your news" isSearchable={false} />
    </SelectContainer>
  )
}
