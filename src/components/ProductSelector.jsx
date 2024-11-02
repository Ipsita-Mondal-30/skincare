
import React from 'react';

const ProductSelector = ({ skincareData, selectedTime, selectedProduct, setSelectedProduct }) => (
  <div className="relative">
    <select 
      value={selectedProduct}
      onChange={(e) => setSelectedProduct(e.target.value)}
      className="w-full p-3 border-2 border-gray-200 rounded-lg appearance-none"
    >
      <option value="">Select a skincare product...</option>
      {Object.entries(skincareData).map(([key, value]) => (
        (value.timeOfUse === selectedTime || value.timeOfUse === 'both') && (
          <option key={key} value={key}>{key.replace('-', ' ')}</option>
        )
      ))}
    </select>
  </div>
);

export default ProductSelector;
