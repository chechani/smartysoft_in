import React from 'react';
import './index.css';

const YouTubeEmbed = ({width, height }) => {
  const videoSrc = `https://www.youtube.com/embed/YiQ3V-Pgu48`;

  return (
    <div className="youtube-embed">
      <h2>Demo Video of Excel to Tally</h2>
      <iframe
        width={width || "720"}
        height={height || "450"}
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;


