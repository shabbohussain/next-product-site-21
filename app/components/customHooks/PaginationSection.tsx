const Pagination = ({ currentPage, totalPages, goToNextPage, goToPreviousPage }: any) => {
  return (
    <>
      {/* Pagination Controls */}
      <div className='pagination' style={{ margin: '10px' }}>
        <button style={{ margin: '10px' }} onClick={() => goToPreviousPage()} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button style={{ margin: '10px' }} onClick={() => goToNextPage()} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
