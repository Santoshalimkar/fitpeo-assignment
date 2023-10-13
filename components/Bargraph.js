'use client'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Bargraph() {
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['Jan', 'Feb', 'Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 5, 3,5,6,7,8,9,4,5,6,7],
        },
      ]}
      width={500}
      height={300}
    />
  );
}