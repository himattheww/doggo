import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div style={styles.videoList}>
      <h2>Video List</h2>
      {videos.map((video, index) => (
        <div key={index} style={styles.videoItem} onClick={() => onVideoSelect(video)}>
          <img src={video.thumbnail} alt={video.title} style={styles.thumbnail} />
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  videoList: {
    border: '1px solid #ccc',
    padding: '20px',
  },
  videoItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  thumbnail: {
    width: '100px',
    height: 'auto',
    marginRight: '10px',
  },
};

export default VideoList;
