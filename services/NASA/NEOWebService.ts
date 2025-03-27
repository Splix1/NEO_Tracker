import { environment } from "../../environment";

const apiKey = environment.nasaApiKey;
const apiUrl = 'https://api.nasa.gov/neo/rest/v1/feed';

export const getNEOsByDate = async (date: string) => {
    try {
        const response = await fetch(`${apiUrl}?start_date=${date}&end_date=${date}&api_key=${apiKey}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const NEOs = data.near_earth_objects[`${date}`];
        
        return NEOs;
    } catch (error) {
        console.error('Error fetching NEO data:', error);
        throw error;
    }
};