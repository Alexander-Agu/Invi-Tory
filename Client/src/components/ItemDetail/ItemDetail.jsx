import React from 'react'
import "./itemDetail.css"
import { FiBox } from "react-icons/fi";

export default function ItemDetail({popup, name, tag, value, createdAt}) {
  return (
    <article className='item-detail-popup-container' onClick={(e)=>{ 
        popup(false)
        e.stopPropagation()
      }}>

        <div className="item-detail-popup-app" onClick={(e)=> e.stopPropagation()}>

            <section className='item-detail-popup-header'>
              <h2><span><FiBox /></span> Item Details</h2>

              <button onClick={()=> popup(false)}>x</button>
            </section>

            <section className='item-detail-item-info'>
              <h2>Item Information</h2>

              <div className="item-detail-info-container">
                <div>
                  <p className='item-detail-label'>Name: </p>
                  <p style={{"color": "white"}}>{name}</p>
                </div>
                <div>
                  <p className='item-detail-label'>Tag: </p>
                  <p style={{"color": "#60a5fa"}}>{tag}</p>
                </div>
                <div>
                  <p className='item-detail-label'>Value: </p>
                  <p style={{"color": "#4ade80"}}>R {value}</p>
                </div>
                <div>
                  <p className='item-detail-label'>Created At: </p>
                  <p style={{"color": "white"}}>{createdAt}</p>
                </div>
              </div>
            </section>

            {/* <section className='item-detail-inventory-info'></section> */}
        </div>

    </article>
  )
}