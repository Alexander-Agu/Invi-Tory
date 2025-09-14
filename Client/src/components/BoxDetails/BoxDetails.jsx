import React from 'react'
import "./boxDetails.css"

export default function BoxDetails({icon, title, data}) {
    // console.log(data)
  return (
    <article className='box-details-app'>
        <div className="box-detail-header">
            {icon}
            <h2>{title}</h2>
        </div>

        <div className="box-detail-container">
            {
                data.map((x, index) => {
                    return  <div className="box-details" key={index}>
                        <p className='detail-title'>{x[0]}</p>

                        <p className='detail-info'>{x[1]}</p>
                    </div>
                })
            }
        </div>
    </article>
  )
}