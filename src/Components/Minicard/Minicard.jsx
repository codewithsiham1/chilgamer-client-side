import React from 'react';
import "./Minicard.css";

const Minicard = () => {
    return (
<div className='flex flex-row justify-around'>
<div className="card1">
            <h1>OUR ALL GAMES</h1>
            <p>CHIL GAMER</p>
            <span>
                Explore a vast collection of exciting games across multiple genres! 
                Whether you're a fan of action-packed adventures, immersive RPGs, 
                strategic simulations, or fast-paced multiplayer battles, we have 
                something for everyone.
            </span>
            <button>ALL GAMES</button>
        </div>
<div className="card2">
            <h1>OUR DEVELOPERS TEAM</h1>
            <p>CHIL GAMER TEAM</p>
            <span>
                Explore a vast collection of exciting games across multiple genres! 
                Whether you're a fan of action-packed adventures, immersive RPGs, 
                strategic simulations, or fast-paced multiplayer battles, we have 
                something for everyone.
            </span>
            <button>READ MORE</button>
        </div>
<div className="card3">
            <h1>DOCUMENTATIONS & SUPPORT</h1>
            <p>HELP CENTER</p>
            <span>
                Explore a vast collection of exciting games across multiple genres! 
                Whether you're a fan of action-packed adventures, immersive RPGs, 
                strategic simulations, or fast-paced multiplayer battles, we have 
                something for everyone.
            </span>
            <button>CONTACT</button>
        </div>

</div>
    );
};

export default Minicard;
