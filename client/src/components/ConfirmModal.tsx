import React, { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { DELETE, EDIT } from '../redux/utils';

const ConfirmModal:FC<{ show:boolean,state:any,handleClose: any,handleOnClick:any }>  =({ show,state,handleClose,handleOnClick }): ReactElement => {  
    
    useEffect(()=>{
        if(state.action===DELETE&&state.refObj!=undefined){
            console.log(state.refObj)
        }else{
        }
    },[state,show])

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {state.action==DELETE?'Do you Confirm Delete?':'Did you Change status to Done?'}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleOnClick(state.refObj)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default ConfirmModal;