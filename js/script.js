"use strict";

// hero slider
const heroSlides = document.querySelectorAll(".hero");
const dotsContainer = document.querySelector(".dots");
const maxSlide = heroSlides.length - 1;
let currSlide = 0;

const activateDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dot-active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dot-active");
};
activateDots(0);

const goSlide = function (slide) {
  heroSlides.forEach(
    (h, i) => (h.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goSlide(0);

const nextSlide = function () {
  if (currSlide === maxSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goSlide(currSlide);
};

// const prevSlide = function () {
//   if (currSlide === 0) {
//     currSlide = maxSlide;
//   } else {
//     currSlide--;
//   }
//   goSlide(currSlide);
// };

setInterval(function () {
  nextSlide(currSlide);
  activateDots(currSlide);
}, 5000);

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    goSlide(slide);
    activateDots(slide);
  }
});

// MObile nav
const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth Scrolling
const nav = document.querySelector(".main-nav");

nav.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;

  if (link.classList.contains("main-nav-link")) {
    const id = link.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  if (link.classList.contains("main-nav-link")) {
    header.classList.toggle("nav-open");
  }
});

// menu animation
const header = document.querySelector(".header");

const handleHover = function (e, opacity) {
  const link = e.target;

  if (link.classList.contains("main-nav-link")) {
    const siblings = link.closest(".header").querySelectorAll(".main-nav-link");
    const text = link.closest(".header").querySelector("h1");

    siblings.forEach((s) => {
      if (s !== link) s.style.opacity = opacity;
    });
    text.style.opacity = opacity;
  }
};

header.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});
header.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});

// link style
const section = document.querySelector(".section-hero");
const sectionResume = document.querySelector(".section-resume");
const sectionAbout = document.querySelector(".section-about");
const sectionService = document.querySelector(".section-service");
const sectionSkills = document.querySelector(".section-skills");
const sectionProject = document.querySelector(".section-project");
const sectionBlog = document.querySelector(".section-blog");
const sectionContact = document.querySelector(".section-contact");
const heroLink = document.querySelector(".link-hero");
const aboutLink = document.querySelector(".link-about");
const resumeLink = document.querySelector(".link-resume");
const serviceLink = document.querySelector(".link-service");
const skillLink = document.querySelector(".link-skill");
const projectLink = document.querySelector(".link-project");
const blogLink = document.querySelector(".link-blog");
const contactLink = document.querySelector(".link-contact");

const hero = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) heroLink.classList.add("diff");
  else heroLink.classList.remove("diff");
};

// hero
const heroObserver = new IntersectionObserver(hero, {
  root: null,
  threshold: 0,
});
heroObserver.observe(section);

// about
const about = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) aboutLink.classList.add("diff");
  else aboutLink.classList.remove("diff");
};
const boutObserver = new IntersectionObserver(about, {
  root: null,
  threshold: 0,
});
boutObserver.observe(sectionAbout);

// resume
const resume = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) resumeLink.classList.add("diff");
  else resumeLink.classList.remove("diff");
};
const resumeObserver = new IntersectionObserver(resume, {
  root: null,
  threshold: 0,
});
resumeObserver.observe(sectionResume);

// service
const service = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) serviceLink.classList.add("diff");
  else serviceLink.classList.remove("diff");
};
const serviceObserver = new IntersectionObserver(service, {
  root: null,
  threshold: 0,
});
serviceObserver.observe(sectionService);

// skils
const skill = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) skillLink.classList.add("diff");
  else skillLink.classList.remove("diff");
};
const skillObserver = new IntersectionObserver(skill, {
  root: null,
  threshold: 0,
});
skillObserver.observe(sectionSkills);

// project
const project = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) projectLink.classList.add("diff");
  else projectLink.classList.remove("diff");
};
const projectObserver = new IntersectionObserver(project, {
  root: null,
  threshold: 0,
});
projectObserver.observe(sectionProject);

// blog
const blog = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) blogLink.classList.add("diff");
  else blogLink.classList.remove("diff");
};
const blogObserver = new IntersectionObserver(blog, {
  root: null,
  threshold: 0,
});
blogObserver.observe(sectionBlog);

// contact
const contact = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) contactLink.classList.add("diff");
  else contactLink.classList.remove("diff");
};
const contactObserver = new IntersectionObserver(contact, {
  root: null,
  threshold: 0,
});
contactObserver.observe(sectionContact);

// Sticky Bar
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.7,
});
headerObserver.observe(section);

// REVEALS
// all sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  else entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
allSections.forEach((s) => {
  s.classList.add("section--hidden");
  sectionObserver.observe(s);
});

// left
const allLeft = document.querySelectorAll(".left-rev");

const leftReveal = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  else entry.target.classList.remove("reveal--left");

  observer.unobserve(entry.target);
};

const leftRevealObserver = new IntersectionObserver(leftReveal, {
  root: null,
  threshold: 0.15,
});
allLeft.forEach((left) => {
  left.classList.add("reveal--left");
  leftRevealObserver.observe(left);
});

// center
const allCenter = document.querySelectorAll(".center-rev");

const centerReveal = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  else entry.target.classList.remove("reveal--center");

  observer.unobserve(entry.target);
};

const centerRevealObserver = new IntersectionObserver(centerReveal, {
  root: null,
  threshold: 0.2,
});
allCenter.forEach((center) => {
  center.classList.add("reveal--center");
  centerRevealObserver.observe(center);
});

// Right
const allRight = document.querySelectorAll(".right-rev");

const rightReveal = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  else entry.target.classList.remove("reveal--right");

  observer.unobserve(entry.target);
};

const rightRevealObserver = new IntersectionObserver(rightReveal, {
  root: null,
  threshold: 0.15,
});
allRight.forEach((right) => {
  right.classList.add("reveal--right");
  rightRevealObserver.observe(right);
});

// counters
const aboutSec = document.querySelector(".about");
const boxSec = document.querySelector(".bg-box");
let cont = 0;
let hund = 0;
let five = 0;
let thou = 0;

const aboutView = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  else {
    const aboutCount = document.querySelector(".about-counter");

    setInterval(function () {
      cont < 120 ? cont++ : (cont = 120);
      aboutCount.textContent = cont;
    }, 50);
  }

  observer.unobserve(entry.target);
};

const aboutObserver = new IntersectionObserver(aboutView, {
  root: null,
  threshold: 0.5,
});
aboutObserver.observe(aboutSec);

const boxView = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  else {
    const fiveHundred = document.querySelector(".five-hundred");
    const hundred = document.querySelector(".hundred");
    const thousand = document.querySelectorAll(".thousand");

    setInterval(function () {
      hund < 100 ? hund++ : (hund = 100);
      hundred.textContent = hund;

      five < 500 ? five++ : (five = 500);
      fiveHundred.textContent = five;

      thou < 1200 ? thou++ : (thou = 1200);
      thousand.forEach((t) => (t.textContent = thou));
    }, 50);
  }
};

const boxesObserver = new IntersectionObserver(boxView, {
  root: null,
  threshold: 1,
});
boxesObserver.observe(boxSec);
