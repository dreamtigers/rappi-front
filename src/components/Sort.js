import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
      <div className="field is-grouped">
	<p className="control">Ordenar por: </p>
	<p className="control"><a className="button is-small">Precio</a></p>
	<p className="control"><a className="button is-small">Disponibilidad</a></p>
	<p className="control"><a className="button is-small">Cantidad</a></p>
      </div>
    );
  }
}

export default Sort;
