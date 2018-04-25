import React from 'react';
import ReactDOM from 'react-dom';

import Product from './Product.jsx';

import styles from './styles/Products.css';

export default (props) => {

  const productsClassName = 'Products__inner___2mjZo';
  const goLeftClassName = 'Products__goLeft___3ROMB';

  const scrollRight = (event) => {
    document.getElementsByClassName(productsClassName)[0].scrollLeft += 500;
    const scrollLeftVal = document.getElementsByClassName(productsClassName)[0].scrollLeft;
    const scrollWidthVal = document.getElementsByClassName(productsClassName)[0].scrollWidth;
    const offsetWidthVal = document.getElementsByClassName(productsClassName)[0].offsetWidth;
    if (scrollWidthVal - (scrollLeftVal + offsetWidthVal) < 450) { // have to do this for bug that came with smooth scrolling feature
      props.hideButton('right');
    } else {
      props.showButton('left');
    }
    event.currentTarget.style = 'right: 0';
  };

  const scrollLeft = (event) => {
    document.getElementsByClassName(productsClassName)[0].scrollLeft -= 500;
    const scrollLeftVal = document.getElementsByClassName(productsClassName)[0].scrollLeft;
    if (scrollLeftVal  < 700) { // have to do this for bug that came with smooth scrolling feature
      props.hideButton('left');
    } else {
      props.showButton('right');
    }
    event.currentTarget.style = 'right: 0';
  };

  if (props.products.length) {
    return (<div className={styles.relatedProducts}>
      
      
      <div className={styles.inner}>
        {props.products.map((product) => (
          <Product
            product={product}
            key={product.id}
          />
        ))}
      </div>

      <button
        className={styles.goLeft}
        style={{display: props.showLeftButton ? 'block' : 'none'}}
        onClick={scrollLeft}
        id="leftButton"
      >
        <i className={styles.leftArrow}>&nbsp;</i>
      </button>
      <button
        className={styles.goRight}
        style={{display: props.showRightButton ? 'block' : 'none'}}
        onClick={scrollRight}
        id="rightButton"
      >
        <i className={styles.rightArrow}>&nbsp;</i>
      </button>
    </div>);
  } else {
    return <span>Loading...</span>
  }
}