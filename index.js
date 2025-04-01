const { log } = require('console')
const express = require('express')
const app = express()
const http = require('http')
const path  = require('path')
const {Server} = require('socket.io')

app.use(express.static(path.join(__dirname,'public')))

const server = http.createServer(app)
app.get('/',(req,res)=>{
   res.send('/public/index.html')    
})

const io = new Server(server)
io.on('connection',(socket)=>{
    socket.on('user-message',(message)=>{
        io.emit('message',message)

    })
    

})
server.listen(3001,()=>{
    console.log("server in runing");
    
})