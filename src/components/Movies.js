import { useState, useEffect } from "react";

export default function Movies (movieName) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=3c10748e`)
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result);
            },
            
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    },[])

    if (error) {
        return error.message;
    } else if (!isLoaded) {
        return "Loading...";
    } else {
        return items;
    }
}