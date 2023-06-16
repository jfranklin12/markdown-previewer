import React from "react";
import { marked } from "marked";

const Preview = ({ value }) => {
    const convertMarkdownToHTML = (markdown) => {
        const renderer = new marked.Renderer();
        renderer.breaks = true;

        return marked(markdown, { renderer: renderer });
    }
    const convertedMarkdown = convertMarkdownToHTML(value);

    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: convertedMarkdown }} />
    );
};

export default Preview;