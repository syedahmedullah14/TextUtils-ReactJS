import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        //console.log("upclick was clicked:" + text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLoClick = ()=>{
        //console.log("upclick was clicked:" + text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClearClick = ()=>{
        //console.log("upclick was clicked:" + text)
        let newText=''
        setText(newText)
        props.showAlert("Text has been cleared!", "success")
    }
    // const capitalFirstLetter = ()=>{
    //     let words = text.split(" ")
    //    let uppercaseword = ' '
    //     words.forEach(element => {
    //        uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    //     });
    //     setText(uppercaseword)
    //     props.showAlert("Capitalized first letter of each word!", "success")
    // }
    
    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed!", "success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
      <>
    <div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='my-2'>{props.heading}</h1>
            <textarea className="form-control my-3" placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Conver to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Conver to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
            {/* <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={capitalFirstLetter}>Capitalize first letter of each word</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Text Preview</h2>
        <p className='para'>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </>
  )
}
