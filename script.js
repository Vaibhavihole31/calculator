// let string = "";
// let buttons = document.querySelectorAll('.btn');

// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('input').value = string ; 
//         }
//         else if (e.target.innerHTML == 'C') {
//             string = ""
//             document.querySelector('input').value = string ; 
//         } 
//         else{
//         console.log(e.target);
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string ; 
//         }
//     })
// })

function pressButton(buttonvalue) {
    let text = document.querySelector(".input-screen").value + buttonvalue + "";
    document.querySelector(".input-screen").value = text;
}
function clrscr() {

    document.querySelector(".input-screen").value = "";
}
function caculate() {

    let result = document.querySelector(".input-screen").value;
    document.querySelector(".input-screen").value = eval(result)
}
