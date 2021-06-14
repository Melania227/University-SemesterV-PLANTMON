export interface Monitoring{
    username: string;
    plantName: string;
    type: string;
    updates:updates [];
    associatedSensors: string[]; 
    image: string;
}

export interface updates{
    date: number,
	description: string;
}

export interface MonitoringToEdit{
    username: string;
    plantName: string;
    plantaManual: Monitoring;
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


