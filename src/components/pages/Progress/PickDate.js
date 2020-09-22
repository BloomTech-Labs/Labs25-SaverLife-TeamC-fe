import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import './PickDate.css';
import 'react-calendar/dist/Calendar.css';

function PickDate() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}

export default PickDate;
