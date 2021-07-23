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
              name={products[i].name}
              email={products[i].email}
              />
              </div>
          );
        })
      }
    </div>
  );
}
