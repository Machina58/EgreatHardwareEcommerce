class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ products: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { products, searchfield } = this.state;
    const filteredProducts = products.filter(products =>{
      return products.name.toLowerCase().includes(searchfield.toLowerCase());
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