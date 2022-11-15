export const template = document.createElement('template')
template.innerHTML =
`

<style>


.messageLineRight {
  display: flex;
  flex-direction: row;

  gap: 40px;

}
.talkBubbleRight {
  width: auto;
  min-width: 100px;
  height: 80px;
  background: rgb(236, 226, 226);
  position: relative;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.talkBubbleRight:before {
  content: "";
  position: absolute;
  right: 100%;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  
  border-bottom: 13px solid transparent;
  border-right: 26px solid rgb(236, 226, 226);
}
.messageLineLift {
  display: flex;
  flex-direction: row-reverse;

  gap: 40px;

}
.talkBubbleLeft {
  width: auto;
  min-width: 100px;
  height: 80px;
  background: rgb(236, 226, 226);
  position: relative;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.talkBubbleLeft:before {
  content: "";
  position: absolute;
  left: 100%;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  
  border-bottom: 13px solid transparent;
  border-left: 26px solid rgb(236, 226, 226);
}
p#messageText{
  margin : 20px;
}

</style>
<div id = "messageLine" class= 'messageLineLift'>
<div>
<photo-icon/>
</div>
<div id="talkBubble"  class="talkBubbleLeft">
<p id="messageText"></p>
</div>

</div>
`