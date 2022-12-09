import React , { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText] = useState("");
    return (
        <>
       <div className="container" style={{color:props.mode==='dark'?'white':'#212529'}}>
            <h1>{props.heading}</h1>
             <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{color:props.mode==='dark'?'white':'#212529',backgroundColor:props.mode==='dark'?'#181b5d':'white'}} id="myBox" rows="10"></textarea>
            </div>
            <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       </div>
       <div className="container my-3" style={{color:props.mode==='dark'?'white':'#212529'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter(word=> word!=="").length} words and {text.split(/\s+/).filter(word=> word!=="").join("").length} characters</p>
            <p>{0.008*text.split(/\s+/).filter(word=> word!=="").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter your text to see the preview"}</p>
       </div>
        </>
    )
}
