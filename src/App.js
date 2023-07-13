import './App.css';
import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';


const App = () => {
  const defaultMarkdown = `
# Welcome to my React Markdown Previewer
## I'm glad you're here
### We can do some really neat stuff
#### Like add a link!
[Here's another website I built](https://jfranklin12.github.io/random-quote-machine/)

You can even write some code \`<div></div>\` using backticks.

One line isn't enough? Make a code block!

\`\`\`
 // Code block 
 function greet(name) { 
   console.log("Hello, " + name); 
 }
\`\`\`

Lots to do today? Let's make a list.

- Make a bulleted list.
  - With an indent.
     - And even more!

Maybe you need some order?

1. You can use a numbered list instead.
2. And then you'll know what to do first!
3. And of course, last!

> Blockquote

![The Grand Canyon](https://b2052345.smushcdn.com/2052345/wp-content/uploads/2021/04/received_2882319192052842-750x450.jpeg?lossy=1&strip=1&webp=1)
<br></br> Visit **The Grand Canyon** for the most _beautiful_ **_sunsets!_** 


Maybe you want to make a table:

The Grand Canyon | Sequoia | Joshua Tree
------------ | ------------- | -------------
Arizona | California | California
Deep Canyons | Giant Sequoia Trees | Desert


`;


  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <Editor value={markdown} onChange={handleInputChange} />
      <Preview value={markdown} />
    </div>
  );
};

export default App;
