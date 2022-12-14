import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
};

export type IndexPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQueryQuery = { __typename?: 'Query', hello: string };


export const IndexPageQueryDocument = gql`
    query IndexPageQuery {
  hello
}
    `;

export function useIndexPageQueryQuery(options?: Omit<Urql.UseQueryArgs<IndexPageQueryQueryVariables>, 'query'>) {
  return Urql.useQuery<IndexPageQueryQuery, IndexPageQueryQueryVariables>({ query: IndexPageQueryDocument, ...options });
};