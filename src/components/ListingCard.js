import React, { useState } from "react";

function ListingCard({item, onDeleteItem}) {
  const [isFavorite, setIsFavourite] = useState(false);


  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(item))  
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={() => setIsFavourite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsFavourite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
