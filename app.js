let btns = document.querySelectorAll('.btn')
let card = document.querySelector('.card')
let card2 = document.querySelector('.card2')
let span = document.querySelector('span')

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', e => {
        const rating = e.target.textContent
        span.textContent = rating
        card2.classList.remove('hide')
        card.classList.add('hide')
    })
})