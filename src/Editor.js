import React from "react";

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