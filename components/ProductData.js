class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      searchfield: '',
      categoryfield: '',
      brandfield:''

    }
  }

  componentDidMount() {
    fetch('../data/productdata.json')
      .then(response=> response.json())
      .then(productlist => {this.setState({ products: productlist})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  onCategoryChange = (event) => {
    this.setState({ categoryfield: event.target.value })
  }
  onBrandChange = (event) => {
    this.setState({ brandfield: event.target.value })
  }
  

  render() {
    
    const { products, searchfield, categoryfield, brandfield } = this.state;
    let categoryName = '';

    let categoryfilteredProducts = products.filter(products =>{
      return products.category.includes(categoryfield);
    })
    let brandfilteredProducts = products.filter(categoryfilteredProducts =>{
      return categoryfilteredProducts.brand.includes(brandfield);
    })

    let filteredProducts = categoryfilteredProducts.filter(brandfilteredProducts =>{
      return brandfilteredProducts.product_name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !products.length ?
      <h1>Loading</h1> :
      (
        <div className="section-products">
        <div className="flex">
          <div className="categories">
        <Category categoryChange={this.onCategoryChange}/>
        <Brand brandChange={this.onBrandChange}/>
        </div>  
        <div className='width100'>
          
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList products={filteredProducts} />  
          </Scroll>    
           </div>
           </div>
           </div>
      );
  }
}

ReactDOM.render(<Product/>,document.querySelector('.product-data'))