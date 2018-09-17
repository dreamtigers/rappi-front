import React, { Component } from 'react';

const Context = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: ['test']
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
	{this.props.children}
      </Context.Provider>
    );
  }

};

export const CartConsumer = Context.Consumer;
