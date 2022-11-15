export const template = document.createElement('template')
template.innerHTML =
`
<style>

form {
     background: #000;
      padding: 3px;
       position: fixed;
        bottom: 0;
         width: 100%;
     }
form input {
     border: 0;
      padding: 10px;
       width: 90%;
        margin-right: .5%;
     }
form #button {
     color:#FFF;
      background: #2D9F0B;
       border: none; 
       padding: 10px;
         width: 9%; 
    }
#messages {
     list-style-type: none;
      margin: 0; 
      padding: 0;
      margin-bottom : 200px;
     }

#notifyUser {
  
     color:red;
     }
     li {
   
      margin-bottom: 5%;
    }
    #toolBarDiv {
      background: #2D9F0B;
      color:#FFF;
      width: 100%;
      height: 20px;
      position:sticky;
      margin-bottom: 20px;
      display :flex;
      flex-direction: row;
      gap:4px;
      padding: 0;
    


    }
    #close {
      color:#FFF;
      background: red;
      width :20px;
      heigh :40px;
    }
   #close:hover , #close:active {
    background-color:rgb(79, 26, 253)
   }
#roomName
{
  margin: 0; padding: 0;
}
 
#joinLeftNotify{
  width:auto;
  heigh : auto;
  opacity:80%;
  background-color: black;
}
  

</style>

<div id="chatDiv">
<div id="toolBarDiv">
<button id = "close">X </button>
<p id="roomName"></p>
</div>
    <ul id="messages"></ul>
   
    <form id="form" action="" > 
    <p id="notifyUser"></p>
    
      <input id="messageInput" autocomplete="off" " placeholder="Type yor message here.." /><input type="submit" id="button" value="Send"/> 
    </form>
  </div>


`