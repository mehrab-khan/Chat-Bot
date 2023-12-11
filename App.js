let user = document.querySelector('.user');
let name = document.querySelector('.name');
function next(){
if (user.value == ''){
name.textContent = 'Please enter your name !'
}
else{
  localStorage.setItem(`Name`, `${user.value}`)
  window.location.href = "./welcome-note.html"
 
}
}
user.addEventListener('focus',(e)=>{
  name.textContent = ''
})