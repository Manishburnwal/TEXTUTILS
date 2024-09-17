import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark'?'white':'#042743'
    }

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, etc....
                
                TextUtils is a free character counter tool that provides instant character count & word count statistics
               for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing
               text with word/character limit.

               This word counter software works in any web browserssuch as Chrome, Firefox, Internet Explorer, Safari, Opera.
                It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. 


            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
