


export function getUserInfo()
{
    return sessionStorage.getItem('user')
}
export function setUserInfo(user)
{
    sessionStorage.setItem('user', user)
}