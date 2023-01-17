import React from 'react';

import './Editor.css';

export default function Editor({ name, setName, head, setHead }) {
  const handleChange = (e) => {
    e.target.name === 'title' && setName(e.target.value);
    e.target.name === 'head' && setHead(e.target.value);
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
    </div>
  );
}
