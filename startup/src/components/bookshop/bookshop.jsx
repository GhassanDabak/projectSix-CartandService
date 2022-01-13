import React from 'react'
import "./bookshop.css"
import books from '../../data/books/books'
import {Link} from "react-router-dom"

function BookShop() {
    return (
        <div>
        <div>
            <h1 className='featured-games-title'>Books</h1>
            <hr />
        </div>
        <div className='games-container-home'>
        {books.map((game) => (
      <div className="game-container-home" key={game.id}>
        <div className="game-photo-container">
          <img className="game-photo-home" src={game.image} alt={game.title} />
        </div>
        <h2 className="game-title-home">{game.title}</h2>
        <h4>{game.author}</h4>
        <div className='price-and-btn'>
          <span className="game-price-home">Price: ${game.price}</span>
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

export default BookShop
