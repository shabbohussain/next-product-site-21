import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import './categoryStyle.css';
import { productCategory, selectedCategory } from '../redux/features/productSlice';
import usePagination from '../customHooks/usePagination';
import Pagination from '../customHooks/PaginationSection';
import { useRouter } from 'next/router';

const ITEMS_PER_PAGE = 15;

const CategoryItem = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [category1, setCategory1] = useState<any[]>([]);
  const [groupedByCategory, setGroupedByCategory] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const stored = localStorage.getItem('product');
    const parsed = stored ? JSON.parse(stored) : [];
    setCategory1(parsed);
  }, []);

  useEffect(() => {
    const grouped = category1.reduce((acc: Record<string, any[]>, item: { category: string }) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
    setGroupedByCategory(grouped);
    dispatch(productCategory(grouped));
  }, [category1]);

  const memoizedEntries = useMemo(() => Object.entries(groupedByCategory), [groupedByCategory]);

  const { paginatedData, currentPage, totalPages, goToNextPage, goToPreviousPage } = usePagination(
    memoizedEntries,
    ITEMS_PER_PAGE
  );

  const handleCatagory = (category: string) => {
    console.log('Selected Category:', category);
    const groupedVal = Object.entries(groupedByCategory).find(([key]) => key === category);
    if (groupedVal) {
      dispatch(selectedCategory(category));
      localStorage.setItem('selectedCategory', JSON.stringify(groupedVal[1]));
    }
    router.push(`/categoryTypeItem`);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />

      {/* Grid Display */}
      <div className='category-grid'>
        {paginatedData.map(([category, items]: [string, any[]]) => (
          <div className='category-card' key={category} onClick={() => handleCatagory(category)}>
            <h3>{category}</h3>
            <p>{items.length} items</p>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </div>
  );
};

export default CategoryItem;
