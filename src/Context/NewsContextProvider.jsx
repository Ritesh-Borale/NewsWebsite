import React, { useContext, useEffect, useState } from "react";
import NewsContext from "./NewsContext";


export const NewsContextProvider = ({ children }) => {
    const categories = ["world", "technology", "business", "health", "science", "sports", "entertainment"];
    const [newsData, setNewsData] = useState(null);

    async function fetchCategoryData(category) {
        const response = await fetch(`https://api.currentsapi.services/v1/latest-news?category=${category}&apiKey=JHn86FcT26vgkM3QS2R6CKNDqOIT-g_5Z5AjFY5bjiW4_0Ne`);
        const news = await response.json();
        const newsWithImages = news.news.filter(item => item.image && item.image !== 'None');
        return newsWithImages;
    }

    useEffect(() => {
        const fetchData = async () => {
            const allData = {};
            for (let category of categories) {
                allData[category] = await fetchCategoryData(category);
            }
            setNewsData(allData);
        };
        fetchData();
    }, []);

    return (
        <NewsContext.Provider value={{ newsData }}>
            {children}
        </NewsContext.Provider>
    );
}
