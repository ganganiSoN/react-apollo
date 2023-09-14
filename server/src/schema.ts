import { gql } from 'graphql-tag';
// const { gql } = require("graphql-tag");

export const typeDefs = gql`
  type Track {
    id: ID!
    thumbnail: String
    title: String!
    author: Author!
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    tracksForHome: [Track!]!
  }
`;
