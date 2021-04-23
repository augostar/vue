
// window.Storage ()
// escape 编码
// unescape 解码
// btoa base64base64编码后 window.btoa(str64)
// atob base64base64解码后: window.atob(str64)

// window.localStorage.setItem()

// window.sessionStorage.setItem()

// window.escape(0)
// window.unescape(0)//

// 添加的盐
const cai = 'CAI'
const setlocalStorage = (key, value) => {
  const time = new Date().getTime()
  const es = window.escape(value) + key + cai
  const ba = window.btoa(es) + cai
  const res = { value: ba, time }
  window.localStorage.setItem(key, window.btoa(JSON.stringify(res)))
  window.localStorage.setItem(key + 'time', time)
}
const getlocalStorage = (key) => {
  const value = JSON.parse(window.atob(window.localStorage.getItem(key)))
  if (+value.time === +window.localStorage.getItem(key + 'time')) {
    const val = window.atob(value.value.split(cai)[0])

    return val.split(key)[0]
  } else {
    return false
  }
}

const setSessionStorage = (key, value) => {
  const time = new Date().getTime()
  const es = window.escape(value) + key + cai
  const ba = window.btoa(es) + cai
  const res = { value: ba, time }
  window.sessionStorage.setItem(key, window.btoa(JSON.stringify(res)))
  window.sessionStorage.setItem(key + 'time', time)
}
const getSessionStorage = (key) => {
  const value = JSON.parse(window.atob(window.sessionStorage.getItem(key)))
  console.log(value.time)
  if (value.time === window.sessionStorage.getItem(key + 'time')) {
    const val = window.atob(value.value.split(cai)[0])
    return val.split(key)[0]
  } else {
    return {}
  }
}

export default {
  setlocalStorage,
  getlocalStorage,
  setSessionStorage,
  getSessionStorage
}
