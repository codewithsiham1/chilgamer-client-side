import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./Details.css"
const Details = () => {
    const game = useLoaderData();
    const [watchList, setWatchList] = useState([]); // ওয়াচলিস্টের জন্য স্টেট

    const handleAddToWatchList = () => {
        // ওয়াচলিস্টে যুক্ত করার লজিক এখানে লিখুন
        // ডাটাবেসে ওয়াচলিস্টে যুক্ত করার জন্য API কল করতে হবে
        console.log('Added to WatchList:', game);
        setWatchList([...watchList, game]); // উদাহরণস্বরূপ, ওয়াচলিস্টে যুক্ত করা
    };

    return (
        <div className="details-container">
            <div className="game-details">
                <img src={game.image} alt={game.title} className="game-image" />
                <h2>{game.title}</h2>
                <p><strong>Description:</strong> {game.description}</p>
                <p><strong>Rating:</strong> {game.rating}</p>
                <p><strong>Genre:</strong> {game.category}</p>
                <p><strong>Year:</strong> {game.year}</p>
                <p><strong>Platform:</strong> {game.platform}</p>
                <button onClick={handleAddToWatchList} className="add-to-watchlist-button">
                    Add to WatchList
                </button>
            </div>
        </div>
    );
};

export default Details;