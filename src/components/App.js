import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useEffect, useState } from "react";


function App() {
  const [listingItem, setListingItem] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => setListingItem(data))
    .catch(error => console.log(error))
  }, [])

  function handleDeleteItem(deletedItem) {
    const updatedItems = listingItem.filter((item) => item.id !== deletedItem.id);
    setListingItem(updatedItems)
  }

  const displayListings = listingItem.filter(listing => 
    listing.description.toLowerCase().includes(search.toLowerCase())
  );
  
 

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer listingItem={displayListings} onDelete={handleDeleteItem}/>
    </div>
  );
}

export default App;
