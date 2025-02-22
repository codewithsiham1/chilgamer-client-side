import React from 'react';
import './Gameingcard.css';

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <div className="game-image">
                <img src={game.image} alt={game.title} />
            </div>
            <div className="game-details">
                <div className="game-category">
                    {game.category}
                    <span className="arrow-icon">▶</span>
                </div>
                <h2 className="game-title">{game.title}</h2>
                <div className="game-platform">
                    <span className="platform-icon"></span> {game.platform}
                </div>
                <div className="game-rating">
                    {game.rating}
                </div>
                <div className="game-year">
                    {game.year}
                </div>
                <p className="game-description">{game.description}</p>
                <button className="explore-details-button">Explore Details</button>
            </div>
        </div>
    );
};

export default GameCard;