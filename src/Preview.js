import React from "react";
import { marked } from "marked";

const Preview = ({ value }) => {
    const convertedMarkdown = marked(value);

    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: convertedMarkdown }} />
    );
};

export default Preview;