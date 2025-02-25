
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Allreview.css'; // Add CSS file
import"./Allreview.css"
const Allreview = () => {
    const [reviews, setReviews] = useState([]);
    const [sortOption, setSortOption] = useState('rating');
    const [sortOrder, setSortOrder] = useState('desc');
    const [genreFilter, setGenreFilter] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('http://localhost:5000/review');
                if (response.ok) {
                    const data = await response.json();
                    setReviews(data);
                } else {
                    console.error('Failed to fetch reviews');
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    const sortedAndFilteredReviews = () => {
        let sortedReviews = [...reviews];

        // ফিল্টার
        if (genreFilter) {
            sortedReviews = sortedReviews.filter(review => review.genre === genreFilter);
        }

        // সর্টিং
        sortedReviews.sort((a, b) => {
            const aValue = sortOption === 'rating' ? a.rating : parseInt(a.year);
            const bValue = sortOption === 'rating' ? b.rating : parseInt(b.year);

            if (sortOrder === 'asc') {
                return aValue - bValue;
            } else {
                return bValue - aValue;
            }
        });

        return sortedReviews;
    };

    return (
        <div className='bg-black text-white p-4 all-review-container'>
            <h1 className='text-2xl font-bold mb-4'>All Reviews</h1>

            <div className='filter-sort-container'>
                <div className='sort-options'>
                    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className='bg-gray-800 text-white p-2 rounded mr-2'>
                        <option value='rating'>Rating</option>
                        <option value='year'>Year</option>
                    </select>
                    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className='bg-gray-800 text-white p-2 rounded'>
                        <option value='desc'>Descending</option>
                        <option value='asc'>Ascending</option>
                    </select>
                </div>
                <div className='genre-filter'>
                    <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} className='bg-gray-800 text-white p-2 rounded'>
                        <option value=''>All Genres</option>
                        <option value='Action'>Action</option>
                        <option value='RPG'>RPG</option>
                        <option value='Adventure'>Adventure</option>
                        {/* অন্যান্য জেনার যোগ করুন */}
                    </select>
                </div>
            </div>

            <div className='review-grid'>
                {sortedAndFilteredReviews().map(review => (
                    <div key={review._id} className='review-card'>
                        <img src={review.gameCover} alt={review.gameName} className='review-image' />
                        <h2 className='review-title'>{review.gameName}</h2>
                        <p className='review-rating'>Rating: {review.rating}/5</p>
                        <p className='review-year'>Year: {review.year}</p>
                        <p className='review-genre'>Genre: {review.genre}</p>
                        <p className='review-description'>{review.reviewDescription.substring(0, 100)}...</p>
                        <Link to={`/review/${review._id}`} className='explore-details-link'>
                            Explore Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Allreview;