import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoSrc, onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      if (onVideoEnd) {
        onVideoEnd();
      }
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [onVideoEnd]);

  // Ensure the video is updated and plays the new video when videoSrc changes
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && videoSrc) {
      videoElement.src = videoSrc;
      videoElement.play();
    }
  }, [videoSrc]);

  return (
    <div style={styles.videoPlayer}>
      {videoSrc ? (
        <video ref={videoRef} width="100%" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p style={styles.noVideo}>Pilih video untuk diputar</p>
      )}
    </div>
  );
};

const styles = {
  videoPlayer: {
    border: '1px solid #ccc',
    padding: '20px',
    textAlign: 'center',
  },
  noVideo: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default VideoPlayer;
