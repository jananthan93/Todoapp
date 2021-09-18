const express =require('express');
const cors =require('cors');
const app =express();
const port = process.env.PORT || 5000
const connectDB = require('./server/config/db')
require('dotenv').config({
    path: './server/config/config.env'
})
connectDB()
app.use(cors());
app.use(express.json())
const path = __dirname + '/client/build/';
app.use(express.static(path));

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});


const taskRouter = require('./server/routes/task.route')
app.use('/api', taskRouter)

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
});