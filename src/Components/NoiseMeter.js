import React, { useState } from 'react';

const NoiseMeter = () => {
  const [noiseLevel, setNoiseLevel] = useState('Normal');

  const handleRecordingStop = (recording) => {
    const noise = analyzeNoise(recording);
    setNoiseLevel(noise);
  };

  const analyzeNoise = (recording) => {
    const audioData = recording.audioData;
    const averageAmplitude = audioData.reduce((sum, value) => sum + Math.abs(value), 0) / audioData.length;

    const highThreshold = 0.8;
    const normalThreshold = 0.5;

    if (averageAmplitude > highThreshold) {
      return 'High';
    } else if (averageAmplitude > normalThreshold) {
      return 'Normal';
    } else {
      return 'Low';
    }
  };

  return (
    <div>
      <h1>Noise Meter</h1>
      <p>Current Noise Level: {noiseLevel}</p>
      <button onClick={() => handleRecordingStop({ audioData: [/* Provide your recorded audio data here */] })}>
        Stop Recording
      </button>
    </div>
  );
};

export default NoiseMeter;
