import React from "react";
import { marked } from "marked";

const Editor = ({ value, onChange }) => {

    return (
        <textarea
        id="editor"
        value={value}
        onChange={onChange}
        />
    );
};

export default Editor;