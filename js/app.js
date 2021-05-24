/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll('section');
const selectUl = document.querySelector('ul');
const classActive = document.querySelector('your-active-class');
const getElement = document.getElementById('navbar-list');
const docFrag = document.createDocumentFragment();
var isIntersecting = IntersectionObserverEntry.isIntersecting;

/* function for creating Nav bar items ------------------------------*/
function selectedSection() {
  for (var i = 1; i <= sections.length; i++) {
    const createList = document.createElement('li');
    createList.innerHTML = `<a class='menu__link' href='#section${i}'>section ${i}</a>`;
    var getitems = docFrag.appendChild(createList);
    selectUl.appendChild(getitems);
  }

}
selectedSection();

/*function to add scroll view ----------------------------------*/
function toggleActiveState(){
  let sectionBound = Math.min(Math.abs(sections[0].getBoundingClientRect().top), Math.abs(sections[1].getBoundingClientRect().top), Math.abs(sections[2].getBoundingClientRect().top), Math.abs(sections[3].getBoundingClientRect().top));
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top == sectionBound) { 
      sec.classList.add('your-active-class') 
    } else{
      sec.classList.remove('your-active-class');
    }
  })
}

  
document.addEventListener('scroll', toggleActiveState);
/* scroll to section */
const elements = document.querySelectorAll(".menu__link");
elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(element.getAttribute("href")).scrollIntoView({ behavior: "smooth", }) 
  }); 
});