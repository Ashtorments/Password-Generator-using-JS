
class password {
    constructor() {
        this.ucl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      this.lcl = "abcdefghijklmnopqrstuvwxyz"
      this.num = "1234567890"
      this.spc = "!@#$%^&*()"
    }
    weakpassword() {
      let arr = [this.ucl, this.lcl]
      let pass = ""
      for (let i = 0; i < 8; i++) {
          let random1 = Math.floor(Math.random() * arr.length)
        let random2 = Math.floor(Math.random() * arr[random1].length)
        pass = pass + arr[random1][random2]
      }
      return pass
    }
    strongpassword() {
      let arr = [this.ucl, this.lcl, this.num]
      let pass = ""
      for (let i = 0; i < 14; i++) {
        let random1 = Math.floor(Math.random() * arr.length)
        let random2 = Math.floor(Math.random() * arr[random1].length)
        pass = pass + arr[random1][random2]
    }
      return pass
    }
    superstrongpassword() {
        let arr = [this.ucl, this.lcl, this.num, this.spc]
      let pass = ""
      for (let i = 0; i < 20; i++) {
          let random1 = Math.floor(Math.random() * arr.length)
          let random2 = Math.floor(Math.random() * arr[random1].length)
          pass = pass + arr[random1][random2]
        }
        return pass
    }
  }
  
  let display = document.getElementById("display");
  let btn = document.getElementById("btn");
  let radio = document.getElementsByClassName("redio");
  
  let a = new password()
  
  btn.addEventListener("click", (event) => {
      event.preventDefault()
      let b;
      if (radio[0].checked) {
      b = a.weakpassword()
    }
    else if (radio[1].checked) {
        b = a.strongpassword()
    }
    else if (radio[2].checked) {
        b = a.superstrongpassword()
    }
    display.value = b
})


//     generatePassword(len){
//         let chars = "abcdefghijklmnopqrstuvwxyz"
//         let numbers = "1234567890"
//         if(len<3){
//             console.log("Your password should be atleast 3 characters long")
//         }
//         else{
//             let i=0
//             while (i<len) {
//                 this.pass += chars[Math.floor(Math.random() * chars.length)]
//                 this.pass += numbers[Math.floor(Math.random() * numbers.length)]
//                 this.pass += special[Math.floor(Math.random() * special.length)]
//                 i+=3
//             }
//             this.pass = this.pass.substring(0, len)
//             return this.pass
//         }
//     }
// }

// let p = new password()
// console.log(p.generatePassword(8))