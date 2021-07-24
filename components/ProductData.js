class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      searchfield: '',
      categoryfield: ''

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
  

  render() {
    
    const { products, searchfield, categoryfield } = this.state;
    let categoryName = '';

    let categoryfilteredProducts = products.filter(products =>{
      return products.category.includes(categoryfield);
    })

    let filteredProducts = categoryfilteredProducts.filter(categoryfilteredProducts =>{
      return categoryfilteredProducts.product_name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !products.length ?
      <h1>Loading</h1> :
      (
        <div className="section-products">
        <div className="flex">
        <Category categoryChange={this.onCategoryChange}/>
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