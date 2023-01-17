import React from 'react';

export default function Preview({ name, head }) {
  return (
    <div>
      <h1> {name} </h1>
      <div className="head-container">
        <img src={`./${head}.png`} alt="head" />
      </div>
    </div>
  );
}
