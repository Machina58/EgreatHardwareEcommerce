const Card = ({ id, product_name, brand, category, description, pricebefore, price, thumb }) => {
  return (
    <div className='product-card'>
      		<div className="badge">Hot</div>
          <div className="right">{brand}</div>
		<div className="product-thumb">
      <img className="productimages" alt='products' src={`https://egreathardware.com/egreat2/productimages/${thumb}_1.jpg`} />
      </div><div className="product-details">
      <div className="product-top-details">
        <h6 className="product-catagory">{category}</h6>
        <h2>{product_name}</h2>
        <p>{description}</p>
        </div>
        <div className="product-bottom-details">
          <div className="product-price"><small>{pricebefore}</small>{price}</div>
				<div className="product-links">
					<a href=""><i className="fa fa-heart"></i></a>
					<a href=""><i className="fa fa-shopping-cart"></i></a>
				</div>
        </div>
      </div>
    </div>
  );
}
