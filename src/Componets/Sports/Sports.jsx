import React, { useContext } from 'react';
import NewsContext from '../../Context/NewsContext';
import Card from '../Card/Card';

export default function Sports() {
    const { newsData } = useContext(NewsContext);
    if (!newsData) {
        return <div></div>; // or any loading indicator you prefer
    }
    const SportsNews = newsData.sports;

    return (
        <div className="cards-list grid grid-cols-4 gap-4 bg-black">
            {
                SportsNews.map((obj, index) => (
                    <Card key={index} obj={obj} />
                ))
            }
        </div>
    );
}
