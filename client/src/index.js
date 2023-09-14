import { createRoot } from 'react-dom/client';
import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';
import { environment } from '../environment';
import Track from './pages/tracks/tracks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('app'));
root.render(
  <ApolloProvider client={client}>
    {/* <button onClick={() => fetchGreeting()}>Hello World</button>  */}
    <Track></Track>
  </ApolloProvider>
);

// async function fetchGreeting() {
//     const response = await fetch(GRAPHQL_URL, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             query: `
//             query {
//                 books {
//                     title
//                 }
//                 authors {
//                     name
//                 }
//             }`
//         })
//     });

//     const responseBody = await response.json();
//     console.log(responseBody);
// }
