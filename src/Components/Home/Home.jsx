
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Minicard from '../Minicard/Minicard';
import { useLoaderData } from 'react-router-dom';
import Gamingcard from '../Gamingcard/Gamingcard';
import "./Home.css";

const Home = () => {
    const gameloader = useLoaderData();
    const [categories, setcategories] = useState([]);
    const [selectedcategory, setselectedcategory] = useState('All');
    const [filteredgames, setFilterdgames] = useState(gameloader);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, []);

    useEffect(() => {
        if (selectedcategory === "All") {
            setFilterdgames(gameloader);
        } else {
            const filtered = gameloader.filter((game) => game.category.includes(selectedcategory));
            setFilterdgames(filtered);
        }
    }, [selectedcategory, gameloader]);

    const handleCategoryChange = (category) => { setselectedcategory(category) }

    return (
        <div>
            <Banner></Banner>
            <Minicard></Minicard>
            <div className='category-buttons' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.category)}
                        className={selectedcategory === category.category ? 'active' : ''}
                        style={{ margin: '5px', padding: '8px 12px', fontSize: '14px' }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className='game-card-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center', margin: '20px auto', maxWidth: '1200px', padding: '0 20px' }}>
                {filteredgames.map(game => <Gamingcard key={game.id} game={game}></Gamingcard>)}
            </div>
        </div>
    );
};

export default Home;