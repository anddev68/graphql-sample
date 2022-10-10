import type { NextApiRequest, NextApiResponse } from 'next'
import { createServer, YogaNodeServerInstance } from '@graphql-yoga/node'
import { resolvers } from '../../graphql/resolvers'
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

type YogaServer =  YogaNodeServerInstance<any, any, any> 

// TODO: 呼び方を考える
const createYogaServer = (): YogaServer => {
  console.log("creating Yoga Server.")
  const typeDefs = loadSchemaSync("src/graphql/schema/index.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

  return createServer({
    schema: {
      typeDefs,
      resolvers,
    },
    context: () => {
      // TODO
    },
    graphiql: process.env.NODE_ENV !== "production",
    endpoint: "/api/graphql"
  })
}

const yogaServer = createYogaServer()


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(!yogaServer) {
    throw new Error("Yoga Server must be initialized.")
  }

  return yogaServer.handle(req, res)
}
