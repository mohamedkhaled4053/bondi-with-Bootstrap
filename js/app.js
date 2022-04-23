let portfolioList = document.querySelector('.portfolio ul')
let works = document.querySelectorAll('.portfolio .row .box')


portfolioList.addEventListener('click', (e) => {
    if (e.target.nodeName == 'LI') {
        let arr = Array.from(portfolioList.children);
        arr.forEach(el => el.classList.remove('active', 'rounded-pill'))
        e.target.classList.add('active', 'rounded-pill')

        works.forEach((work) => {
            work.style.display = 'none'
            work.parentElement.classList.add('order-5')
            if (work.dataset.work == e.target.textContent || e.target.textContent == 'all') {
                work.style.display = 'block'
                work.parentElement.classList.remove('order-5')
            }
        })
    }
})