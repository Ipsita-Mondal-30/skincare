
import React from 'react';
import { Search } from 'lucide-react';

const AlertBox = ({ expertise }) => (
  <div className="p-6 border-2 border-blue-200 bg-blue-50">
    <Search className="text-blue-600" size={20} /> {expertise}
  </div>
);

export default AlertBox;
