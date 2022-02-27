import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let new_text = text.toUpperCase()
        setText(new_text);
    }

    const handleLoClick =() => {
        let new_text=text.toLowerCase();
        setText(new_text);

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert Upper Case</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleLoClick}>Convert Lower Case</button>
            </div>

            <div className="container my-3">
                <h1>Text Summary</h1>
                <p>Word => {text.split(" ").length}</p>
                <p>Length => {text.length}</p>
                <p>Read Time => {0.008*text.split(" ").length} </p>
                <h1 className="my-3">Preview</h1>
                <p>{text}</p>

            </div>

        </>
    )
}
