import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { mocks } from './static-data';
import { resolvers } from './resolvers/resolvers';
import { TrackAPI } from './track-api/track-api';

// const { ApolloServer } = require("@apollo/server");
// const { startStandaloneServer } = require("@apollo/server/standalone");
// const typeDefs = require("./schema");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log(':::: Server is running! Query at', url);
}

startApolloServer();

// const books = [
//     {
//         title: 'The Awakening',
//         author: 'Kate Chopin'
//     },
//     {
//         title: 'City of Glass',
//         author: 'Paul Auster'
//     }
// ];

// const authors = [
//     {
//         name: 'Test 1'
//     }
// ]

// const typeDefs = `
//     type Book {
//         title: String
//         author: Author
//     }

//     type Author {
//         name: String
//         books: [Book]
//     }

//     type Query {
//         books: [Book]
//         authors: [Author]
//     }
// `

// const resolvers = {
//     Query: {
//         books: () => books,
//         authors: () => authors
//     }
// }

// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// });

// const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 }
// });

// console.log('::: Server ready at:', url);
