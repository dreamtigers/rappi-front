import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'shopping-cart',
      products: [],
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
	<div class="modal-card">
	  <header class="modal-card-head">
	    <p class="modal-card-title">Carrito</p>
	  </header>
	  <section class="modal-card-body">
	  </section>
	  <footer class="modal-card-foot">
	    <button class="button is-success">Comprar</button>
	  </footer>
	</div>
      </div>
    );
  }
}

export default Cart;
