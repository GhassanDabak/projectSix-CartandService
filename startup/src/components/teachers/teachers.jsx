import React from 'react'
import teachers from '../../data/teachers/teachers'
import {Link} from "react-router-dom"

function Teachers() {
    return (
        <div>
             <div>
                <h1 className='featured-games-title'>Teachers</h1>
                <hr />
            </div>
            <div className='featured-rooms'>
                {teachers.map(room => (
                     <div className="room-container-home" key={room.id}>
                     <div className="room-photo-container">
                       <img className="room-photo-home" src={room.image} alt={room.title} />
                     </div>
                     <div className='room-info-home'>
                     <h2 className="room-title-home">{room.title}</h2>
                     <div className='price-and-btn'>
                         <p className='room-desc-home'>{room.description}</p>
                       <span className="room-price-home">Price: ${room.price}/hour</span>
                       <Link to={`/teachers/${room.title}`} className='view-room-btn'><button className="view-room-btn">
                       More details
                     </button></Link>
                     </div>
                     </div>
                   </div>
                ))}
            </div>
        </div>
    )
}

export default Teachers
