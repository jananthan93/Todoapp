interface Task {
    _id: string
    title: string
    activeState:string
    endDate: date
  }
  
  type TaskState = {
    tasks: Task[]
  }
  
  type TaskAction = {
    type: string
    task: Task | null
    tasks:Task[] | null
  }
  type Results = {
   
  };
  type AxiosResponseData = {
    results: array<Task>;
  };
  type DispatchType = (args: TaskAction) => TaskAction 