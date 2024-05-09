const features = document.getElementById('features');
const featuresMenu = document.getElementById('features-menu');
const featuresIcon = document.getElementById('features-icon');
const company = document.getElementById('company');
const companyMenu = document.getElementById('company-menu');
const companyIcon = document.getElementById('company-icon');
const mobileBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const overFlow = document.getElementById('overflow');


// <--- (MOBILE MENU BTN) --->
mobileBtn.addEventListener('click', () =>{
    mobileBtn.classList.toggle('close-menu')
    navMenu.classList.toggle('show-mobile-menu')
    overFlow.classList.toggle('show-overflow')
})

// <--- (FEATURE ARROW FUNCTION) --->
features.addEventListener('click', () =>{
    featuresMenu.classList.toggle('show-menu')
    featuresIcon.classList.toggle('arrow-rotate')
})

// <--- (COMPANY ARROW FUNCTION) --->
company.addEventListener('click', () =>{
    companyMenu.classList.toggle('show-menu')
    companyIcon.classList.toggle('arrow-rotate')
})