import React,{ useState} from 'react';
import './styles.scss';
import DateIcon from '../../assets/icons/date-range.svg';

//import picker
import RangePickerModal from '../Modals/DateRangepicker';


const ByDate = () => {
    const [visible, setVisibility] = useState(false);
    const toggle = () => setVisibility(!visible)
    return (
        <div className="by-date">
        <div className="radio">
        <label><input type="radio" name="date"/>Any Time</label>
        </div>
        <div className="radio">
        <label><input type="radio" name="date" checked/>Custom Range</label>
        </div>
        <div className="picker" onClick={toggle}>
        <p>03/23/2020 - 03/31/2020</p>
        <span><img src={DateIcon} alt="date icon"/></span>
        </div>
        <RangePickerModal visible={visible} toggle={toggle}/>
        </div>
    )
}

export default ByDate;
