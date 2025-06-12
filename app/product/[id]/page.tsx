import React from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductDetailClient } from '@/components/ProductDetailClient';

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}