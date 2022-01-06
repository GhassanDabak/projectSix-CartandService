import React from 'react'
import "./featured-games.css"
import games from '../../data/games/games'
import {Link} from "react-router-dom"

function FeaturedGames() {
    return (
        <div>
            <div>
                <h1 className='featured-games-title'>Most Selling Books</h1>
                <hr />
            </div>
            <div className='games-container-home'>
            {games.filter((game,index) => index <3).map((game) => (
                
          <div className="game-container-home" key={game.id}>

            <div className="game-photo-container">
              <img className="game-photo-home" src={game.image} alt={game.title} />
            <h2 className="game-title-home">{game.title}</h2>
            <h3>by {game.author}</h3>

              <span className="game-price-home">Price: ${game.price}</span>
            </div>
            <div className='price-and-btn'>
              <Link to={`/games/${game.title}`}><button className="view-game-btn">
              View Book
            </button></Link>
            </div>
          </div>
        ))}
            </div>
        </div>
    )
}

export default FeaturedGames
