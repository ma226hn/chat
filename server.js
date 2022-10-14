import express from 'express'
import { createServer } from 'node:http'
import {Server} from 'socket.io'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
 const app = express()
 const httpServer = createServer(app)
 const io = new Server(httpServer)
 const rooms={}
 const colors =[]
function generateUniqueColor()
{ let color
  do {
  color =` rgb(${Math.random()* 250},${Math.random()* 250}, ${Math.random()* 250}) `
  } while (colors.indexOf(color)!== -1)
  return color
}

 io.on('connection', (socket) => {
   
    io.to(socket.id).emit('Id',socket.id);
    
    
    socket.on('create', (room,user) => {
     let finalRoomName= room+ rooms.length
      socket.join(finalRoomName); 
      user.Id=socket.id
      user.color= 'rgb(236, 226, 226)'
      colors.push('rgb(236, 226, 226)') 
      rooms.push(finalRoomName)

      io.to(socket.io).emit('create',finalRoomName,user);
    });
    socket.on('join', (room,user) => {
        socket.join(room);
        user.id=socket.id
        let color = generateUniqueColor()
        user.color = color
        colors.push(color)
        io.to(socket.io).emit('join',user);
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