import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FaTrophy } from 'react-icons/fa';

// Mock data remains the same
const salesData = [
  { day: 'MON', sales: 302000 },
  { day: 'TUE', sales: 80000 },
  { day: 'WED', sales: 100000 },
  { day: 'THU', sales: 180000 },
  { day: 'FRI', sales: 180000 },
  { day: 'SAT', sales: 50000 },
  { day: 'SUN', sales: 88000 },
];

const formatYAxis = (tickItem) => `${tickItem / 1000}k`;
const highestDay = salesData.reduce((prev, current) => (prev.sales > current.sales) ? prev : current);


// --- NEW: Custom Shape for Fully Rounded "Pill" Bars ---
// This component draws a rectangle with a large corner radius to create a pill shape.
// It also adds the black dot for the highlighted bar.
const RoundedPillBar = (props) => {
  const { x, y, width, height, fill, payload } = props;
  const isHighlight = payload.day === highestDay.day;

  if (height <= 0) return null;

  // The radius for the corners. Making it half the width creates the pill shape.
  const radius = width / 2;

  // Add padding from the top for the dot
  const dotPadding = 12; // adjust this value for more/less space
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={radius} ry={radius} />
      {isHighlight && (
        <circle cx={x + width / 2} cy={y + dotPadding} r="3" fill="#000" />
      )}
    </g>
  );
};


const dayFullNames = {
  MON: 'Monday',
  TUE: 'Tuesday',
  WED: 'Wednesday',
  THU: 'Thursday',
  FRI: 'Friday',
  SAT: 'Saturday',
  SUN: 'Sunday',
};

const SalesChart = () => {
  return (
  <div className="bg-white p-4 md:p-6 rounded-2xl col-span-2" style={{ outline: 'none', border: 'none', boxShadow: '0 2px 10px 0 rgba(0,0,0,0.20)' }}>
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h3 className="text-base md:text-lg tracking-wider text-bill-dark">Sales Updates</h3>
        <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
          <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
          <span>Daily sales</span>
        </div>
      </div>
      <div className="h-48 sm:h-56 md:h-60" style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={salesData} 
            margin={{ top: 10, right: 0, left: -20, bottom: 5 }}
            barCategoryGap="32%"
          >
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#000', fontSize: 12 }} />
            <YAxis tickFormatter={formatYAxis} axisLine={false} tickLine={false} tick={{ fill: '#000', fontSize: 12 }} />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              contentStyle={{ background: '#FFF', border: '1px solid #EEE', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              labelStyle={{ fontWeight: 'bold' }}
              formatter={(value) => [`₹${new Intl.NumberFormat('en-IN').format(value)}`, 'Sales']}
            />
            <Bar dataKey="sales" shape={<RoundedPillBar />}>
               {salesData.map((entry) => (
                <Cell 
                  key={`cell-${entry.day}`} 
                  fill={entry.day === highestDay.day ? '#FFC700' : '#FFE580'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
       <div className="mt-4 p-3 bg-gray-50 rounded-lg flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">Highest performance day</p>
          <p className=" text-md text-bill-dark">{dayFullNames[highestDay.day]} - {highestDay.sales/1000}k</p>
        </div>
        <div className="w-8 h-8 flex items-center justify-center bg-emerald-200 rounded-lg">
          <FaTrophy className="w-5 h-5 text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default SalesChart;