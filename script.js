const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


open.AddEventListener('click' , () => container.classList.remove ('show-nav'))