export interface Monitoring{
    username: string;
    plantName: string;
    type: string;
    updates: [
    	{
	        date: number,
	        description: string;
    	}
    ];
    associatedSensors: string[]; 
    image: string;
}



export interface MonitoringToEdit{
    username: string;
    plantName: string;
    plantaSensor: Monitoring;
}

export interface MonitoringToGetPlant{
    username: string;
    plantName: string;
}


export interface SensorData{
    sensorIdentifier: string,
    date: Date,
    hour: string,
    type: string,
    data:string
}


