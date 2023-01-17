import React from 'react';

import './Editor.css';

export default function Editor({ name, setName, head, setHead, body, setBody, legs, setLegs }) {
  const handleChange = (e) => {
    e.target.name === 'title' && setName(e.target.value);
    e.target.name === 'head' && setHead(e.target.value);
    e.target.name === 'body' && setBody(e.target.value);
    e.target.name === 'legs' && setLegs(e.target.value);
  };
  return (
    <div>
      <div className="editor">
        <div className="form-control">
          <input name="title" type="text" value={name} onChange={handleChange} />
          <label htmlFor="title">Title</label>
        </div>
      </div>
      <div className="editor">
        <div className="form-control">
          <select name="head" type="text" value={head} onChange={handleChange}>
            <option value="bird">Bird</option>
            <option value="dog">Dog</option>
            <option value="horse">Horse</option>
          </select>
        </div>
      </div>
      <div className="editor">
        <div className="form-control">
          <select name="body" type="text" value={body} onChange={handleChange}>
            <option value="bshirt">Blue shirt</option>
            <option value="rshirt">Red shirt</option>
            <option value="pshirt">Pink shirt</option>
            <option value="dress">dress</option>
          </select>
        </div>
      </div>
      <div className="editor">
        <div className="form-control">
          <select name="legs" type="text" value={legs} onChange={handleChange}>
            <option value="bpants">Blue pants</option>
            <option value="dogpants">Dog pants</option>
            <option value="wpants">White pants</option>
            <option value="leg">leg</option>
          </select>
        </div>
      </div>
    </div>
  );
}
