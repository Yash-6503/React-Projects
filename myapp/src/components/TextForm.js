import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText("abcd");

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClearClick = () => {

        let newText = ' ';
        setText(newText);
    }

    const handleChange = (event) => {
        // console.log("Textarea is clicked");
        setText(event.target.value);
    }

    const handlelowClick = () => {
        // console.log("lowercase is clicked");
        let lowText = text.toLowerCase();
        setText(lowText);
    }



    return (
        <>

            <div className="container my-3">

                <h1>{props.heading}</h1>
                <label className="form-label">{props.title}</label>
                <textarea className="form-control" value={text} id="MyText" rows="8" onChange={handleChange}></textarea>
                <button className="btn btn-primary m-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success" onClick={handlelowClick}>Conver to Lowercase</button>
                <button className="btn btn-danger mx-3" onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container">
                <h3>
                    Your Text Summary...
                </h3>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes read.</p>
                <h3>
                    Preview
                </h3>
                <p>{text}</p>
            </div>
        </>
    )
}
