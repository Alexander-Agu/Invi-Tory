

// Filtering the inventories by category
export const FilterInventories = (inventories, category) => {
    if (category.toLowerCase() === "all") return inventories;
    console.log(inventories)

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


// Return a list of inventory names based of the category
export const GetInventoryNames = (inventories, targetInventory) => {
    let inventoryNames = [];

    if (targetInventory.toLowerCase() === "all"){
        inventories.map(x => {
            inventoryNames.push(x.name);
        })
    } else{
        inventories.map(x => {
            if (x.category.toLowerCase() === targetInventory.toLowerCase()) inventoryNames.push(x.name);
        })
    }

    return inventoryNames;
}

// Return a list of inventory names
export const GetInventoryNamesAndId = (inventories) => {
    let inventoryNames = [];

    inventories.map(x => {
        let inventory = []

        inventory.push(x.inventoryId);
        inventory.push(x.name);

        inventoryNames.push(inventory)
    })

    return inventoryNames;
}


// Rreturn filtered Items
export const FilterItems = (items, category, inventoryName) => {
    // No filter
    if (category.toLowerCase() === "all" && inventoryName.toLowerCase() === "all") return items;

    // Filter by category
    else if (category.toLowerCase() != "all" && inventoryName.toLowerCase() === "all") return items.filter(x => x.inventoryCategory.toLowerCase() === category.toLowerCase());

    // Filter by category
    else if (category.toLowerCase() === "all" && inventoryName.toLowerCase() != "all") return items.filter(x => x.inventoryName.toLowerCase() === inventoryName.toLowerCase());

    // Both category and inventoryName
    else return items.filter(x => x.inventoryCategory.toLowerCase() === category.toLowerCase() &&  x.inventoryName.toLowerCase() === inventoryName.toLowerCase());
}