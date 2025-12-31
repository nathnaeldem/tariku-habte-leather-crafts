
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-stone-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/80 backdrop-blur-md">
          <button className="w-full py-4 bg-black text-white text-[10px] uppercase tracking-[0.2em] font-bold">
            Quick View
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1 block">
            {product.category}
          </span>
          <h3 className="text-lg font-serif mb-1 group-hover:italic transition-all">
            {product.name}
          </h3>
        </div>
        <span className="text-sm font-medium">
          ${product.price}
        </span>
      </div>
    </div>
  );
};
