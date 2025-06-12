'use client';

import React from 'react';
import { FilterState } from '@/lib/types';
import { categories, brands } from '@/lib/data';

interface SidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    
    onFilterChange({ ...filters, brands: newBrands });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    onFilterChange({ ...filters, priceRange: [min, max] });
  };

  const clearFilters = () => {
    onFilterChange({
      categories: [],
      priceRange: [0, 1000],
      brands: [],
      search: filters.search
    });
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          Clear all
        </button>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Price Range</h3>
        <div className="space-y-4">
          <div className="px-3">
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceRangeChange(0, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${filters.priceRange[1] / 10}%, #E5E7EB ${filters.priceRange[1] / 10}%, #E5E7EB 100%)`
              }}
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>$0</span>
            <span className="font-medium text-gray-900">${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Brands</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};