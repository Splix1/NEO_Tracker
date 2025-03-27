import { environment } from "../../environment";

const apiKey = environment.nasaApiKey;
const apiUrl = 'https://api.nasa.gov/neo/rest/v1/feed';

export const getNEOsByDate = async (startDate: string, endDate: string) => {
    try {
        const response = await fetch(`${apiUrl}?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const NEOs = data.near_earth_objects[`${startDate}`];
        
        return NEOs;
    } catch (error) {
        console.error('Error fetching NEO data:', error);
        throw error;
    }
};