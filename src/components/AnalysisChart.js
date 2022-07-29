import React from 'react';

import { Column } from '@ant-design/plots';

export const AnalysisChart = ({data}) => {

    const config = {
      data,
      isStack: true,
      xField: 'date',
      yField: 'amount',
      seriesField: 'category',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle'
      },
      interactions: [
        {
          type: 'active-region',
          enable: false,
        },
      ],
      columnBackground: {
        style: {
          fill: 'rgba(0,0,0,0.1)',
        },
      },
    };
  
    return <Column {...config} />;
  };