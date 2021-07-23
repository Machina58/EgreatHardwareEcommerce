const Card = ({ name, email, id }) => {
  return (
    <div className='product-card'>
      		<div className="badge">Hot</div>
		<div className="product-tumb">
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      </div><div className="product-details">
      <div className="product-top-details">
        <h6 className="product-catagory">Women,bag</h6>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
        <div className="product-bottom-details">
          <div className="product-price"><small>$96.00</small>$230.99</div>
				<div className="product-links">
					<a href=""><i className="fa fa-heart"></i></a>
					<a href=""><i className="fa fa-shopping-cart"></i></a>
				</div>
        </div>
      </div>
    </div>
  );
}
