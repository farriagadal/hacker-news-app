import { SelectContainer, SelectOption } from './styles'
import ArticlesList from 'src/components/ArticlesList'
import { Container } from 'src/styles/Container'
import Select from 'react-select'
// import angularIcon from 'src/public/icons/angular-icon.png'

const options = [
  { value: 'angular', label: <SelectOption><img src="/icons/angular-icon.png"/>Angular </SelectOption> },
  { value: 'react', label: <SelectOption><img src="/icons/react-icon.png"/>Reactjs </SelectOption> },
  { value: 'vue', label: <SelectOption><img src="/icons/vue-icon.png"/>Vuejs </SelectOption> }
]

export default function Home () {
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
      marginTop: '-7px'
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
      fontWeight: '400'
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

  const articles = [
    {
      created_at: '2022-02-16T01:08:32.000Z',
      title: null,
      url: null,
      author: 'csdvrx',
      points: null,
      story_text: null,
      comment_text: '&gt; I&#x27;m definitely onboard with the examples, where influential people&#x27;s votes influence others, or an influential person votes against an expected outcome and draws ires<p>In fact, I see that as the potential #1 usecase: enabling zero-trust voting, with the &quot;drop&quot; simply being a way to instantiate the set of voters at time t to prevent a takeover by freshly created accounts created just for the vote.<p>A weighting by history (say give 20% more weight to a vote per year the address has existed) and activity (say on HN to give more weight  to people who post regularly comments that do not get too many downvotes) could have interesting feature for online communities',
      num_comments: null,
      story_id: 30340648,
      story_title: 'Show HN: StealthDrop – Anonymous Crypto Airdrops Using ZK Proofs',
      story_url: 'https://github.com/nalinbhardwaj/stealthdrop',
      parent_id: 30355067,
      created_at_i: 1644973712
    },
    {
      created_at: '2022-02-16T01:08:32.000Z',
      title: null,
      url: null,
      author: 'csdvrx',
      points: null,
      story_text: null,
      comment_text: '&gt; I&#x27;m definitely onboard with the examples, where influential people&#x27;s votes influence others, or an influential person votes against an expected outcome and draws ires<p>In fact, I see that as the potential #1 usecase: enabling zero-trust voting, with the &quot;drop&quot; simply being a way to instantiate the set of voters at time t to prevent a takeover by freshly created accounts created just for the vote.<p>A weighting by history (say give 20% more weight to a vote per year the address has existed) and activity (say on HN to give more weight  to people who post regularly comments that do not get too many downvotes) could have interesting feature for online communities',
      num_comments: null,
      story_id: 30340648,
      story_title: 'Show HN: StealthDrop – Anonymous Crypto Airdrops Using ZK Proofs',
      story_url: 'https://github.com/nalinbhardwaj/stealthdrop',
      parent_id: 30355067,
      created_at_i: 1644973712
    },
    {
      created_at: '2022-02-16T01:08:32.000Z',
      title: null,
      url: null,
      author: 'csdvrx',
      points: null,
      story_text: null,
      comment_text: '&gt; I&#x27;m definitely onboard with the examples, where influential people&#x27;s votes influence others, or an influential person votes against an expected outcome and draws ires<p>In fact, I see that as the potential #1 usecase: enabling zero-trust voting, with the &quot;drop&quot; simply being a way to instantiate the set of voters at time t to prevent a takeover by freshly created accounts created just for the vote.<p>A weighting by history (say give 20% more weight to a vote per year the address has existed) and activity (say on HN to give more weight  to people who post regularly comments that do not get too many downvotes) could have interesting feature for online communities',
      num_comments: null,
      story_id: 30340648,
      story_title: 'Show HN: StealthDrop – Anonymous Crypto Airdrops Using ZK Proofs',
      story_url: 'https://github.com/nalinbhardwaj/stealthdrop',
      parent_id: 30355067,
      created_at_i: 1644973712
    },
    {
      created_at: '2022-02-16T01:08:32.000Z',
      title: null,
      url: null,
      author: 'csdvrx',
      points: null,
      story_text: null,
      comment_text: '&gt; I&#x27;m definitely onboard with the examples, where influential people&#x27;s votes influence others, or an influential person votes against an expected outcome and draws ires<p>In fact, I see that as the potential #1 usecase: enabling zero-trust voting, with the &quot;drop&quot; simply being a way to instantiate the set of voters at time t to prevent a takeover by freshly created accounts created just for the vote.<p>A weighting by history (say give 20% more weight to a vote per year the address has existed) and activity (say on HN to give more weight  to people who post regularly comments that do not get too many downvotes) could have interesting feature for online communities',
      num_comments: null,
      story_id: 30340648,
      story_title: 'Show HN: StealthDrop – Anonymous Crypto Airdrops Using ZK Proofs',
      story_url: 'https://github.com/nalinbhardwaj/stealthdrop',
      parent_id: 30355067,
      created_at_i: 1644973712
    },
    {
      created_at: '2022-02-16T01:08:32.000Z',
      title: null,
      url: null,
      author: 'csdvrx',
      points: null,
      story_text: null,
      comment_text: '&gt; I&#x27;m definitely onboard with the examples, where influential people&#x27;s votes influence others, or an influential person votes against an expected outcome and draws ires<p>In fact, I see that as the potential #1 usecase: enabling zero-trust voting, with the &quot;drop&quot; simply being a way to instantiate the set of voters at time t to prevent a takeover by freshly created accounts created just for the vote.<p>A weighting by history (say give 20% more weight to a vote per year the address has existed) and activity (say on HN to give more weight  to people who post regularly comments that do not get too many downvotes) could have interesting feature for online communities',
      num_comments: null,
      story_id: 30340648,
      story_title: 'Show HN: StealthDrop – Anonymous Crypto Airdrops Using ZK Proofs',
      story_url: 'https://github.com/nalinbhardwaj/stealthdrop',
      parent_id: 30355067,
      created_at_i: 1644973712
    }
  ]

  return (
    <Container>
      <SelectContainer>
        <Select options={options} styles={selectStyles} placeholder="Select your news" />
      </SelectContainer>
      <ArticlesList articles={articles} />
    </Container>
  )
}
