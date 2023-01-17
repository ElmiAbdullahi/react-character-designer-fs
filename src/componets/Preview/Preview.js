import React from 'react';

export default function Preview({ name, head, body }) {
  return (
    <div>
      <h1> {name} </h1>
      <div className="head-container">
        <img src={`./${head}.png`} alt="head" />
        <img src={`./${body}.png`} alt="body" />
      </div>
    </div>
  );
}
