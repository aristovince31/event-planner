import { useState } from 'react';
import Calendar from 'react-calendar';

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default EventCalendar;