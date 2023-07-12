import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify"

const Preview = ({ value }) => {
    const convertMarkdownToHTML = (markdown) => {
        const renderer = new marked.Renderer();
        renderer.breaks = true;

        const html = marked(markdown, { renderer: renderer });
        const sanitizedHTML = DOMPurify.sanitize(html);

        return sanitizedHTML;
    }
    const convertedMarkdown = convertMarkdownToHTML(value);

    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: convertedMarkdown }} />
    );
};

export default Preview;