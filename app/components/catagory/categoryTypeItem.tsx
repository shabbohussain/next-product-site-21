'use client';
import { useEffect, useId, useMemo, useState } from 'react';

import './style.css';
import { useDispatch } from 'react-redux';
import { productItem, selectedProduct } from '@/components/redux/features/productSlice';
import { useRouter } from 'next/router';
import usePagination from '@/components/customHooks/usePagination'; // Adjusted path to relative
import Pagination from '../customHooks/PaginationSection';

const ITEMS_PER_PAGE = 20;

const CategoryTypeItems = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    try {
      const data = localStorage.getItem('selectedCategory'); // fixed key
      if (data) {
        setData(JSON.parse(data));
      }
    } catch (error) {
      console.error('Failed to load user details from localStorage:', error);
    }
  }, []);

  // dispatch(selectedProduct(userData));
  const { paginatedData, currentPage, totalPages, goToNextPage, goToPreviousPage } = usePagination(
    data,
    ITEMS_PER_PAGE
  );

  const router = useRouter();
  const id = useId();
  const handleSelectItem = (item: string) => {
    router.push(`/form?id=${id}`);
    dispatch(selectedProduct(item));
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
      <div className='product-grid'>
        {paginatedData.map((p: any) => (
          <div className='product-card' key={p.id}>
            <h3>{p.name}</h3>
            <p className='price'>₹{p.price}</p>
            <p className='description'>{p.description}</p>
            <p>
              <strong>Category:</strong> {p.category}
            </p>
            <p>
              <strong>Rating:</strong> {p.rating.toFixed(1)} ⭐ ({p.numReviews} reviews)
            </p>
            <p>
              <strong>In Stock:</strong> {p.countInStock}
            </p>
            <div style={{ display: 'flex', margin: '10px', height: '7vh' }}>
              <button onClick={() => handleSelectItem(p.category)} className='select-button'>
                Select Item
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </>
  );
};
export default CategoryTypeItems;
