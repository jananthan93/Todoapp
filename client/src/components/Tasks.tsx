import React, { useEffect, useState } from "react"
import { Col, Row, Table,Container, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import TaskService from "../redux/taskService"
import { ADD_TASK, FETCH_TASKS } from "../redux/actionTypes"
import ModalTask from "./ModalTask"
import { ADD, convert, DELETE, EDIT, STATUS_CHANGE } from "../redux/utils"
import ConfirmModal from "./ConfirmModal"

export default function Tasks() {
    const dispatch = useDispatch()
    const [show, setShow] = useState<boolean>(false)
    const [visibleConfirm, setVisibleConfirm] = useState<boolean>(false)
    const [state,setState] =useState<any>({
        action:ADD,
        refObj:null,
        title:"Create Task"
    })
    const toggleModal = (modalData:any) => {
        setState({
            ...state,
            action:modalData.action,
            refObj:modalData.refObj,
            title:modalData.title
        })
    }
    const handleClose = ()=>{
        setShow(false)
        setState({
            action:ADD,
            refObj:null,
            title:"Create Task"
        })
    }
    const handleConfirmModalClose = ()=>{
        setVisibleConfirm(false)
        setState({
            action:ADD,
            refObj:null,
            title:"Create Task"
        })
    }
    const createTask =(taskObj:Task)=>{
        TaskService.create(taskObj).then(response=>{
            getAllTasks()
            handleClose()
        })
        .catch(error=>console.log(error))
    }
    const updateTask =(taskObj:Task)=>{
        TaskService.update(taskObj._id,taskObj).then(response=>{
            getAllTasks()
            handleClose()
        })
        .catch(error=>console.log(error))
    }
    const deleteTask=(id:string)=>{
        TaskService.remove(id).then(response=>{
            getAllTasks()
            handleConfirmModalClose()
        })
        .catch(error=>console.log(error))
    }
    const changeStatus=(id:string,status:string)=>{
        TaskService.changeStatus(id,status).then(response=>{
            getAllTasks()
            handleConfirmModalClose()
        })
        .catch(error=>console.log(error))
    }
    const getAllTasks=() =>{
        TaskService.getAll().then(response=>{
            const data =response.data as AxiosResponseData
                dispatch({
                    type:FETCH_TASKS,
                    tasks:data.results,
                    task:null
                })
            })
        .catch(error=>console.log(error))
    }
    const handleOnClick=(taskObj:Task)=>{
        if(state.action == ADD){
            createTask(taskObj)
        }else if(state.action == EDIT){
            updateTask(taskObj)
        }else if(state.action == DELETE){
            deleteTask(taskObj._id)
        }else{
            changeStatus(taskObj._id,'Done')
        }
    }
    useEffect(()=>{
        getAllTasks()
    },[dispatch])

    const tasks = useSelector<RootState, Task[]>((state) => state.taskReducer.tasks);
    return (
        <>
        <ConfirmModal state={state} handleClose={handleConfirmModalClose} show={visibleConfirm} handleOnClick={handleOnClick}/>
        <ModalTask handleClose={handleClose} show={show} handleOnClick={handleOnClick} state={state}/>
        <Row style={{marginTop:20,marginLeft:60}}><Button className="col-auto" onClick={()=>{toggleModal({title:'Create Task',action:ADD,refObj:undefined});setShow(true)}}>Create Task</Button><h2 className="text-center mb-10">Showing all Tasks</h2></Row>
        <Container className="mt-10">
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                <Table striped bordered hover size="lg">
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Active Status</th>
                        <th>End Date</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {tasks.map(task=>( <tr>
                        <td>{task.title}</td>
                        <td>{task.activeState} {task.activeState==='Todo'&&<Button className="mx-1 btn-primary" onClick={()=>{toggleModal({title:'Task active state updation',action:STATUS_CHANGE,refObj:task}); setVisibleConfirm(true)}}>Chage to Done</Button>}</td>
                        <td>{convert(task.endDate)}</td>
                        <td><Button className="mx-1" onClick={()=>{toggleModal({title:'Edit Task',action:EDIT,refObj:task});setShow(true)}}>Edit</Button>
                         <Button className="mx-1 btn-danger" onClick={()=>{toggleModal({title:'Delete Task',action:DELETE,refObj:task}); setVisibleConfirm(true)}}>Delete</Button></td>
                        </tr>))}
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
       </>
    )
}
