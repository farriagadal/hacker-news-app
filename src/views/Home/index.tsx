import ArticlesList from 'src/components/ArticlesList'
import SelectInput from 'src/components/SelectInput'
import Pagination from 'src/components/Pagination'
import { Container } from 'src/styles/Container'
import { SelectOption } from './styles'

const options = [
  { value: 'angular', label: <SelectOption><img src="/icons/angular-icon.png"/>Angular </SelectOption> },
  { value: 'react', label: <SelectOption><img src="/icons/react-icon.png"/>Reactjs </SelectOption> },
  { value: 'vue', label: <SelectOption><img src="/icons/vue-icon.png"/>Vuejs </SelectOption> }
]

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

export default function Home () {
  return (
    <Container>
      <SelectInput options={options} placeholder="Select your news" isSearchable={false} />
      <ArticlesList articles={articles} />
      <Pagination />
    </Container>
  )
}
