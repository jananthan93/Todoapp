import axios from "axios"
import * as actionTypes from "./actionTypes"
import { BASE_URL } from "./utils"


// export function addArticle(task: Task) {
//   const action: TaskAction = {
//     type: actionTypes.ADD_TASK,
//     payload:task,
//   }
//   return simulateHttpRequest(action)
// }

export function getTasks(){
    axios.get(`${BASE_URL}/tasks`)
        .then(response=>{
            const data =response.data as AxiosResponseData
                const action: TaskAction = {
                    type: "FETCH_TASKS",
                    tasks:data.results,
                    task:null
                }
                return action
            })
        .catch(error=>console.log(error))
}

export function simulateHttpRequest(action: TaskAction) {
    console.log({action})
  return (dispatch: DispatchType) => dispatch(action)
}
