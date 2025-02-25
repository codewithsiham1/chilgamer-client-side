import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from '../../Authprovider/Authprovider';
import"./AddReview.css"
const AddReview = () => {
    const { user } = useContext(AuthContext); 
    const [gameCover, setGameCover] = useState('');
    const [gameName, setGameName] = useState('');
    const [reviewDescription, setReviewDescription] = useState('');
    const [rating, setRating] = useState(1);
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Please Login',
                text: 'You must be logged in to add a review.',
            });
            navigate('/login');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/review', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    gameCover,
                    gameName,
                    reviewDescription,
                    rating,
                    year,
                    genre,
                    userEmail: user.email,
                    userName: user.displayName,
                }),
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Review Added!',
                    text: 'Your review has been successfully added.',
                });
                navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to add review.',
                });
            }
        } catch (error) {
            console.error('Error adding review:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while adding the review.',
            });
        }
    };

    return (
        <div className="add-review-container">
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="gameCover">Game Cover Image (URL)</label>
                    <input type="text" id="gameCover" value={gameCover} onChange={(e) => setGameCover(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="gameName">Game Title/Name</label>
                    <input type="text" id="gameName" value={gameName} onChange={(e) => setGameName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="reviewDescription">Review Description</label>
                    <textarea id="reviewDescription" value={reviewDescription} onChange={(e) => setReviewDescription(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating (1-5)</label>
                    <input type="number" id="rating" min="1" max="5" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} required />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Publishing Year</label>
                    <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genres (Dropdown)</label>
                    <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} required>
                        <option value="">Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                        {/* অন্যান্য জনরা যোগ করুন */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="userEmail">User Email</label>
                    <input type="email" id="userEmail" value={user?.email || ''} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="userName" value={user?.displayName || ''} readOnly />
                </div>
                <button type="submit" className="submit-button">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;