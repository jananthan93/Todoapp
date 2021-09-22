import React, { FC, ReactElement} from 'react'
import { Button, Modal } from 'react-bootstrap';
import { DELETE } from '../redux/utils';

const ConfirmModal:FC<{ show:boolean,state:any,handleClose: any,handleOnClick:any }>  =({ show,state,handleClose,handleOnClick }): ReactElement => {  

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {state.action===DELETE?'Do you Confirm Delete?':'Did you Change status to Done?'}
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