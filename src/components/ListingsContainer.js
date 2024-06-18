import ListingCard from "./ListingCard";



function ListingsContainer({listingItem}) {
  

  return (
    <main>
      <ul className="cards">
        {listingItem.map((item) => 
            <ListingCard  
                key={item.id} 
                description={item.description} 
                location={item.location}
                image={item.image}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
