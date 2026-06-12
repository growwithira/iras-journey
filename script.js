// ============================
// SCROLL REVEAL ANIMATION
// ============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener('click', function(e){

const target = document.querySelector(this.getAttribute('href'));

if(target){

e.preventDefault();

target.scrollIntoView({
behavior:'smooth',
block:'start'
});

}

});

});

const revealElements = document.querySelectorAll(
'.pillar-card, .gallery-grid img, .challenge-card, .army-card, .journey-card, .about-box, .collab-box'
);

const revealOnScroll = () => {

revealElements.forEach((element) => {

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

element.classList.add('show');

}

});

};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// ============================
// ACTIVE NAVIGATION
// ============================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

let current = '';

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute('id');

}

});

navLinks.forEach(link => {

link.classList.remove('active');

const href = link.getAttribute('href');

if(href.startsWith('#') && href.includes(current)){

link.classList.add('active');

}

});

});


// ============================
// DARK MODE
// ============================

const darkToggle = document.createElement('button');

darkToggle.innerHTML = "🌙";

darkToggle.classList.add('dark-toggle');

document.body.appendChild(darkToggle);

const savedTheme = localStorage.getItem('theme');

if(savedTheme === 'dark'){

document.body.classList.add('dark-mode');
darkToggle.innerHTML = "☀️";

}

darkToggle.addEventListener('click', () => {

document.body.classList.toggle('dark-mode');

if(document.body.classList.contains('dark-mode')){

localStorage.setItem('theme','dark');
darkToggle.innerHTML = "☀️";

}else{

localStorage.setItem('theme','light');
darkToggle.innerHTML = "🌙";

}

});


// ============================
// HERO TYPING EFFECT
// ============================

const heroTitle = document.querySelector('.hero-content h1');

if(heroTitle){

const originalText = heroTitle.innerText;

heroTitle.innerText = '';

let i = 0;

function typeWriter(){

if(i < originalText.length){

heroTitle.innerHTML += originalText.charAt(i);
i++;

setTimeout(typeWriter,80);

}

}

typeWriter();

}


// ============================
// BACK TO TOP BUTTON
// ============================

const backToTop = document.createElement('button');

backToTop.innerHTML = "↑";

backToTop.classList.add('back-to-top');

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {

if(window.scrollY > 400){

backToTop.classList.add('show');

}else{

backToTop.classList.remove('show');

}

});

backToTop.addEventListener('click', () => {

window.scrollTo({

top:0,
behavior:'smooth'

});

});


// ============================
// PARALLAX DOODLES
// ============================

window.addEventListener('scroll', () => {

const scrollY = window.scrollY;

document.querySelectorAll('.doodle').forEach((doodle,index)=>{

const speed = (index + 1) * 0.15;

doodle.style.transform =
`translateY(${scrollY * speed}px)`;

});

});


// ============================
// GALLERY ZOOM EFFECT
// ============================

const galleryImages =
document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(image => {

image.addEventListener('mouseenter', () => {

image.style.transform =
'scale(1.05) rotate(1deg)';

});

image.addEventListener('mouseleave', () => {

image.style.transform =
'scale(1) rotate(0deg)';

});

});


// ============================
// COUNTER ANIMATION
// ============================

const counters = document.querySelectorAll('.counter');

const runCounter = () => {

counters.forEach(counter => {

const target =
parseInt(counter.dataset.target);

let count = 0;

const increment = target / 100;

const updateCounter = () => {

if(count < target){

count += increment;

counter.innerText =
Math.floor(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

});

};

const counterSection =
document.querySelector('.stats-section');

if(counterSection){

window.addEventListener('scroll', () => {

const top =
counterSection.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

runCounter();

}

},{once:true});

}


// ============================
// PRELOADER FADE
// ============================

window.addEventListener('load', () => {

const loader =
document.querySelector('.loader');

if(loader){

loader.style.opacity = '0';

setTimeout(() => {

loader.remove();

},500);

}

});


// ============================
// HEART FLOATING EFFECT
// ============================

function createHeart(){

const heart =
document.createElement('span');

heart.innerHTML = '♡';

heart.classList.add('floating-heart');

heart.style.left =
Math.random() * window.innerWidth + 'px';

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

setInterval(createHeart,3000);


// ============================
// SCROLL PROGRESS BAR
// ============================

const progressBar =
document.createElement('div');

progressBar.classList.add('progress-bar');

document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {

const totalHeight =
document.body.scrollHeight -
window.innerHeight;

const progress =
(window.scrollY / totalHeight) * 100;

progressBar.style.width =
progress + '%';

});
