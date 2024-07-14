import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import dogtips from "../../Assets/Blog Pages/dog-healthytips.jpeg";
import dogtipsvideo from "../../Assets/DogTips.mp4";
import dogfunnymoments from "../../Assets/Blog Pages/dog-withowner.webp";
import dogfunnyvideo from "../../Assets/DogFunny.mp4";
import dogproductreview from "../../Assets/Blog Pages/Dog-productreview.jpg";
import dogproduct from "../../Assets/DogToys.mp4";


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
      <div style={styles.app}>
        <div style={styles.videoPlayerContainer}>
          <VideoPlayer
            videoSrc={selectedVideo ? selectedVideo.src : null}
            onVideoEnd={handleVideoEnd}
          />
        </div>
        <div style={styles.videoListContainer}>
          <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
        </div>
      </div>
    );
  };
  
  const styles = {
    app: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
    },
    videoPlayerContainer: {
      flex: 1,
      marginRight: '20px',
    },
    videoListContainer: {
      flex: 1,
    },
  };



export default App;
