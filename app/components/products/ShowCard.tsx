'use client';
import { useEffect, useId, useMemo, useState } from 'react';
import data from '../mock/product.json';
import './showStyle.css';
import { useDispatch } from 'react-redux';
import { productItem, selectedProduct } from '@/components/redux/features/productSlice';
import { useRouter } from 'next/router';
import usePagination from '@/components/customHooks/usePagination'; // Adjusted path to relative
import Pagination from '../customHooks/PaginationSection';
import { addItem } from '../redux/features/cardItemSlice';

const ITEMS_PER_PAGE = 20;

const ProductList = () => {
  const dispatch = useDispatch();
  dispatch(productItem(data));
  const { paginatedData, currentPage, totalPages, goToNextPage, goToPreviousPage } = usePagination(
    data,
    ITEMS_PER_PAGE
  );

  const router = useRouter();
  const id = useId();
  const handleSelectItem = (item: any) => {
    // router.push(`/form?id=${id}`);
    dispatch(selectedProduct(item));
    console.log('Selected Item:', item);
    dispatch(addItem(item));
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
        <div className='product'>
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
                <button onClick={() => handleSelectItem(p)} className='select-button'>
                  Select Item
                </button>
              </div>
            </div>
          ))}
        </div>
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
export default ProductList;
