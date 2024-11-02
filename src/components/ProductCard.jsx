
import React from 'react';
import { AlertTriangle, Star } from 'lucide-react';

const ProductCard = ({ productData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className={`p-6 ${productData.color} border-2 ${productData.borderColor}`}>
      <h3 className="font-bold text-lg mb-4">{productData.usage}</h3>
      <p>Frequency: {productData.frequency}</p>
    </div>
    <div className="bg-yellow-50 p-6 border-2 border-yellow-200">
      <AlertTriangle className="text-yellow-600" /> Warning: {productData.warning}
    </div>
  </div>
);

export default ProductCard;
