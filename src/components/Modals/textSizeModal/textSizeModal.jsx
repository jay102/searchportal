import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './textsize.styles.scss';

const textSizeModal = ({className, visible, toggle}) => {

    return (
        <Modal isOpen={visible} toggle={toggle} className={className}>
        <div className="text-size-modal">
        <ModalHeader toggle={toggle}>TextSize</ModalHeader>
        <ModalBody>
            <p className="subtitle">Select the comfortable text size </p>
            <ul className="list-group">
            <li className="list-group-item small">Small</li>
            <li className="list-group-item medium">Medium</li>
            <li className="list-group-item large">Large</li>
            </ul>
        
        </ModalBody>
        </div>
        </Modal>
    )
}

export default textSizeModal;
