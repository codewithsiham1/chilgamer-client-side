import React from 'react';
import Banner from '../Banner/Banner';
import Minicard from '../Minicard/Minicard';
import { useLoaderData } from 'react-router-dom';
import Gamingcard from '../Gamingcard/Gamingcard';


const Home = () => {
    const gameloader=useLoaderData();
  
    return (
        <div>
         <Banner></Banner>
          <Minicard></Minicard>
          <div>
            {
                gameloader.map(game=><Gamingcard key={game.id} game={game}></Gamingcard>)
            }
          </div>
        </div>
    );
};

export default Home;