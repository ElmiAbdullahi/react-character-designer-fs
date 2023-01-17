import React from 'react';

import './Editor.css';

export default function Editor({ name, setName }) {
  const handleChange = (e) => {
    e.target.name === 'title' && setName(e.target.value);
  };
  return (
    <div>
      <div className="editor">
        <div className="form-control">
          <input name="title" type="text" value={name} onChange={handleChange} />
          <label htmlFor="title">Title</label>
        </div>
      </div>
      <div className="form-control">
        <input />
      </div>
    </div>
  );
}
