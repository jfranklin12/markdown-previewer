import React from "react";

const Preview = ({ value }) => {
    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: value }} />
    );
};

export default Preview;