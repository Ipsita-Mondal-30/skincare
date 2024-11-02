import React from 'react';
import { Sun, Moon } from 'lucide-react';

const RoutineToggle = ({ selectedTime, setSelectedTime }) => (
  <div className="flex gap-4 mt-4">
    <button
      onClick={() => setSelectedTime('day')}
      className={`px-4 py-2 rounded-full ${selectedTime === 'day' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}
    >
      <Sun className="inline-block mr-2" size={16} /> Day Routine
    </button>
    <button
      onClick={() => setSelectedTime('night')}
      className={`px-4 py-2 rounded-full ${selectedTime === 'night' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
    >
      <Moon className="inline-block mr-2" size={16} /> Night Routine
    </button>
  </div>
);

export default RoutineToggle;
