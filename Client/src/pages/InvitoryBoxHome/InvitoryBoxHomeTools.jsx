

export const parseInventoryData = (data) => {
    return [
        [ <span>Name: </span>, data.name ],
        [ <span>Category: </span>, data.category ],
        [ <span>Number of items: </span>, data.itemCount ],
    ]
}

export const parseInventoryValuationData = (valuationData) => {
    return [
        [ <span>Quantity: </span>, valuationData.quintity ],
        [ <span>Total Purchase Cost: </span>, <span style={{"color": "#10b981"}}>R {valuationData.totalPurchaceCost} </span> ],
        [ <span>Weighted Average: </span>, <span style={{"color": "#10b981"}}> R {valuationData.weightedAvarage} </span> ],
        [ <span>Closing Stock: </span>, <span style={{"color": "#10b981"}}> R {valuationData.closingStock} </span> ],
        [ <span>Shared Costs: </span>, <span style={{"color": "#10b981"}}> R {valuationData.sharedCost} </span> ],
        [ <span>Updated At: </span>, valuationData.updatedDate ],
    ]
}