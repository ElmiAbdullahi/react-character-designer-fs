import React from 'react';
import { useState } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Home.css';

export default function Home() {
  const [name, setName] = useState('');

  return (
    <main className="main">
      <Editor name={name} setName={setName} />
      <Preview name={name} />
    </main>
  );
}
// when working on catchphrase watch the lecture video from yesterday
