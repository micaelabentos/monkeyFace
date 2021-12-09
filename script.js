const closeMonkey = document.querySelector('.close')
const openMonkey = document.querySelector('.open')
const mouthMonkey = document.querySelector('.mouth')

closeMonkey.addEventListener('click', () => {
    if(openMonkey.classList.contains('open')){
        openMonkey.classList.add('active')
        closeMonkey.classList.remove('active')
    }
}
)

openMonkey.addEventListener('click', () => {
    if(closeMonkey.classList.contains('close')){
        mouthMonkey.classList.add('active')
        openMonkey.classList.remove('active')
    }
})

mouthMonkey.addEventListener('click', () => {
    if(mouthMonkey.classList.contains('mouth')){
        closeMonkey.classList.add('active')
        mouthMonkey.classList.remove('active')
    }
})