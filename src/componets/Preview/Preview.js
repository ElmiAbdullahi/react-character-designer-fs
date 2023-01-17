import React from 'react';

export default function Preview({ name, head, body, legs, catchphrase }) {
  return (
    <div>
      <h1> {name} </h1>
      <div className="head-container">
        <img src={`./${head}.png`} alt="head" />
        <img src={`./${body}.png`} alt="body" />
        <img src={`./${legs}.png`} alt="body" />
      </div>
      <div>
        <ul>
          {catchphrase.map((phrase, index) => {
            index += 1;
            return (
              <li id={index} key={index}>
                {phrase}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
