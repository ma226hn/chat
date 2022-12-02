
export function getUserInfo()
{  
    return (JSON.parse (sessionStorage.getItem('user')))
}

 export  function setUserInfo(user)
{
   let obj2 =  JSON.stringify (user)
     sessionStorage.setItem('user', obj2)
    
}