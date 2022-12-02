export class User {
    profileImg
    name   
    constructor () {
      this.img=''
      this.name = ''
    }

    setName(name)
    {
      if (name.length <2) {
        throw ' the name should be long than two character'
      } 
      else {
        const usernameRegex = /^[a-zA-Z]+$/
        if (!(usernameRegex.test(name))) {
          throw 'the name should not contain numbers or controls characters'
        } else {
          this.name= name
        }
     }
   }

    setProfileImg(img)
    {
      this.profileImg= img
    }
}