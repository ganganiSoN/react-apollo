"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
// const { gql } = require("graphql-tag");
exports.typeDefs = (0, graphql_tag_1.gql) `
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
