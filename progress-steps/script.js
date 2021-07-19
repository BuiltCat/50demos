const circle = document.querySelectorAll('.circle')
const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

let index = 0

prev.addEventListener('click', ()=>{
    circle[index].classList.remove('active')
    index -= 1
    if(index === 0){
        prev.disabled = true
    }
    if(index !== 0){
        next.disabled = false
    }
    progress.style.width = `${index * 33}%`
})

next.addEventListener('click', ()=>{
    index += 1
    circle[index].classList.add('active')
    if(index === 3){
        next.disabled = true
    }
    if(index !== 0){
        prev.disabled = false
    }
    progress.style.width = `${index * 33}%`
})
