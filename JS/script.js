var container = document.querySelector('.container')

var buttonShow = document.querySelector('#show-or-hide')

buttonShow.addEventListener('click', function(){
    container.classList.toggle('show')
})