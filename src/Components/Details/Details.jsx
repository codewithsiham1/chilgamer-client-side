
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Details.css';
import { AuthContext } from '../Authprovider/Authprovider';
import Swal from 'sweetalert2';

const Details = () => {
    const game = useLoaderData();
    const { user } = useContext(AuthContext);

    if (!game) {
        return <div className="game-details-page">Game not found</div>;
    }

    const handleAddToWatchlist = async () => {
        if (!user) {
            Swal.fire('Please log in to add to watchlist.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/watchlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    gameCover: game.image,
                    gameName: game.title,
                    rating: game.rating,
                    year: game.year,
                    userEmail: user.email,
                    userName: user.displayName,
                }),
            });

            if (response.ok) {
                Swal.fire('Added to Watchlist!');
            } else {
                Swal.fire('Failed to add to Watchlist.');
            }
        } catch (error) {
            console.error('Error adding to watchlist:', error);
            Swal.fire('An error occurred.');
        }
    };

    return (
        <div className="game-details-page">
            <div className="game-image-container">
                <img src={game.image} alt={game.title} className="game-image" />
            </div>
            <div className="game-info">
                <h2 className="game-title">{game.title}</h2>
                <p className="game-category">Category: {game.category}</p>
                <p className="game-platform">Platform: {game.platform}</p>
                <p className="game-rating">Rating: {game.rating}</p>
                <p className="game-year">Year: {game.year}</p>
                <p className="game-description">Description: {game.description}</p>

                <button onClick={handleAddToWatchlist} className="add-to-watchlist-button">
                    Add to WatchList
                </button>
            </div>
        </div>
    );
};

export default Details;