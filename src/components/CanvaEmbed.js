import React, { useState, useEffect } from 'react';

// Define video sources as an array
const videoSources = ['/bannervideo.mp4', '/banner2.mp4', '/banner3.mp4']; // Add more video sources if needed

// Define styles as constants
const videoContainerStyle = {
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: '56.2225%',
  boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
  marginTop: '1.6em',
  marginBottom: '0.9em',
  overflow: 'hidden',
  borderRadius: '8px',
  willChange: 'transform',
};

const videoStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  objectFit: 'cover',
};

const buttonStyle = {
  backgroundColor: '#060b26',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '18px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

function CanvaEmbed() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const changeVideoSource = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    };

    const intervalId = setInterval(changeVideoSource, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const renderDots = () => {
    return videoSources.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentVideoIndex ? 'active' : ''}`}
        onClick={() => setCurrentVideoIndex(index)}
      ></span>
    ));
  };

  return (
    <div style={videoContainerStyle}>
      <video
        autoPlay
        muted
        loop
        src={videoSources[currentVideoIndex]}
        type="video/mp4"
        style={videoStyle}
      >
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <button style={buttonStyle}>Shop Now</button>
      </div>
      <div className="dots-container">{renderDots()}</div>
    </div>
  );
}

export default CanvaEmbed;
