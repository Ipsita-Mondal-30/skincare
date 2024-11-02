import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import RoutineTabs from './RoutineTabs';
import SkinTypeFilter from './SkinTypeFilter';
import ProductCard from './ProductCard';

const SkincareGuide = () => {
  const [selectedTime, setSelectedTime] = useState('day');
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [selectedSkinType, setSelectedSkinType] = useState('all');

  const products = {
    retinol: {
      name: 'Retinol',
      description: 'Anti-aging ingredient that promotes cell turnover',
      timeOfDay: 'night',
      benefits: ['Reduces fine lines', 'Improves skin texture', 'Helps with acne'],
      pairsWellWith: ['Moisturizer', 'Hyaluronic Acid'],
      avoidCombiningWith: ['Vitamin C', 'AHAs/BHAs'],
      skinTypes: ['normal', 'dry', 'combination'],
      precautions: 'Start slowly, use sunscreen during day',
      color: 'bg-orange-100'
    },
      
  };

  const skinTypes = [
    { id: 'all', label: 'All Skin Types' },
    { id: 'oily', label: 'Oily' },
    { id: 'dry', label: 'Dry' },
    { id: 'combination', label: 'Combination' },
    { id: 'normal', label: 'Normal' },
    { id: 'acne-prone', label: 'Acne-Prone' }
  ];

  const filteredProducts = Object.entries(products).filter(([_, product]) => {
    const timeMatch = selectedTime === 'both' || product.timeOfDay === selectedTime || product.timeOfDay === 'both';
    const skinTypeMatch = selectedSkinType === 'all' || product.skinTypes.includes(selectedSkinType) || product.skinTypes.includes('all');
    return timeMatch && skinTypeMatch;
  });

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Skincare Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <RoutineTabs selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
        <SkinTypeFilter skinTypes={skinTypes} selectedSkinType={selectedSkinType} setSelectedSkinType={setSelectedSkinType} />
        <div className="space-y-4">
          {filteredProducts.map(([id, product]) => (
            <ProductCard key={id} id={id} product={product} expandedProduct={expandedProduct} setExpandedProduct={setExpandedProduct} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkincareGuide;
