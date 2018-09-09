import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sublevels: [{id: '1', name:'Cargando...'}],
      chosen: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // I could fetch the data from an URL or import it locally
  // But I chose to fetch to make it feel... more real?
  componentWillMount() {
    fetch("http://localhost:3000/categories.json")
      .then(response => response.json())
    // The original data starts with a 'categories' array, in which every
    // element is an Object, I assigned that array directly to the 'sublevels'
    // variable which in turn belongs to the state of the Categories class.

    // This way, I can map every object of the original array to a Category
    // component, and then it solves itself recursively. This happens in the
    // render function.
      .then(data => this.setState({ sublevels: data.categories }));
  }

  handleClick(event) {
    this.setState({ chosen: event.target.id });
  }

  render() {
    return (
      <div id="categories">
	<ul className="menu-list">
	  {this.state.sublevels.map(category => // Map elements to Category components
	    { return <Category
	      key={category.id}
	      info={category} IdGetter={this.handleClick} />
	    }
	  )}
	</ul>
      </div>
    );
  }
}

class Category extends React.Component {
  render() {
    if (this.props.info.sublevels) {
      return (
	<li>
	  <p>{this.props.info.name}</p>
	  <ul className="menu-list">
	    {this.props.info.sublevels.map(category =>
	      { return <Category key={category.id} info={category} IdGetter={this.props.IdGetter}/> }
	    )}
	  </ul>
	</li>
      )
    } else {
      return (
	<a id={this.props.info.id} onClick={this.props.IdGetter} >
	  {this.props.info.name}
	</a>
      )
    }
  }
}

export default Categories;
