const mongoose = require('mongoose');
const schema=mongoose.Schema;

    const taskSchema = new schema(
      {
        title: {
          type: String,
          required: true
        },
        activeState: {
          type: String,
          required: true
        },
        endDate: {
            type: Date,
            required: true
        }
      }, 
      {
        timestamps: true
      });
  
const model = mongoose.model('task', taskSchema)

module.exports = model