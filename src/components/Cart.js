import React, { Component } from 'react';

import { CartConsumer } from './Context';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'shopping-cart',
    }

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(event) {
    event.preventDefault();
    let target = document.getElementById(this.state.id);

    target.classList.toggle('is-active');
  }

  render() {
    return (
      <div id="shopping-cart" className="modal">
	<div className="modal-background" onClick={this.closeModal} />
	<div className="modal-card">
	  <header className="modal-card-head">
	    <p className="modal-card-title">Carrito</p>
	  </header>
	  <section className="modal-card-body">
	    <CartConsumer>
	      {(context) => (
		console.log(context),
		<a className="card-footer-item" onClick={null}>
		</a>
	      )}
	    </CartConsumer>
	  </section>
	  <footer className="modal-card-foot">
	    <button className="button is-success">Comprar</button>
	  </footer>
	</div>
      </div>
    );
  }
}

export default Cart;
