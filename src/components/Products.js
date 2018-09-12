import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
	{id: '1', name:'Cargando...', price: '$1,000', available: true}
      ],
    };

    this.byId = this.byId.bind(this);
    this.byAvailability = this.byAvailability.bind(this);
    this.byPrice = this.byPrice.bind(this);
    this.byStock = this.byStock.bind(this);
  }

  // I could fetch the data from an URL or import it locally
  // But I chose to fetch to make it feel... more real?
  componentWillMount() {
    fetch("http://localhost:3000/products.json")
      .then(response => response.json())
      .then(data => this.setState({ products: data.products }));
  }

  byId(product) {
    // If the filter.id equals the product.id or the filters.id doesn't exist
    return (Number(this.props.filters.id) === product.sublevel_id ||
      this.props.filters.id === '');
  }

  byAvailability(product) {
    return (
      // If the available filter is true and the product is available
      (this.props.filters.available && product.available) || // Or
      // If the not_available filter is true and the product isn't available
      (this.props.filters.not_available && !product.available)
    )
  }

  byPrice(product) {
    let price = Number(product.price.replace(/[^0-9\.-]+/g,""));
    let min = Number(this.props.filters.price_min);
    let max = (this.props.filters.price_max === '') ? Infinity :
      this.props.filters.price_max;
    return (price >= min && price <= max);
  }

  byStock(product) {
    let stock = product.quantity;
    let min = Number(this.props.filters.stock_min);
    let max = (this.props.filters.stock_max === '') ? Infinity :
      this.props.filters.stock_max;
    return (stock >= min && stock <= max);
  }

  render() {
    let products = this.state.products
      .filter(this.byId)
      .filter(this.byAvailability)
      .filter(this.byPrice)
      .filter(this.byStock);

    if (this.props.sortFunc) {
      products.sort(this.props.sortFunc);
    }

    return (
      <Masonry className={'columns is-desktop'}>
	{products.map(product =>
	  { return <Product key={product.id} info={product} /> }
	)}
      </Masonry>
    );
  }
}

class Product extends Component {
  render() {
    let availability;
    if (!this.props.info.available) {
      availability = <p className="not-available">no disponible</p>
    }
    return (
      <div className="column is-one-third">
	<article className="card">
	  <div className="card-image">
	    <figure className="image is-4by3">
	      <img src="https://bulma.io/images/placeholders/640x480.png"
		alt="Placeholder" />
	    </figure>
	  </div>
	  <div className="card-content">
	    <div className="media">
	      <div className="media-content">
		<p className="title is-5">{this.props.info.name}</p>
		<p className="subtitle is-5">{this.props.info.price}</p>
	      </div>
	    </div>
	    <div className="content">
	      {this.props.info.quantity} en inventario.
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	      Phasellus nec iaculis mauris.
	      {availability}
	    </div>
	  </div>
	  <footer className="card-footer">
	    <a href="" className="card-footer-item">Agregar al Carrito</a>
	  </footer>
	</article>
      </div>
    );
  }
}

export default Products;
