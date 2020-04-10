import React,{ useState} from 'react';
import './styles.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ByDate = () => {
    const [date, setDate] = useState(new Date())

const handleChange = date => setDate(date) 
    return (
        <div className="by-date">
        <div className="radio">
        <label><input type="radio" name="date"/>Any Time</label>
        </div>
        <div className="radio">
        <label><input type="radio" name="date" checked/>Custom Range</label>
        </div>
        <DatePicker
        selected={date}
        onChange={handleChange}
        
      />
        </div>
    )
}

export default ByDate;
