import React from 'react';
import './track-card-detail.scss';
import { DocumentNode } from 'graphql';
import { gql, useQuery } from '@apollo/client';
import { Track } from '../../../__generated__/graphql';
import AuthorDetail from '../author-detail/author-detail';

export default function TrackCardDetail(props: {
  navigate: (url: string, configuration: Object) => any;
  trackId: string;
}) {
  const { data, error, loading } = useQuery(fetchSingleTrack(), {
    variables: { trackId: props.trackId },
  });
  if (loading) {
    return 'Loading...';
  }
  if (error) {
    return `Error ${error.message}`;
  }
  const track: Track = data?.track;

  return (
    <section className="track-card-detail">
      Track Card Detail work {JSON.stringify(data)}
      <img src={track?.thumbnail || ''}></img>
      <label> {track?.title} </label>
      <hr></hr>
      <div>
        <section>
          <label>Track details</label>
          <label>{track?.numberofViews || 0} View(s)</label>
          <label>{track.modules?.length} modules</label>
          <label>{track.length}m</label>
        </section>
        <AuthorDetail author={track?.author} track={track}></AuthorDetail>
      </div>
    </section>
  );

  function fetchSingleTrack(): DocumentNode {
    return gql(
      `query GetSingleTrack($trackId: ID!) {
            track(id: $trackId) {
                id
                thumbnail
                title
                author {
                    id
                    name
                    photo
                }
                length
                modulesCount
                description
                numberofViews
                modules {
                    id
                    title
                    length
                }
            }
        }`
    );
  }
}
