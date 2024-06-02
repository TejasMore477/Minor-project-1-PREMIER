// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true }
    });

    // Update ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    // Setup ScrollTrigger scroller proxy
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Initialize animations
    initAnimations();

    /*-----------------------------------------------------Shepherd stylings------------------------------------------------------------------------*/

    // Initialize Shepherd.js Tour
    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            classes: 'custom-shepherd-class',
            scrollTo: false, /*prevent default scrolling */
            popperOptions: {
                modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
            }
        }
    });

    // Function to create a delay
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Add Steps to the Tour
    tour.addStep({
        id: 'intro',
        text: 'Welcome to Premier Management!',
        attachTo: {
            element: '.logo',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Exit',
                classes: 'shepherd-exit-button',
                action: tour.complete // Ends the tour
            },
            {
                text: 'Next',
                action: tour.next
            },
        ],
        beforeShowPromise: () => delay(4000) // 4-second delay before showing this step
    });

    tour.addStep({
        id: 'feature1',
        text: 'Explore our elite male & female models!',
        attachTo: {
            element: '.menWomen',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Exit',
                action: tour.complete
            }
        ]
    });

    tour.addStep({
        id: 'members',
        text: 'Discover our top models & talents!',
        attachTo: {
            element: '.members',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Exit',
                action: tour.complete
            },
        ],
    });

    tour.addStep({
        id: 'icons',
        text: 'Follow us for latest updates & trends!',
        attachTo: {
            element: '.icon',
            on: 'left'
        },
        buttons: [
            {
                text: 'Exit',
                action: tour.complete
            },
        ],
        beforeShowPromise: () => delay(1000)
    });

    // Add GSAP ScrollTrigger Animations for Shepherd steps
    gsap.from('.members', {
        opacity: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: '.members',
            scroller: '.main',
            start: 'top 60%',
            end: 'bottom 30%',
            markers: false,
            // toggleActions: "none", // Prevent default scrolling behavior not working so I used delay to minimize the problem.
            onEnter: () => {
                if (!tour.isActive()) {
                    tour.show('members'); // Show the 'members' step of the tour
                }
            }
        }
    });

    gsap.from('.icon', {
        opacity: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: '.footer .icon',
            scroller: '.main',
            start: 'top 90%',
            end: 'bottom 70%',
            // markers: true,
            onEnter: () => {
                if (!tour.isActive()) {
                    tour.show('icons'); // Show the 'icons' step of the tour
                }
            }
        }
    });

    // Start the tour
    tour.start();
});

/*-----------------------------------------------------Shepherd stylings------------------------------------------------------------------------*/

function initAnimations() {
    page1Anime();
    page2Anime();
    page3Anime();
    page5Anime();
    page6Anime();
    page7Anime();
    footerAnime();
}

function page1Anime() {
    var tl = gsap.timeline();
    tl.from(".nav h1, .nav h2, .nav i", {
        opacity: 0,
        duration: 0.6,
        delay: 1,
        y: -100,
        stagger: 0.3,
        ease: "power3.out"
    });
    tl.from(".center", {
        opacity: 0,
        duration: 0.7,
        x: -200,
        ease: "power3.out"
    }, "-=1");
}

function page2Anime() {
    gsap.from(".page2 p", {
        y: 100,
        delay: 2,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page2 p",
            scroller: ".main",
            start: "top 70%",
            end: "top 40%",
            scrub: 2,
        }
    });
    gsap.from(".page2 h3", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page2 h3",
            scroller: ".main",
            start: "top 70%",
            end: "top 40%",
            scrub: 2,
        }
    });
}

function page3Anime() {
    gsap.from(".imageOverhead", {
        rotation: 90,
        delay: 2,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".imageOverhead",
            scroller: ".main",
            start: "top 40%",
            end: "top 0",
            scrub: 2,
        }
    });
    gsap.from("#bottom", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#bottom",
            scroller: ".main",
            start: "top 85%",
            end: "top 60%",
            scrub: 2,
        }
    });
}

function page5Anime() {
    gsap.from("#textRight", {
        y: 50,
        opacity: 0,
        duration: 5,
        stagger: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page5 #textRight",
            scroller: ".main",
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
        }
    });
    gsap.from("#pg5Title", {
        y: 50,
        opacity: 0,
        duration: 5,
        stagger: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page5 #pg5Title",
            scroller: ".main",
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
        }
    });
    gsap.from("#pg5Img", {
        x: -200,
        delay: 2,
        opacity: 0,
        duration: 5,
        stagger: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#pg5Img",
            scroller: ".main",
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
        }
    });
}

function page6Anime() {
    gsap.from(".textsub", {
        y: 50,
        opacity: 0,
        duration: 5,
        stagger: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page6 .textsub",
            scroller: ".main",
            start: "top 70%",
            end: "top 30%",
            scrub: 2,
        }
    });
    gsap.from(".paragraph", {
        y: 100,
        opacity: 0,
        duration: 7,
        delay: 2,
        stagger: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page6 .paragraph",
            scroller: ".main",
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
        }
    });
}

function page7Anime() {
    gsap.from("#textleft", {
        y: 50,
        opacity: 0,
        duration: 5,
        stagger: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page7 #textleft",
            scroller: ".main",
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
        }
    });
    gsap.from("#textright", {
        y: 100,
        opacity: 0,
        duration: 7,
        delay: 2,
        stagger: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page7 #textright",
            scroller: ".main",
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
        }
    });
}

function footerAnime() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            scroller: ".main",
            start: "top 80%",
            end: "top 65%",
            scrub: 2,
        }
    });
    tl3.from(".footer .part1", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 2,
        ease: "power3.out"
    });
    tl3.from(".footer .part2", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 2,
        ease: "power3.out"
    });
    tl3.from("#footerh3", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 2,
        ease: "power3.out"
    });
    tl3.from(".icon i", {
        opacity: 0,
        delay: 3,
        duration: 8,
        stagger: 3,
        ease: "power3.out"
    });
}
