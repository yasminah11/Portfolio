function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {

    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

link4.addEventListener('click', () => {
    scrollToElement('.skills');
});


// Header
gsap.from("header h1", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power2.out",
});

gsap.from("header p", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    delay: 0.5,
});

gsap.from("header .image", {
    duration: 1.5,
    opacity: 0,
    x: 100,
    ease: "power2.out",
    delay: 1,
});


gsap.registerPlugin(ScrollTrigger);

gsap.from(".features .card", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
    },
});

gsap.to(".features .card", {
    duration: 0.5,
    y: -10,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".features .card",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
    },
});


window.addEventListener("scroll", function () {
    const contactSection = document.querySelector('.contact-form');
    const rect = contactSection.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        contactSection.classList.add('show');
    }
});



const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5 
});


const contactForm = document.querySelector('.contact-form');
observer.observe(contactForm);



document.addEventListener("DOMContentLoaded", function() {
    const skillCircles = document.querySelectorAll('.skill-circle');

  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    skillCircles.forEach(circle => {
        observer.observe(circle); 
    });


    skillCircles.forEach(circle => {
        const skill = circle.getAttribute('data-skill');
        circle.style.setProperty('--skill', skill + '%');
    });
});



const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) { 
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});


backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  
    });
});
