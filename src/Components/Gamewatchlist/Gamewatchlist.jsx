
import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authprovider/Authprovider';
import './Gamewatchlist.css'; 
import"./Gamewatchlist.css"
const Gamewatchlilst = () => {
    const { user } = useContext(AuthContext);
    const [watchlistItems, setWatchlistItems] = useState([]);

    useEffect(() => {
        if (user) {
            const fetchWatchlistItems = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/watchlist/${user.email}`);
                    if (response.ok) {
                        const data = await response.json();
                        setWatchlistItems(data);
                    } else {
                        console.error('Failed to fetch watchlist items');
                    }
                } catch (error) {
                    console.error('Error fetching watchlist items:', error);
                }
            };
            fetchWatchlistItems();
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
                    const response = await fetch(`http://localhost:5000/watchlist/${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        setWatchlistItems(watchlistItems.filter(item => item._id !== id));
                        Swal.fire(
                            'Deleted!',
                            'Item removed from watchlist.',
                            'success'
                        );
                    } else {
                        Swal.fire(
                            'Error!',
                            'Failed to remove item.',
                            'error'
                        );
                    }
                } catch (error) {
                    console.error('Error deleting item:', error);
                    Swal.fire(
                        'Error!',
                        'An error occurred while removing the item.',
                        'error'
                    );
                }
            }
        });
    };

    return (
        <div className='bg-black text-white p-4 watchlist-container'>
            <h1 className='text-2xl font-bold mb-4'>My Watchlist</h1>
            {user ? (
                watchlistItems.length > 0 ? (
                    <div className="table-responsive">
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
                                {watchlistItems.map(item => (
                                    <tr key={item._id}>
                                        <td className='border px-4 py-2'>{item.gameName}</td>
                                        <td className='border px-4 py-2'>{item.rating}</td>
                                        <td className='border px-4 py-2'>{item.year}</td>
                                        <td className='border px-4 py-2'>
                                            <button onClick={() => handleDelete(item._id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No items found in watchlist.</p>
                )
            ) : (
                <p>Please log in to see your watchlist.</p>
            )}
        </div>
    );
};

export default Gamewatchlilst;