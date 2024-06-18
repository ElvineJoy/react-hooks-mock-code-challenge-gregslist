import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingItem, onDelete}) {
  

  return (
    <main>
      <ul className="cards">
        {listingItem.map((item) => 
            <ListingCard  
                key={item.id}
                item={item}
                onDelete ={onDelete}
                />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
