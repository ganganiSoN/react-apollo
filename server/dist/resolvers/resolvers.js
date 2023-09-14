"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        // get all tracks
        tracksForHome: (parent, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    },
};
