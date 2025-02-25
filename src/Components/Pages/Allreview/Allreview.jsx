import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div className='bg-black text-white p-4'>
            <h1 className='text-2xl font-bold mb-4'>All Reviews</h1>

            <div className='flex justify-between mb-4'>
                <div>
                    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className='bg-gray-800 text-white p-2 rounded mr-2'>
                        <option value='rating'>Rating</option>
                        <option value='year'>Year</option>
                    </select>
                    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className='bg-gray-800 text-white p-2 rounded'>
                        <option value='desc'>Descending</option>
                        <option value='asc'>Ascending</option>
                    </select>
                </div>
                <div>
                    <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} className='bg-gray-800 text-white p-2 rounded'>
                        <option value=''>All Genres</option>
                        <option value='Action'>Action</option>
                        <option value='RPG'>RPG</option>
                        <option value='Adventure'>Adventure</option>
                        {/* অন্যান্য জেনার যোগ করুন */}
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {sortedAndFilteredReviews().map(review => (
                    <div key={review._id} className='border border-gray-700 rounded-lg p-4'>
                        <img src={review.gameCover} alt={review.gameName} className='w-full h-40 object-cover mb-2 rounded-md' />
                        <h2 className='text-lg font-semibold'>{review.gameName}</h2>
                        <p className='text-sm mb-2'>Rating: {review.rating}/5</p>
                        <p className='text-sm mb-2'>Year: {review.year}</p>
                        <p className='text-sm mb-2'>Genre: {review.genre}</p>
                        <p className='text-sm'>{review.reviewDescription.substring(0, 100)}...</p>
                        <Link to={`/review/${review._id}`} className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Explore Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Allreview;