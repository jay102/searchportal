import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

//import filter
import { Filter } from '../../Sidebars/leftSidebar/leftSideBar';

const filterModal = ({className, visible, toggle}) => {
    return (
        <Modal isOpen={visible} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Filters</ModalHeader>
        <ModalBody>
        <Filter/>
        </ModalBody>
        
        </Modal>
    )
}

export default filterModal;
