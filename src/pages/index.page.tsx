import type { NextPage } from 'next'
import { gql } from 'urql'
import { useIndexPageQueryQuery } from '../graphql/__generated__/codgen/urql-types'

// Collocationを意識したいため、GraphQL DocumentsとReact Componentsは同じ階層に置く
gql`
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
