import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm) => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() =>{
        async function fetchNewsData(){
            try {
                setLoading(true);
                const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d20e917f2d234efeb88790a8404382fc';
                const apiSearchUrl = `https://newsapi.org/v2/everything?from=2024-01-12&to=2024-02-12&sortBy=popularity&apiKey=d20e917f2d234efeb88790a8404382fc`;
                const categoryParam = category ? `&category=${category}` : "";
                const searchParam = searchTerm
                  ? `${apiSearchUrl}&q=${searchTerm}`
                  : "";
                const url = searchTerm ? searchParam : apiUrl + categoryParam;
                console.log(url);
                const response = await fetch(url);
                const data = await response.json();
                
           

                setNewsData(data.articles);
                setLoading(false);

                } catch (error){
                setError(error);
                setLoading(false);
            }
        }
        fetchNewsData();
    },[category, searchTerm]);

    return {newsData, loading, error};
}

export default useNewsData;
