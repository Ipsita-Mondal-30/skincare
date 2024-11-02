import React, { useState } from 'react';
import ProductSelector from './ProductSelector';
import RoutineToggle from './RoutineToggle';
import ProductCard from './ProductCard';
import AlertBox from './AlertBox';

const skincareData = {
  
};

const SkincareGuide = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedTime, setSelectedTime] = useState('day');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <RoutineToggle selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <ProductSelector 
        skincareData={skincareData} 
        selectedTime={selectedTime} 
        selectedProduct={selectedProduct} 
        setSelectedProduct={setSelectedProduct} 
      />
      {selectedProduct && (
        <div className="space-y-6">
          <ProductCard productData={skincareData[selectedProduct]} />
          <AlertBox expertise={skincareData[selectedProduct].expertise} />
        </div>
      )}
    </div>
  );
};

export default SkincareGuide;
