import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-3';

import styles from './styles/Product.css';

export default (props) => {
  const {product} = props;
  return (
    <div className={styles.product}>
      <div className={styles.picture}>
        <img src={product.imageUrls[0]} />
      </div>

      <span className={styles.price}>${product.price}</span>

      <Link to={`/${product.id}`}>
        {product.name}
      </Link>

    </div>
  );
};