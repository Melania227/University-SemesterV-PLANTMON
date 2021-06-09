export interface Inventory{
    username: string;
    plantName: string;
    type: string;
    updates: [
    	{
	        date: number,
	        description: string;
    	}
    ];
}

export interface InventoryToEdit{
    username: string;
    plantName: string;
    plantaManual: Inventory;
}

export interface InventoryToGetPlant{
    username: string;
    plantName: string;
}
