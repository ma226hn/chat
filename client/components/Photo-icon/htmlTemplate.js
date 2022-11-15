export const template = document.createElement('template')
template.innerHTML =
`

<style>

.name-p {
  margin: 0%;
  
  margin-top :80%;
 
  text-align: center;
width: 50%;
height:15px;
border-radius: 50% 10%;
  background-color: rgb(247, 250, 252);
  border-width: 3px;
 
}
#photo-icon {
  width:70px;
  height:70px;
  
 padding-left:2%;
 background-image: url(${(new URL(`./image/profileImg.jpg`, import.meta.url)).href} ); 
  border-radius: 50% ;
  border-style: groove;
  border-width: 3px;
  border-color: blue;
    background-repeat:no-repeat;
    background-size: 100% 100%;
}

</style>
<div id= 'photo-icon'>


<p class='name-p'> </p>



</div>
`