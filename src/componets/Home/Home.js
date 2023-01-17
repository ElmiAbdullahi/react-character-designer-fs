import React from 'react';
import { useState } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Home.css';

export default function Home() {
  const [name, setName] = useState('');
  const [head, setHead] = useState('bird');
  const [body, setBody] = useState('bshirt');
  const [legs, setLegs] = useState('wpants');
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);

  return (
    <main className="main">
      <Editor
        name={name}
        setName={setName}
        head={head}
        setHead={setHead}
        body={body}
        setBody={setBody}
        legs={legs}
        setLegs={setLegs}
        headCount={headCount}
        setHeadCount={setHeadCount}
        bodyCount={bodyCount}
        setBodyCount={setBodyCount}
      />
      <Preview
        name={name}
        head={head}
        body={body}
        legs={legs}
        headCount={headCount}
        bodyCount={bodyCount}
      />
    </main>
  );
}
// when working on catchphrase watch the lecture video from yesterday
