const CardList = ({ products }) => {
  return (
    <div className="products">
      {
        
        products.map((user, i) => {
          return (
            <div className='product'>
            <Card
              key={i}
              id={products[i].id}
              product_name={products[i].product_name}
              brand={products[i].brand}
              category={products[i].category}
              description={products[i].description}
              pricebefore={products[i].pricebefore}
              price={products[i].price}
              thumb={products[i].thumb}
              />
              </div>
          );
        })
      }
    </div>
  );
}
