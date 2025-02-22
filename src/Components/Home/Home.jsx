import React from 'react';
import Banner from '../Banner/Banner';
import Minicard from '../Minicard/Minicard';
import { useLoaderData } from 'react-router-dom';
import Gamingcard from '../Gamingcard/Gamingcard';
import "./Home.css"

const Home = () => {
    const gameloader=useLoaderData();
  
    return (
        <div>
         <Banner></Banner>
          <Minicard></Minicard>
          <div className='grid grid-cols-3 gap-4 justify-center mx-auto game-card-container'>
            {
                gameloader.map(game=><Gamingcard key={game.id} game={game}></Gamingcard>)
            }
          </div>
        </div>
    );
};

export default Home;