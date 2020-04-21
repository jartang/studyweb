import https from '../https'

export function getHome () {
  return https.fetchGet('/home')
}

export function getResponseDate (param) {
  console.log(param)
  return https.fetchPost('/xuexi', param)
}

export default {
  getHome,
  getResponseDate
}
