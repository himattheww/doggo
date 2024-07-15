import React, { useState, useRef, useEffect } from 'react';
import dogtips from "../../Assets/Blog Pages/dog-healthytips.jpeg";
import dogtipsvideo from "../../Assets/DogTips.mp4";
import dogfunnymoments from "../../Assets/Blog Pages/dog-withowner.webp";
import dogfunnyvideo from "../../Assets/DogFunny.mp4";
import dogproductreview from "../../Assets/Blog Pages/Dog-productreview.jpg";
import dogproduct from "../../Assets/DogToys.mp4";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Paper
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
  videoListStyles,
  videoListItemStyles,
  videoTitleStyles,
  videoIndexStyles,
  noUnderlineStyles
} from './styles';

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

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && videoSrc) {
      videoElement.src = videoSrc;
      videoElement.play();
    }
  }, [videoSrc]);

  return (
    <Box sx={{ border: '1px solid #ccc', padding: 2, textAlign: 'center' }}>
      {videoSrc ? (
        <video ref={videoRef} width="100%" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Typography variant="body1" sx={{ padding: '10px 20px' }}>Pilih video untuk diputar</Typography>
      )}
    </Box>
  );
};

const VideoList = ({ videos, onVideoSelect, currentVideo }) => {
  return (
    <Paper sx={{ ...videoListStyles, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>Video Blog</Typography>
      {videos.map((video, index) => (
        <Card
          key={index}
          sx={{
            ...videoListItemStyles,
            backgroundColor: currentVideo === video ? '#444' : 'inherit',
          }}
          onClick={() => onVideoSelect(video)}
        >
          <Box sx={videoIndexStyles}>
            {currentVideo === video ? (
              <PlayArrowIcon sx={{ color: '#fff' }} />
            ) : (
              <Typography variant="body1" sx={{ ...videoTitleStyles, ...noUnderlineStyles }}>{index + 1}</Typography>
            )}
          </Box>
          <CardMedia
            component="img"
            image={video.thumbnail}
            alt={video.title}
            sx={{ width: 100, height: 'auto', marginRight: 2 }}
          />
          <CardContent>
            <Typography variant="body1" sx={videoTitleStyles}>{video.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      title: 'Dog tips',
      thumbnail: dogtips,
      src: dogtipsvideo,
    },
    {
      title: 'Dog funny video',
      thumbnail: dogfunnymoments,
      src: dogfunnyvideo,
    },
    {
      title: 'Dog product review',
      thumbnail: dogproductreview,
      src: dogproduct,
    },
  ];

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleVideoEnd = () => {
    setSelectedVideo(null);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: 2 }}>
      <Box sx={{ flex: 1, maxWidth: 800 }}>
        <VideoPlayer
          videoSrc={selectedVideo ? selectedVideo.src : null}
          onVideoEnd={handleVideoEnd}
        />
      </Box>
      <Box sx={{ flex: 1, maxWidth: 800 }}>
        <VideoList videos={videos} onVideoSelect={handleVideoSelect} currentVideo={selectedVideo} />
      </Box>
    </Box>
  );
};

export default App;
