var tit = document.querySelector(".title")
var arr = ["طراح وب" , "برنامه نویس وب" , "فرانت اند"]
var x = 0
var i = 0
function type() {
    tit.innerHTML = arr[i].slice(0 , x+1)
    x += 1
    if (x == arr[i].length +1) {
        tit.innerHTML = ""
        x = 0
        i += 1
    }
    if (i == arr.length) {
        i = 0
    }
    setTimeout(type , 200)
}
type()