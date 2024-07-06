import React, { useContext } from 'react';
import NewsContext from '../../Context/NewsContext';
import Card from '../Card/Card';

export default function World() {
    const { newsData } = useContext(NewsContext);
    if (!newsData) {
        return <div></div>; // or any loading indicator you prefer
    }
    
    const worldNews = newsData.world;

    return (
        <div className="cards-list grid grid-cols-4 gap-4 bg-black">
            {
                worldNews.map((obj, index) => (
                    <Card key={index} obj={obj} />
                ))
            }
        </div>
    );
}
