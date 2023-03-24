import React from 'react';
import Image from 'next/image';
import styles from './products.module.css';
import products from './products';

function Product({ product }) {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <Image
          src={product.image}
          alt={product.name}
          width={196}
          height={115}
        />
      </div>
      {product.badge && <div className={styles.badge}>{product.badge}</div>}
      <div className={styles.details}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.brand}>{product.brand}</p>
      </div>
    </div>
  );
}

export default function Products({ currentPage }) {
  let multiplication = 1;

  if (currentPage === 1) {
    multiplication;
  } else if (currentPage > 1) {
    multiplication = currentPage * 4.5;
  }

  const productFilter = products.filter((el) => el.id >= multiplication);

  return (
    <div className={styles.containerProducts}>
      <div className={styles.products}>
        {productFilter.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>

  );
}
