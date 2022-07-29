import { DatePicker, Space } from 'antd';
import React from 'react';

const DatePickerComponent = ({ setOutCome, outCome }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setOutCome({ ...outCome, date: dateString })
  };
  return <Space direction="vertical">
    <DatePicker onChange={onChange} picker="month" />
  </Space>
};

export default DatePickerComponent;