import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function App() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
  <div>
    
    <MuiPickersUtilsProvider className = "dates" utils={DateFnsUtils}>
    
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <TimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  </div>
  );
}