import React from 'react'
import "./featured-books.css"
import books from '../../data/books/books'
import {Link} from "react-router-dom"

function FeaturedBooks() {
    return (
        <div>
            <div>
                <h1 className='featured-games-title'>Most Selling Books</h1>
                <hr />
            </div>
            <div className='games-container-home'>
            {books.filter((game,index) => index <3).map((game) => (
                
          <div className="game-container-home" key={game.id}>

            <div className="game-photo-container">
              <img className="game-photo-home" src={game.image} alt={game.title} />
            <h2 className="game-title-home">{game.title}</h2>
            <h3>by {game.author}</h3>

              <span className="game-price-home">Price: ${game.price}</span>
            </div>
            <div className='price-and-btn'>
              <Link to={`/books/${game.title}`}><button className="view-game-btn">
              View Book
            </button></Link>
            </div>
          </div>
        ))}
            </div>
        </div>
    )
}

export default FeaturedBooks
