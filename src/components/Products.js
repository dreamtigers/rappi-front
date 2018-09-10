import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{id: '1', name:'Cargando...'}],
    };
  }

  // I could fetch the data from an URL or import it locally
  // But I chose to fetch to make it feel... more real?
  componentWillMount() {
    fetch("http://localhost:3000/products.json")
      .then(response => response.json())
      .then(data => this.setState({ products: data.products }));
  }

  render() {
    //console.log(this.state.products)
    return (
      <Masonry className={'columns'} >
	{this.state.products.map(product =>
	  { return <Product
	    key={product.id}
	    info={product} />
	  }
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
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	      Phasellus nec iaculis mauris.
	      {availability}
	    </div>
	  </div>
	  <footer className="card-footer">
	    <a href="" className="card-footer-item">Save</a>
	    <a href="" className="card-footer-item">Edit</a>
	    <a href="" className="card-footer-item">Delete</a>
	  </footer>
	</article>
      </div>
    );
  }
}

export default Products;
