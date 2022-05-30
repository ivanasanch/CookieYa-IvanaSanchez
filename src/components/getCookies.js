import galletitas from "./cookiesMock.js"
const getCookies = () => {
      return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(galletitas)
        },2000)
      })
  }

export default getCookies;