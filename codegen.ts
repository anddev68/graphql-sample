const config = {
    schema: './src/graphql/schema/index.graphql',
    // documents: "src/**/*.ts",
    generates: {
       './src/graphql/__generated__/codgen/resolver-types.ts': {
            plugins: ["typescript", "typescript-resolvers"]
       }
    }
 }
 export default config