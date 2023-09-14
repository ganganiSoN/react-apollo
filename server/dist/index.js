"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers/resolvers");
const track_api_1 = require("./track-api/track-api");
// const { ApolloServer } = require("@apollo/server");
// const { startStandaloneServer } = require("@apollo/server/standalone");
// const typeDefs = require("./schema");
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new server_1.ApolloServer({
            typeDefs: schema_1.typeDefs,
            resolvers: resolvers_1.resolvers,
        });
        const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
            context: () => __awaiter(this, void 0, void 0, function* () {
                const { cache } = server;
                return {
                    dataSources: {
                        trackAPI: new track_api_1.TrackAPI({ cache }),
                    },
                };
            }),
        });
        console.log(':::: Server is running! Query at', url);
    });
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
