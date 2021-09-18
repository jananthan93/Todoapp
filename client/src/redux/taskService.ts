import http from "../http-common";

const getAll = () => {
  return http.get("/tasks");
};

const create = (data: Task) => {
  return http.post("/tasks", data);
};

const update = (id: any, data: Task) => {
  return http.put(`/tasks/${id}`, data);
};

const remove = (id: any) => {
  return http.delete(`/tasks/${id}`);
};
const changeStatus = (id:any,status:string)=>{
  return http.put(`/tasks/${id}/${status}`);
}

const TaskService = {
  getAll,
  create,
  update,
  remove,
  changeStatus
};

export default TaskService;