import React from 'react';

export default function Stories() {
  return (
    <div className="container p-4">
      <h2 className="text-2xl font-bold mb-4">📖 Real-Life Stories</h2>
      <p className="mb-4">Watch inspiring civic rights stories in action!</p>

      <video width="640" height="360" controls>
        <source src="/DTL_video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video width="640" height="360" controls>
        <source src="/DTL_video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
