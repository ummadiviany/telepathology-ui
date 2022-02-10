import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = ({title, modalData, setModalData, children, handleSubmit,hideSaveBtn=false }) => {
  const handleClose = () => setModalData({ ...modalData, show: false });
  console.log(modalData,'modalData..');
  return (
    <>
      <Modal show={modalData.show} onHide={handleClose} >
        <Modal.Header closeButton closeVariant="white" style={{background:'black', color:'white'}}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background:'black', color:'white', height:"400px"}}>
           {children}
        </Modal.Body>
        <Modal.Footer style={{background:'black', color:'white'}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {
            !hideSaveBtn ? 
            <Button variant="primary" onClick={handleSubmit} style={{backgroundColor:"#3F706E",border:"1px solid #1f2833"}}>
            Save Changes
          </Button>
            : null
          }
      
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
