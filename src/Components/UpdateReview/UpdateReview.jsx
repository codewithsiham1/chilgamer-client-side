
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authprovider/Authprovider';
import './UpdateReview.css'; 
import"./UpdateReview.css"
const UpdateReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [review, setReview] = useState({
        gameName: '',
        description: '',
        rating: '',
        genres: '',
        platform: '',
        year: '',
        image: '',
        userEmail: '',
        userName: ''
    });

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await fetch(`https://chilgamer-server-side-qj94ibqsx-sihams-projects-6b0cef74.vercel.app/review/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setReview(data);
                } else {
                    console.error('Failed to fetch review');
                }
            } catch (error) {
                console.error('Error fetching review:', error);
            }
        };

        fetchReview();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReview(prevReview => ({
          ...prevReview,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://chilgamer-server-side-qj94ibqsx-sihams-projects-6b0cef74.vercel.app/review/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(review)
            });
            if (response.ok) {
                Swal.fire('Updated!', 'Your review has been updated.', 'success');
                navigate('/myreview');
            } else {
                Swal.fire('Error!', 'Failed to update review.', 'error');
            }
        } catch (error) {
            console.error('Error updating review:', error);
            Swal.fire('Error!', 'An error occurred while updating the review.', 'error');
        }
    };

    return (
        <div className='bg-black text-white p-4 update-review-container'>
            <h1 className='text-2xl font-bold mb-4'>Update Review</h1>
            <form onSubmit={handleSubmit} className='update-review-form'>
                <div className='form-group'>
                    <label className='block text-sm font-bold mb-2'>Game Name</label>
                    <input type='text' name='gameName' value={review.gameName} onChange={handleChange} className='form-input' />
                </div>
                <div className='form-group'>
                    <label className='block text-sm font-bold mb-2'>Description</label>
                    <textarea name='description' value={review.description} onChange={handleChange} className='form-input' />
                </div>
                <div className='form-group'>
                    <label className='block text-sm font-bold mb-2'>Rating</label>
                    <input type='number' name='rating' value={review.rating} onChange={handleChange} className='form-input' />
                </div>
                <div className='form-group'>
                    <label className='block text-sm font-bold mb-2'>Genres</label>
                    <input type='text' name='genres' value={review.genres} onChange={handleChange} className='form-input' />
                </div>
                <div className='form-group'>
                    <label className='block text-sm font-bold mb-2'>Platform</label>
                    <input type='text' name='platform' value={review.platform} onChange={handleChange} className='form-input' />
                </div>
                <div className='form-group'>
                    <label className='block text-sm font-bold mb-2'>Year</label>
                    <input type='text' name='year' value={review.year} onChange={handleChange} className='form-input' />
                </div>
                <div className='form-group'>
                    <label className='block text-sm font-bold mb-2'>Image URL</label>
                    <input type='text' name='image' value={review.image} onChange={handleChange} className='form-input' />
                </div>
                <div className='form-group'>
                    <label className='block text-sm font-bold mb-2'>User Email</label>
                    <input type='email' name='userEmail' value={review.userEmail} readOnly className='form-input' />
                </div>
                <div className='form-group'>
                    <label className='block text-sm font-bold mb-2'>User Name</label>
                    <input type='text' name='userName' value={review.userName} readOnly className='form-input' />
                </div>
                <button type='submit' className='update-button'>Update</button>
            </form>
        </div>
    );
};

export default UpdateReview;