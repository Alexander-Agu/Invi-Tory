import React from 'react'
import "./popup.css"
import { useParams } from 'react-router-dom';

export default function Popup({message, inputs, buttons, popup}) {
  const { userId } = useParams();

  return (
    <div className="popup-container" onClick={()=> popup(false)}>
        <div className="popup-app" onClick={(e) => e.stopPropagation()}>
            <h1>{message}</h1>

            {/* <div className="popup-inputs">
                {
                    inputs.map(x => {
                        return <p></p>
                    })
                }
            </div> */}

            <div className="popup-buttons">
                {/* <button onClick={()=> setLogoutPopUp(false)}>No</button>

                <a href='/' className='log-a'>Yes</a> */}

                {
                    buttons.map(x => {
                        const {buttonId, name, color, fontColor, execute} = x;

                        return <button 
                                key={buttonId} 
                                onClick={()=> name === "Cancel"? popup(false): execute(userId, )}
                                style={{"color": fontColor, "backgroundColor": color}}
                            >
                            {name}
                        </button>
                    })
                }
            </div>

        </div>
    </div>
  )
}