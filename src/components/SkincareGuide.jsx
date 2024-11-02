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
    vitaminC: {
      name: 'Vitamin C',
      description: 'Antioxidant that brightens skin and fights free radicals',
      timeOfDay: 'day',
      benefits: ['Brightens complexion', 'Protects from UV damage', 'Boosts collagen'],
      pairsWellWith: ['Sunscreen', 'Vitamin E'],
      avoidCombiningWith: ['Retinol', 'Niacinamide'],
      skinTypes: ['all'],
      precautions: 'Store in dark bottle, use within 3 months',
      color: 'bg-yellow-100'
    },
    niacinamide: {
      name: 'Niacinamide',
      description: 'Versatile ingredient that helps with multiple skin concerns',
      timeOfDay: 'both',
      benefits: ['Reduces pore size', 'Controls oil', 'Strengthens skin barrier'],
      pairsWellWith: ['Hyaluronic Acid', 'Peptides'],
      avoidCombiningWith: ['Vitamin C'],
      skinTypes: ['all'],
      precautions: 'Start with lower concentration',
      color: 'bg-blue-100'
    },
    salicylicAcid: {
      name: 'Salicylic Acid',
      description: 'BHA that exfoliates and unclogs pores',
      timeOfDay: 'both',
      benefits: ['Treats acne', 'Exfoliates skin', 'Reduces inflammation'],
      pairsWellWith: ['Niacinamide', 'Hyaluronic Acid'],
      avoidCombiningWith: ['Retinol', 'Other exfoliants'],
      skinTypes: ['oily', 'combination', 'acne-prone'],
      precautions: 'May cause dryness, use sunscreen',
      color: 'bg-green-100'
    }
  };  
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

export default SkincareGuide;
