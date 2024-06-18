import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useEffect, useState } from "react";

function App() {
  const [listingItem, setListingItem] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => setListingItem(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listingItem={listingItem}/>
    </div>
  );
}

export default App;
