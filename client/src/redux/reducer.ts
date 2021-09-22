import * as actionTypes from "./actionTypes"

const initialState: TaskState = {
  tasks: [],
}
const reducer = (
    state: TaskState = initialState,
    action: TaskAction
  ): TaskState => {
      switch (action.type) {
        case actionTypes.ADD_TASK:    
        if(action.task !=null){
            const newtask: Task = {
                _id: action.task._id,
                title: action.task.title,
                activeState: action.task.activeState,
                endDate:action.task.endDate
              }
              return {
                  ...state,
                  tasks: state.tasks.concat(newtask),
              }
          }
          break;
        case actionTypes.FETCH_TASKS: 
        if(action.tasks != null){
            return { ...state, tasks: action.tasks}
          }
          break;
      case actionTypes.UPDATE_TASK:    
      if(action.task !=null && action.task !==undefined){
          const updateTask: Task = action.task
            return {
                ...state, 
                tasks:state.tasks.map(task =>(
                          task._id===updateTask._id ? updateTask:task
                        )) ,
            }
        }
        break;
        case actionTypes.DELETE_TASK:    
        if(action.task !=null && action.task !==undefined){
          const deleteTask: Task = action.task
              return {
                  ...state, 
                  tasks:state.tasks.filter(task =>task._id!==deleteTask._id) ,
              }
          }
          break;
    }
    return state
  }
  
  export default reducer