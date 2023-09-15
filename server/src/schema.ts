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
    description: String
    numberofViews: Int
    modules: [Module!]!
  }

  type Module {
    id: ID!
    title: String
    length: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }
`;
