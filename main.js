/*Ahmed Bolarinwa Amoo */
let ham = document.querySelector('.hamburger');
let links = document.querySelector('.nav-links');

ham.addEventListener('click', () => {
    links.classList.toggle('active');
});
