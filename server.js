import express from 'express'
import { createServer } from 'node:http'
import {Server} from 'socket.io'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
 const app = express()
 const httpServer = createServer(app)
 const io = new Server(httpServer)
 io.on('connection', (socket) => {
   
    io.to(socket.id).emit('Id',socket.id);
    
    
    socket.on('create', (room,user) => {
      socket.join(room);
     
      console.log(room,'öööööö')
      io.to(socket.io).emit('create',room,user);
    });
    socket.on('join', (room,user) => {
        socket.join(room);
       
        console.log(room,'öööööö')
        io.to(room).emit('join',room,user);
      });
   
    console.log(socket.rooms);
    socket.on('chatMessage', function(from, msg,room){
      io.to(room).emit('chatMessage', from, msg);
    });
    socket.on('notifyUser', function(user,room){
     
      io.to(room).emit('notifyUser', user);
     
    });
 })
 io.on('disconnect' , (socket)=> {
    console.log('disconnected')
 })
  const directoryFullName = dirname(fileURLToPath(import.meta.url))
  app.use(express.static(join(directoryFullName, '.', 'client')))
  console.log(join(directoryFullName, '.', 'client'))
  console.log(process.env.PORT)
  httpServer.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
    console.log('Press Ctrl-C to terminate...')
  })