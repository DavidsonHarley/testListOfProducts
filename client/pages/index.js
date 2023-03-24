import { useState } from 'react';
import Products from '../components/Products/Products';
import products from '@/components/Products/products';
import Pagination from '../components/Pagination/Pagination';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const productsPerPage = 6;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <>
      <Products
        product={products.slice(startIndex, endIndex)}
        currentPage={currentPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={handlePageChange}
      />
    </>

  );
}
