import React, { useState } from 'react'

export default function Text(props) {
    const UpClick = () => {
        let NewText = Text.toUpperCase();
        SetText(NewText)
    }
    const LoClick = () => {
        let NewText = Text.toLowerCase();
        SetText(NewText)
    }
    const CLClick = () => {
        let NewText = '';
        SetText(NewText)
    }
    const capitalizeFirstLetter = str => str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    const CpClick = () => {
        SetText(capitalizeFirstLetter(Text))
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(Text)
            .then(() => alert("Text copied to clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
    };
    const Change = (event) => {
        SetText(event.target.value)
    }
    const [Text, SetText] = useState('Enter Text..')
    return (
        <>
            <div className={`container mt-5 p-2 text-${props.mode==='light'?'dark':'light'}`}>
                <h2 className="mb-2" >Enter Text to Uppercase:</h2>
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#373b43', color:props.mode==='light'?'black':'white' }} rows="8" value={Text} onChange={Change} aria-label="With textarea"></textarea>
                <button type="submit" className="btn btn-primary my-3 mx-1" onClick={CLClick}>Clear Text</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={UpClick}>Change to Uppercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={LoClick}>Change to Lowercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={CpClick}>Capitalized Case</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>

            </div>
            <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
                <h3>Text Summary:</h3>
                <p>{Text.split(" ").length} Words {Text.length} Characters</p>
                <h4>Preview</h4>
                <p>{Text.length>0?Text:'Enter some text..'}</p>
            </div>

        </>
    )
}