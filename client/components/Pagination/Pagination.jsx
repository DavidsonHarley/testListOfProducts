import Button from '../Button/Button';
import styles from './pagination.module.css';

export default function Pagination({ currentPage, totalPages, onChangePage }) {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1);
    }
  };

  const handleInputChange = (event) => {
    const page = Number(event.target.value);
    if (page >= 1 && page <= totalPages) {
      onChangePage(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </Button>
      <input className={styles.input} type="number" value={currentPage} onChange={handleInputChange} />
      <span>
        of
        {' '}
        {totalPages}
      </span>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  );
}
