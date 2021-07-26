const Card = ({ id, product_name, brand, category, description, pricebefore, price, thumb, shopeelink, tokpedlink }) => {
  let Caa=`https://api.whatsapp.com/send?phone=628117090123&text=**DO%20NOT%20MODIFY**%20Item%20Product:%20${product_name},%20Price:%20${price},%20Category:%20${category}`;
  let tokopediaLink=`${tokpedlink}`;
  let shopeeLink=`${shopeelink}`;


  return (
    <div className='product-card'>
      		<div className="badge">Hot</div>

		<div className="product-thumb">
      <img className="productimages" alt='products' src={`../productimages/${thumb}_1.jpg`} />
      </div><div className="product-details">
      <div className="product-top-details">
        <h6 className="product-catagory">{category}</h6>
        <h2>{product_name}</h2>
        <div className="brand">{brand}</div>
        <p>{description}</p>
        </div>
        <div className="product-bottom-details">
          <div className="product-price"><small>{pricebefore}</small>{price}</div>
				<div className="product-links">
          <a href={tokopediaLink}><img className="fa-link" alt='products' src={`../market/tokped.png`} /></a>
          <a href={shopeeLink}><img className="fa-link" alt='products' src={`../market/shopee.png`} /></a>
					<a href={Caa}><i className="fab fa-whatsapp wa"/></a>
				</div>
        </div>
      </div>
    </div>
  );
}
