import React from 'react';
import { useState } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Home.css';

export default function Home() {
  const [name, setName] = useState('');
  const [head, setHead] = useState('bird');
  const [body, setBody] = useState('bshirt');

  return (
    <main className="main">
      <Editor
        name={name}
        setName={setName}
        head={head}
        setHead={setHead}
        body={body}
        setBody={setBody}
      />
      <Preview name={name} head={head} body={body} />
    </main>
  );
}
// when working on catchphrase watch the lecture video from yesterday
