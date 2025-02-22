import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddReview = () => {
    const [gameCover, setGameCover] = useState('');
    const [gameName, setGameName] = useState('');
    const [reviewDescription, setReviewDescription] = useState('');
    const [rating, setRating] = useState(1);
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    // ব্যবহারকারীর ইমেইল এবং নাম অটোমেটিক্যালি পূরণ করুন

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // API কল করে ডাটাবেসে রিভিউ যোগ করুন
        // সফল হলে, সাকসেস মেসেজ দেখান এবং হোমপেজে রিডাইরেক্ট করুন
        // ব্যর্থ হলে, এরর মেসেজ দেখান
        navigate('/');
    };

    return (
        <div className="add-review-container">
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="gameCover">Game Cover Image (URL)</label>
                    <input type="text" id="gameCover" value={gameCover} onChange={(e) => setGameCover(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="gameName">Game Title/Name</label>
                    <input type="text" id="gameName" value={gameName} onChange={(e) => setGameName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="reviewDescription">Review Description</label>
                    <textarea id="reviewDescription" value={reviewDescription} onChange={(e) => setReviewDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating (1-5)</label>
                    <input type="number" id="rating" min="1" max="5" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Publishing Year</label>
                    <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genres (Dropdown)</label>
                    <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option value="">Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                        {/* অন্যান্য জনরা যোগ করুন */}
                    </select>
                </div>
                {/* ব্যবহারকারীর ইমেইল এবং নাম রিড-অনলি ফিল্ড যোগ করুন */}
                <button type="submit" className="submit-button">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;