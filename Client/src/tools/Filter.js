

// Filtering the inventories by category
export const FilterInventories = (inventories, category) => {
    if (category.toLowerCase() === "all") return inventories;

    return inventories.filter(inventory => inventory.category.toLowerCase() === category.toLowerCase());
}


export const GetInventory = (inventories) => {
    let tempInv = []
    inventories.map(x => {
        tempInv.push(x.category);
    })


    const uniqueEnventory = [...new Set(tempInv)];

    return uniqueEnventory
}