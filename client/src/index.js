import { createRoot } from 'react-dom/client';
import React, { useState, useTransition } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';
import { environment } from '../environment';
import Track from './pages/tracks/tracks';
import TrackCardDetail from './pages/tracks/track-card-detail/track-card.detail';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('app'));
root.render(
  <ApolloProvider client={client}>
    <Router></Router>
  </ApolloProvider>
);

function Router() {
  const [page, setPage] = useState('/');
  const [configuration, setConfiguration] = useState('/');
  const [isPending, startTransition] = useTransition();

  function navigate(url, configuration) {
    startTransition(() => {
      console.log('::: conf', configuration);
      setPage(url);
      setConfiguration(configuration);
    });
  }

  if (page === '/') {
    return <Track navigate={navigate}></Track>;
  } else if (page === 'track-card-detail') {
    return (
      <TrackCardDetail
        navigate={navigate}
        trackId={configuration.id}
      ></TrackCardDetail>
    );
  }
}
