const ShoppingCart = ({ products }) => {
    return (
      <div className="cart-items">
        {
          
          products.map((user, i) => {
            return (
              <div className='cart-row'>
              <Cartrow
                key={i}
                id={products[i].id}
                stat={products[i].stat}
                product_name={products[i].product_name}
                brand={products[i].brand}
                category={products[i].category}
                description={products[i].description}
                pricebefore={products[i].pricebefore}
                price={products[i].price}
                thumb={products[i].thumb}
                tokpedlink={products[i].tokpedlink}
                shopeelink={products[i].shopeelink}
                />
                </div>
            );
          })
        }
      </div>
    );
  }
    
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function(event){
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
        })
    }