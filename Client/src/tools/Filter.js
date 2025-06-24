

// Filtering the inventories by category
export const FilterInventories = (inventories, category) => {
    if (category.toLowerCase() === "all") return inventories;

    return inventories.filter(inventory => inventory.category.toLowerCase() === category.toLowerCase());
}


// Return unique category list
export const GetUniqueInventory = (inventories) => {
    let tempInv = [];

    inventories.map(x => {
        tempInv.push(x.category);
    })

    const uniqueEnventory = [...new Set(tempInv)];

    return uniqueEnventory;
}


// Return a list of inventory names
export const GetInventoryNames = (inventories) => {
    let inventoryNames = [];

    inventories.map(x => {
        inventoryNames.push(x.name);
    })

    return inventoryNames;
}