import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';

const Picker = ({className, visible, toggle}) => {
    const [date, setDate] = useState(new Date())
    const handleSelect = (date) => setDate(date);

    return (
        <Modal isOpen={visible} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Range</ModalHeader>
        <ModalBody>
        <Calendar
        date={date}
        direction="horizontal"
        onChange={handleSelect}
      />
        
        </ModalBody>
        </Modal>
    )
}

export default Picker;
