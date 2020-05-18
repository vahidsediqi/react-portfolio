import React from 'react';
import { Player } from 'video-react';

export const Video = (props) => {
  return (
    <Player style={{height: '200px', width: 'auto'}}
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};

