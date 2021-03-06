import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopping_cart: 'shopping-cart'
    }

    this.showCart = this.showCart.bind(this);
  }

  showCart(event) {
    event.preventDefault();

    let target = document.getElementById(this.state.shopping_cart);
    target.classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="navbar is-danger">
	<div className="container">
	  <div className="navbar-brand">
	    <a className="navbar-item" href="../">
	      <i>El Baratón</i>
	    </a>
	    <Burger targetId="navbarMenu" />
	  </div>
	  <div id="navbarMenu" className="navbar-menu">
	    <div className="navbar-end">
	      <div className="tabs is-right">
		<a className="navbar-item is-white" onClick={this.showCart}>
		  Carrito
		</a>
	      </div>
	    </div>
	  </div>
	</div>
      </nav>
    );
  }
}

class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      targetId: this.props.targetId
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    let target = document.getElementById(this.state.targetId);
    target.classList.toggle('is-active');

    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    let className = this.state.isActive ? "navbar-burger is-active" :
      "navbar-burger";
    return (
      <span className={className}
	onClick={this.handleClick}
	data-target={this.props.targetId}
	aria-label="menu"
	aria-expanded="false"
      >
	<span aria-hidden="true"></span>
	<span aria-hidden="true"></span>
	<span aria-hidden="true"></span>
      </span>
    )
  };
}

export default Nav;
