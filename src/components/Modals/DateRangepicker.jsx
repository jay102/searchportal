import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';


const Picker = ({className, visible, toggle}) => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);

    return (
        <Modal isOpen={visible} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Range</ModalHeader>
        <ModalBody>
        <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            />
        
        </ModalBody>
        </Modal>
    )
}

export default Picker;
