import React, { StrictMode } from 'react';
import './track-card.scss';
import { Track } from '../../../__generated__/graphql';
import AuthorDetail from '../author-detail/author-detail';

export default function TrackCard(props: {
  track: Track;
  navigate: (url: string, configuration: Object) => any;
}) {
  const { title, thumbnail, author, length, id } = props.track;
  return (
    <section
      className="track-card"
      onClick={() => props.navigate('track-card-detail', { id: id })}
    >
      <img src={thumbnail || ''}></img>
      <div className="track-detail-wraper">
        <h1> {title} </h1>
        <AuthorDetail author={author} track={props.track}></AuthorDetail>
      </div>
    </section>
  );
}
