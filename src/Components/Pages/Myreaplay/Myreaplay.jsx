import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'; // sweetalert2 ব্যবহার করুন
import { AuthContext } from '../../Authprovider/Authprovider';

const Myreaplay = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const fetchMyReviews = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/review?email=${user.email}`); // আপনার ব্যাকএন্ড URL দিন
                    if (response.ok) {
                        const data = await response.json();
                        setMyReviews(data);
                    } else {
                        console.error('Failed to fetch my reviews');
                    }
                } catch (error) {
                    console.error('Error fetching my reviews:', error);
                }
            };

            fetchMyReviews();
        }
    }, [user]);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/review/${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        setMyReviews(myReviews.filter(review => review._id !== id));
                        Swal.fire(
                            'Deleted!',
                            'Your review has been deleted.',
                            'success'
                        );
                    } else {
                        Swal.fire(
                            'Error!',
                            'Failed to delete review.',
                            'error'
                        );
                    }
                } catch (error) {
                    console.error('Error deleting review:', error);
                    Swal.fire(
                        'Error!',
                        'An error occurred while deleting the review.',
                        'error'
                    );
                }
            }
        });
    };

    return (
        <div className='bg-black text-white p-4'>
            <h1 className='text-2xl font-bold mb-4'>My Reviews</h1>
            {user ? (
                myReviews.length > 0 ? (
                    <table className='w-full text-left table-auto'>
                        <thead>
                            <tr>
                                <th className='border px-4 py-2'>Game Name</th>
                                <th className='border px-4 py-2'>Rating</th>
                                <th className='border px-4 py-2'>Year</th>
                                <th className='border px-4 py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myReviews.map(review => (
                                <tr key={review._id}>
                                    <td className='border px-4 py-2'>{review.gameName}</td>
                                    <td className='border px-4 py-2'>{review.rating}</td>
                                    <td className='border px-4 py-2'>{review.year}</td>
                                    <td className='border px-4 py-2'>
                                        <Link to={`/updateReview/${review._id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'>
                                            Update
                                        </Link>
                                        <button onClick={() => handleDelete(review._id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No reviews found.</p>
                )
            ) : (
                <p>Please log in to see your reviews.</p>
            )}
        </div>
    );
};

export default Myreaplay;