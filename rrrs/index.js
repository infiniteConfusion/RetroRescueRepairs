document.addEventListener("DOMContentLoaded", function() {

    const recycle = document.getElementById('recycle')
const refurbish = document.getElementById('refurbish')
const reuse = document.getElementById('reuse')
const btnOne = document.getElementById('donateBtn')
const HTD = document.getElementById('htd')
const extBtn = document.getElementById('extbttn')

btnOne.addEventListener('click', function(){
    HTD.style.display = 'flex'
})

extBtn.addEventListener('click', function(){
    HTD.style.display = 'none'
})

recycle.addEventListener('mouseenter', function(){
    recycle.style.width = '80%'
    refurbish.style.width = '5%'
    refurbish.style.color = 'rgb(0, 0, 0, 0)'
    reuse.style.width = '5%'
    reuse.style.color = 'rgb(0, 0, 0, 0)' 
})
recycle.addEventListener('mouseleave', function(){
    recycle.style.width = '30%'
    refurbish.style.width = '30%'
    refurbish.style.color = 'rgb(250, 250, 250)'
    reuse.style.width = '30%'
    reuse.style.color = 'rgb(250, 250, 250)'
})

refurbish.addEventListener('mouseenter', function(){
    recycle.style.width = '5%'
    recycle.style.color = 'rgb(0, 0, 0, 0)'
    refurbish.style.width = '80%'
    reuse.style.width = '5%'
    reuse.style.color = 'rgb(0, 0, 0, 0)'
})
refurbish.addEventListener('mouseleave', function(){
    recycle.style.width = '30%'
    recycle.style.color = 'rgb(250, 250, 250)'
    refurbish.style.width = '30%'
    reuse.style.width = '30%'
    reuse.style.color = 'rgb(250, 250, 250)'
})

reuse.addEventListener('mouseenter', function(){
    recycle.style.width = '5%'
    recycle.style.color = 'rgb(0, 0, 0, 0)'
    refurbish.style.width = '5%'
    refurbish.style.color = 'rgb(0, 0, 0, 0)'
    reuse.style.width = '80%'
})
reuse.addEventListener('mouseleave', function(){
    recycle.style.width = '30%'
    recycle.style.color = 'rgb(250, 250, 250)'
    refurbish.style.width = '30%'
    refurbish.style.color = 'rgb(250, 250, 250)'
    reuse.style.width = '30%'
})

})