// Global variables
let portfolioList = document.querySelector('.portfolio ul')
let works = document.querySelectorAll('.portfolio .row .box')
let mainHeader = document.querySelector('.navbar')
let sections = document.querySelectorAll('body>div')

// add a filter to the portfolio section
portfolioList.addEventListener('click', (e) => {
    if (e.target.nodeName == 'LI') {
        let arr = Array.from(portfolioList.children);
        // remove active state from any element and add to clicked one
        arr.forEach(el => el.classList.remove('active', 'rounded-pill'))
        e.target.classList.add('active', 'rounded-pill')

        works.forEach((work) => {
            // hide all elements
            work.style.display = 'none'
            work.parentElement.classList.add('order-5')
            // only show active element and sort it first
            if (work.dataset.work == e.target.textContent || e.target.textContent == 'all') {
                work.style.display = 'block'
                work.parentElement.classList.remove('order-5')
            }
        })
    }
})



// show navbar only when scrolling
// helper functions
document.addEventListener('scroll', showAndHide)

let timer;
function showAndHide() {
    showElement(mainHeader)
    clearTimeout(timer);
    timer = setTimeout(() => {
        hideElement(mainHeader)
    }, 3000);
}

function showElement(elem) {
    elem.classList.remove('hidden')
}
function hideElement(elem) {
    elem.classList.add('hidden')
}


// Add class 'active' to section when near top of viewport
function addActive() {
    for (let section of sections) {
        //select the li that linked with the section
        let liOfSection = document.querySelector(`.navbar ul a[href *= ${section.getAttribute('id')}]`)
        if (liOfSection) {
            console.log(liOfSection);
            //we check the position of the section
            //make them active
            if (section.getBoundingClientRect().top < 320) {
                liOfSection.classList.add('active')
            }
            //remove the active state
            if (section.getBoundingClientRect().bottom < 320 || section.getBoundingClientRect().top > 320) {
                liOfSection.classList.remove('active')
            }
        }

    }
}

// Set sections as active
addActive()
window.addEventListener('scroll', addActive)