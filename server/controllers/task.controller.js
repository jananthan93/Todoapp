const Task=require('../models/task.model');

exports.createTask = (req,res) => {
    const {title,endDate}= req.body;
    const task =new Task({
        title,
        activeState:'Todo',
        endDate
    })
    task.save((err,taskNew) => {
        if(err){
           console.log("error")
        }else{
             res.status(200).json({taskNew,message:'task Sucessfully created'}); 
        }
    })
}

exports.getAllTasks = (req, res) => {
    Task.find({}).exec((err, tasks) => {
        if (err || !tasks) {
            return res.status(400).json({
                error: err
            });
        }
        res.status(200).json({ 
            message: 'Get all tasks Successfully',
            results: tasks
          });
    });
}
exports.updateTaskById=(req, res) => {
    const {title,endDate,activeState} =req.body
    Task.findByIdAndUpdate(req.params.taskId,{title,endDate,activeState},{new:true}).exec((err,task) => {
        if(err){
            console.log('Update error', err);
            return res.status(400).json({
              errors: err
            }); 
        }else{
            res.status(200).json({
                task,
                message: 'Course updated Successfully'
              });
        }
    })
}
exports.deleteTaskById=(req, res) => {
    Task.findOneAndDelete({_id:req.params.taskId},(err)=>{
        if(err){
            console.log('Delete error', err);
            return res.status(400).json({
              errors: err
            }); 
        }else{
            res.status(200).json({
                message: 'Course deleted Successfully'
              });
        }
    })
}

exports.updateTaskStatusById=(req,res)=>{
    Task.findOneAndUpdate({ _id:req.params.taskId},{activeState:req.params.status},{new:true}).exec((err,task)=>{
        if(err){
            console.log('status update error', err);
            return res.status(400).json({
              errors: err
            }); 
        }else{
            res.status(200).json({
                task,
                message: 'task updated Successfully'
              });
        }
    })
}