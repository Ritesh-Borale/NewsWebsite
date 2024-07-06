import React, { useContext } from 'react';
import NewsContext from '../../Context/NewsContext';
import Card from '../Card/Card';

export default function Business() {
    const { newsData } = useContext(NewsContext);
    if (!newsData) {
        return <div></div>; 
    }
    const BusinessNews = newsData.business;

    return (
        <div className="cards-list grid grid-cols-4 gap-4 bg-black">
            {
                BusinessNews.map((obj, index) => (
                    <Card key={index} obj={obj} />
                ))
            }
        </div>
    );
}
