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
            <div className='category-buttons'>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.category)}
                        className={selectedcategory === category.category ? 'active' : ''} // এখানে পরিবর্তন করা হয়েছে
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-3 gap-4 justify-center mx-auto game-card-container'>
                {filteredgames.map(game => <Gamingcard key={game.id} game={game}></Gamingcard>)}
            </div>
        </div>
    );
};

export default Home;
