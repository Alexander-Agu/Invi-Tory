

export const parseInventoryData = (data) => {
    return [
        [ <p>Name: </p>, data.name ],
        [ <p>Category: </p>, data.category ],
        [ <p>Number of items: : </p>, data.itemCount ],
    ]
}