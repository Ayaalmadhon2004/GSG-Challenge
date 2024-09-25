import React from 'react';

const ProgressBars = () => {
  const progressBars = [
    { value: 0 },
    { value: 25 },
    { value: 50 },
    { value: 75 },
    { value: 100 }
  ];

  return (
    <div>
      {progressBars.map((bar, index) => (
        <div key={index} className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={bar.value} aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar" style={{ width: `${bar.value}%` }}>
            {bar.value}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;
