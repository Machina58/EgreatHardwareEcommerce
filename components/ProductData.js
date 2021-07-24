class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      searchfield: ''
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

  render() {
    const { products, searchfield } = this.state;
    const filteredProducts = products.filter(products =>{
      return products.product_name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !products.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList products={filteredProducts} />

          </Scroll>    
           </div>
      );
  }
}

ReactDOM.render(<Product/>,document.querySelector('.product-data'))