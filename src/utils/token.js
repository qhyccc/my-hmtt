const key = 'geek-itheima'
export const setToken = (token) => {
  localStorage.setToken(key, token)
}

export const getToken = () => localStorage.getToken(key)

export const removeToken = () => {
  localStorage.removeToken(key)
}
