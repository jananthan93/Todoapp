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
            console.log(action.tasks)
            return { ...state, tasks: action.tasks}
          }
          break;
    }
    return state
  }
  
  export default reducer