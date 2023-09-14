import React from 'react';
import { Author, Track } from '../../../__generated__/graphql';
import './author-detail.scss';

export default function AuthorDetail(props: { author: Author; track: Track }) {
  const { name, photo } = props.author;
  const { length, modulesCount } = props.track;
  return (
    <section className="author-detail">
      <img className="author-avtar" src={photo || ''}></img>
      <div className="author-info-wrapper">
        <label>{name}</label>
        <div>
          <label className="module-count"> {modulesCount} modules </label>
          <label className="length-label"> {length}m </label>
        </div>
      </div>
    </section>
  );
}
