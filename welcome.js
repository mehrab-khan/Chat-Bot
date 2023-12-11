let p = localStorage.getItem('Name')
let pera = document.querySelector('.demo')
let btn = document.querySelector('#btn')
pera.textContent = `Hi ${p}! Nice to meet you i am Elif.`
btn.addEventListener('click',()=>{
    window.location.href = './main.html'
})