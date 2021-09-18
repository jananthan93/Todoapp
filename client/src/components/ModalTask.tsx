import React, { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { EDIT } from '../redux/utils';

const ModalTask:FC<{ show:boolean,state:any,handleClose: any,handleOnClick:any }>  =({ show,state,handleClose,handleOnClick }): ReactElement => {  
    const activeStates =["Todo","Done"]
    const intialState={
        title:"",
        activeState:undefined,
        endDate:undefined
    }
    const [task,setTask] = useState<any>(intialState)
    const handleOnchange =(e:any)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        if(state.action===EDIT&&state.refObj!=undefined){
            console.log(state.refObj)
            setTask(state.refObj)
        }else{
            setTask(intialState)
        }
    },[state,show])
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <Form>
          <Form.Group  className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Title
            </Form.Label>
            <Col sm="10">
            <Form.Control name="title" type="text" placeholder="Enter title" onChange={handleOnchange} value={task.title}/>
            </Col>
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            End date
            </Form.Label>
            <Col sm="10">
            <Form.Control  type="date" name="endDate" onChange={handleOnchange} value={task.endDate}/>
            </Col>
        </Form.Group>
        {state.action===EDIT&&<Form.Group  className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
            active State
        </Form.Label>
        <Form.Select aria-label="Default select" name="activeState" onChange={handleOnchange} value={task.activeState}>
            <option>select status</option>
            {
                activeStates.map(status=>(
                    <option value={status}>{status}</option>
                ))
            }
        </Form.Select>
        </Form.Group>}
        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleOnClick(task)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default ModalTask;