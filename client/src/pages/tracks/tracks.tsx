import React, { StrictMode, Component } from 'react';
import './tracks.scss';
import { DocumentNode, gql, useQuery } from '@apollo/client';
import TrackCard from './track-card/track-card';
import { Track } from '../../__generated__/graphql';

// export default class Track extends Component {

//   render(): any {
//     return <section>Track Component Work</section>;
//   }

//   fetchTrackData(): QueryResult<any, OperationVariables> {
//     return useQuery(
//       gql(`
//     query GetTracks {
//         tracksForHome {
//             id
//             title
//         }
//     }`)
//     );
//   }
// }

export default function Track(props: {
  navigate: (url: string, configuration?: Object) => any;
}) {
  const { loading, error, data } = useQuery(trackQuery());
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error...';
  }

  return (
    <section className="track-wrapper">
      {data?.tracksForHome?.map((d: Track) => (
        <TrackCard key={d?.id} track={d} navigate={props.navigate}></TrackCard>
      ))}{' '}
    </section>
  );

  //   function fetchTrackData() {
  //     const { loading, error, data } = useQuery(trackQuery);
  //     console.log('::: loading', loading);
  //     console.log('::: error', error);
  //     console.log('::: data', data);
  //   }

  function trackQuery(): DocumentNode {
    return gql(`
        query ExampleQuery {
            tracksForHome {
                id
                length
                modulesCount
                thumbnail
                title
                author {
                    name
                    photo
                }
            }
        }`);
  }
}
