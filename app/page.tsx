'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { products } from '@/lib/data';
import { FilterState } from '@/lib/types';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    brands: [],
    search: ''
  });

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const priceParam = searchParams.get('price');
    const brandParam = searchParams.get('brand');
    const searchParam = searchParams.get('search');

    setFilters({
      categories: categoryParam ? [categoryParam] : [],
      priceRange: priceParam ? priceParam.split('-').map(Number) as [number, number] : [0, 1000],
      brands: brandParam ? [brandParam] : [],
      search: searchParam || ''
    });
  }, [searchParams]);

  // Update URL when filters change
  const updateURL = (newFilters: FilterState) => {
    const params = new URLSearchParams();
    
    if (newFilters.categories.length > 0) {
      params.set('category', newFilters.categories[0]);
    }
    if (newFilters.priceRange[1] < 1000) {
      params.set('price', `${newFilters.priceRange[0]}-${newFilters.priceRange[1]}`);
    }
    if (newFilters.brands.length > 0) {
      params.set('brand', newFilters.brands[0]);
    }
    if (newFilters.search) {
      params.set('search', newFilters.search);
    }

    const url = params.toString() ? `/?${params.toString()}` : '/';
    router.push(url, { scroll: false });
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    updateURL(newFilters);
  };

  const handleSearchChange = (search: string) => {
    const newFilters = { ...filters, search };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Price filter
      if (product.price > filters.priceRange[1]) {
        return false;
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Search filter
      if (filters.search && !product.title.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={filters.search} onSearchChange={handleSearchChange} />
      
      <div className="flex">
        <Sidebar filters={filters} onFilterChange={handleFilterChange} />
        
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Discover Premium Products
            </h1>
            <p className="text-gray-600">
              {filteredProducts.length} products found
              {filters.search && ` for "${filters.search}"`}
            </p>
          </div>
          
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
      
      <Footer />
    </div>
  );
}