import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RelatedProducts from './RelatedProducts.jsx';

import './styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showLeftButton: false,
      showRightButton: true,
    };
  }

  componentDidMount() {
    const productId = this.props.id || 0;
    this.setRelatedProducts(productId);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const newState = Object.assign({}, prevState, nextProps);
    return newState;
  }

  setRelatedProducts(productId) {
    if (productId !== this.state.loadedProductsId) {
      axios.get(`http://34.215.160.52:9001/products/${productId}/related`)
      .then((data) => {
        const products = data.data;
        this.setState({ products, loadedProductsId: productId });
      })
      .catch((err) => {
        throw err;
      });
    }
  }

  hideButton(btn) {
    if (btn === 'right') {
      this.setState({ showRightButton: false });
    } else {
      this.setState({ showLeftButton: false });
    }
  }

  showButton(btn) {
    if (btn === 'right') {
      this.setState({ showRightButton: true });
    } else {
      this.setState({ showLeftButton: true });
    }
  }

  render() {
    this.setRelatedProducts(this.props.id);
    return (
      <RelatedProducts 
        products={this.state.products}
        showLeftButton={this.state.showLeftButton}
        showRightButton={this.state.showRightButton}
        showButton={this.showButton.bind(this)}
        hideButton={this.hideButton.bind(this)}
      />
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));