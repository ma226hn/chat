import express from 'express'
import { createServer } from 'node:http'
import {Server} from 'socket.io'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
 const app = express()
 const httpServer = createServer(app)
 const io = new Server(httpServer,{
  maxHttpBufferSize: 3e8
   })

const directoryFullName = dirname(fileURLToPath(import.meta.url))
app.use(express.static(join(directoryFullName, '.', 'client')))

 const rooms= []
 const colors =[]



 io.on('connection', (socket) => {
  var currentUser
  var currentRoom
    
    
    socket.on('create', (room,user) => {
    let finalRoomName= room+ rooms.length // To make sure the name is unique
     joinRoom(finalRoomName,user)
      io.to(socket.id).emit('create',finalRoomName,user);
    });



    socket.on('join',(room,user) => {
      joinRoom(room,user)
        io.to(socket.id).emit('info',user);
        io.to(currentRoom).emit('join',user.name)
     
      });
   
   

    socket.on('chatMessage', function( msg){
      io.to(currentRoom).emit('chatMessage', currentUser, msg);
    });

    
    socket.on('notifyUser', function(){
      io.to(currentRoom).emit('notifyUser', currentUser);
    });


   socket.on('closeChat' , ()=> {
     io.to(currentRoom).emit('closeChat',currentUser);
     io.disconnectSockets(socket.id);
     })


     function joinRoom (room,user){
      socket.join(room); 
      user.id = socket.id
      user.color= generateUniqueColor()
      colors.push(user.color) 
      rooms.push(room)
      currentUser= user
      currentRoom= room
     
     }
     
 })

 function generateUniqueColor() { 
  let color
   do {
   color =` rgb(${Math.random()* 250},${Math.random()* 250}, ${Math.random()* 250}) `
   } while (colors.indexOf(color)!== -1)
 
   return color
 }



  httpServer.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
    console.log('Press Ctrl-C to terminate...')
  })