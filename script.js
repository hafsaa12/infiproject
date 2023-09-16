let btn = document.querySelector(".mybtn");
let nav = document.querySelector(".nav")
let ul = document.querySelector(".ul")

btn.addEventListener('click', () => {

    if(ul.style.opacity == 0){
        ul.style.opacity = 1
    
    }else {
        ul.style.opacity = 0

    }
})

//scroll to top

let bbtop = document.querySelector(".scroll-to-top")

bbtop.addEventListener('click',() => {
    window.scrollTo({top:0,behavior: 'smooth' ,})
})



//typing simulation

function typing(text, index){
    if(index < text.length){
     document.getElementById("output").textContent += text[index]
     index++

     setTimeout(() => {
        typing(text,index)
     },Math.floor(Math.random() * 200) + 100)

    }else {
        setTimeout(() => {
            document.getElementById("output").textContent = ""
            typing(text,0)
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typing("Hi, my name is Hafsa",0)
})

//random bg color changer
function bgColor(){
    let pp = document.getElementById("output");
     
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)

    let textColor = "rgb("+ x +","+ y +","+ z +")"

    pp.style.color = textColor

}

setInterval(() => {
    bgColor()
},1000)

//form onfocus and blur events

let form = document.getElementById("myform")

form.addEventListener("focus",(event) => {
    event.target.style.backgroundColor = "cyan"
},true)

form.addEventListener("blur",(event) => {
    event.target.style.backgroundColor = ""
},true)


//getting year

let now = new Date()

let year = now.getFullYear()
 document.querySelector('.yy').textContent += year;

//form validation
 let subbtn = document.getElementById("btns")
 subbtn.addEventListener('click',() => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let msg = document.getElementById("message").value

    if(name && email && msg !== null){
       alert("form Submitted succesfully")
        
    }else{
        alert("please fill all the fields")
    }
 })

 //img cont animation
 document.querySelector('.img-c-1').addEventListener('mouseenter',() => {
    document.querySelector('.ovly').style.height = "100%"
 })

 document.querySelector('.img-c-1').addEventListener('mouseleave',() => {
    document.querySelector('.ovly').style.height = "0"
 })

 //img2

 document.querySelector('#img22').addEventListener('mouseenter',() => {
    document.querySelector('#img2').style.height = "100%"
 })

 document.querySelector('#img22').addEventListener('mouseleave',() => {
    document.querySelector('#img2').style.height = "0"
 })

 //img3
 document.querySelector('#img33').addEventListener('mouseenter',() => {
    document.querySelector('#img3').style.height = "100%"
 })

 document.querySelector('#img33').addEventListener('mouseleave',() => {
    document.querySelector('#img3').style.height = "0"
 })