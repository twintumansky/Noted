import { useEffect, useState } from "react";

const useFetchNotes = () => {
    // Try to get initial notes from localStorage immediately
    const getInitialNotes = () => {
        const data = localStorage.getItem('notes');
        if (data) {
            try {
                return JSON.parse(data);
            } catch (error) {
                console.error('Error parsing notes from localStorage:', error);
                return [];
            }
        }
        return [];
    };

    const [fetchedNotes, setFetchedNotes] = useState(getInitialNotes());
    
    // This effect will run when component mounts to ensure synchronization
    useEffect(() => {
        const data = localStorage.getItem('notes');
        if (data) {
            try {
                const parsedData = JSON.parse(data);
                setFetchedNotes(parsedData);
            } catch (error) {
                console.error('Error parsing notes from localStorage:', error);
                setFetchedNotes([]);
            }
        }
    }, []);
    
    return fetchedNotes;
}

export default useFetchNotes;