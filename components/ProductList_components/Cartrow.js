const Cartrow = ({ id, product_name, brand, price, thumb, shopeelink, tokpedlink }) => {
    let caa=`https://api.whatsapp.com/send?phone=628117090123&text=**DO%20NOT%20MODIFY**%20Item%20Product:%20${product_name},%20Price:%20${price},%20Category:%20${category}`;
    let tokopediaLink=`${tokpedlink}`;
    let shopeeLink=`${shopeelink}`;
  
    return (
      <div className='product-card'>
                <div className="badge">{stat}</div>
  
          <div className="product-thumb">
        <img className="productimages" alt='products' src={`../productimages/${thumb}_1.jpg`} />
        </div><div className="product-details">
        <div className="product-top-details">
          <h2>{product_name}</h2>
          <div className="brand">{brand}</div>
          </div>
          <div className="product-bottom-details">
            <div className="product-price">{price}</div>
                  <div className="product-links">
            <a href={tokopediaLink}><img className="fa-link" alt='products' src={`../market/tokped.png`} /></a>
            <a href={shopeeLink}><img className="fa-link" alt='products' src={`../market/shopee.png`} /></a>
                      <a href={caa}><i className="fab fa-whatsapp wa"/></a>
                  </div>
          </div>
        </div>
      </div>
    );
  }
  