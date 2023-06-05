import './App.css';
import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <Editor value={markdown} onChange={handleInputChange} />
      <Preview value={markdown} />
    </div>
  );
};

export default App;
