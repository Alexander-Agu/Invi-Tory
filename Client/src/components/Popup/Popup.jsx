import React, { useState } from 'react'
import "./popup.css"
import { useParams } from 'react-router-dom';
import InputBox from '../../UI/InputBox/InputBox';

export default function Popup({message, inputs, buttons, popup}) {
  const { userId } = useParams();
  const [accomodateRedBTN, setAccomodateRedBTN] = useState(false)

  return (
    <div className="popup-container" onClick={(e)=> {
            popup(false);
            e.stopPropagation()
        }}>

        <div className="popup-app" onClick={(e) => e.stopPropagation()} style={{"backgroundColor": inputs.length === 0? "#111827": "#374151"}}>
            <h1 className='popup-message'>{message}</h1>

            <div className="popup-inputs">
                {
                    inputs.map(x => {
                        const {type, inputBoxId, title, input, setInput, placeHolder} = x
                        return <InputBox key={inputBoxId}
                            type={type}
                            title={title}
                            input={input}
                            setInput={setInput}
                            placeHolder={placeHolder}
                            required={false}
                            checkValid={0}
                            boxValue={1}
                        />
                    })
                }
            </div>

            <div className="popup-buttons">
                {
                    // Only render existing buttons
                    buttons.length > 0?

                        buttons.map(x => {
                            const {buttonId, name, color, fontColor, execute} = x;
                            
                            return <button 
                                    key={buttonId} 
                                    onClick={()=> name === "Cancel"? popup(false): execute(userId)}
                                    style={{"color": fontColor, "backgroundColor": color}}
                                >
                                {name}
                            </button>
                        })
                    : <p></p>
                }
            </div>

        </div>
    </div>
  )
}