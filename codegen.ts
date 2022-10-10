const config = {
    schema: './src/graphql/schema/index.graphql',
    documents: "src/**/*.tsx",
    generates: {
       './src/graphql/__generated__/codgen/resolver-types.ts': {
            plugins: ["typescript", "typescript-resolvers"]
       },
       './src/graphql/__generated__/codgen/urql-types.ts': {
         plugins: ["typescript", "typescript-operations", "typescript-urql"]
      }
    }
 }
 export default config