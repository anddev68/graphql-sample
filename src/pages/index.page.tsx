import type { NextPage } from 'next'
import { gql } from 'urql'
import { useIndexPageQueryQuery } from '../graphql/__generated__/codgen/urql-types'

const query = gql`
  query IndexPageQuery {
    hello
  }
`

const Home: NextPage = () => {
  const [ result, reExecuteQuery ] = useIndexPageQueryQuery()

  return (
    <div>
      {result.data?.hello}
    </div>
  )
}

export default Home
