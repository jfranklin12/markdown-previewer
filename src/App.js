import './App.css';
import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';

const App = () => {
  const defaultMarkdown = `
# Welcome to my React Markdown Previewer!
## I'm glad you're here!
### We can do some really neat stuff!
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

![Image](#)

We can make text **bold** text or _italic_ or **_both!_** 


Maybe making a table is more your speed:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

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
