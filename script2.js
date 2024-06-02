// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true },
        smoothMobile: { smooth: true },
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

    // Update ScrollTrigger on refresh
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
});

function loco(){
        
    // locomotive js essentials
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

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

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed"*/
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function page1Anime(){

    var tl = gsap.timeline();
    tl.from(".nav h1, .nav h2, .nav i",{
        opacity: 0,
        duration: 0.6,
        delay: 1,
        y: -100,
        stagger: 0.3,
        ease: "power3.out"
    })
    
    tl.from(".center",{
        opacity: 0,
        duration: 0.7,
        x: -200,
        ease: "power3.out"
    },"-=1")

}

function page2Anime(){
    gsap.from("p",{
        y:100,
        delay:2,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".page2 p",
            scroller: ".main", 
            start: "top 70%",
            end: "top 40%",
            scrub: 2,
        }
    })
    
    gsap.from("h3",{
        y:50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".page2 h3",
            scroller: ".main", 
            start: "top 70%",
            end: "top 40%",
            scrub: 2,
        }
    })
}

function page3Anime(){
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

    gsap.from("#bottom",{
        y:50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger:{
            trigger: "#bottom",
            scroller: ".main", 
            start: "top 85%",
            end: "top 60%",
            scrub: 2,
        }
    });
}

function page5Anime(){
    gsap.from("#textRight",{
        y:50,
        opacity: 0,
        duration: 5,
        stagger:2,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".page5 #textRight",
            scroller: ".main", 
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
        }
    });
    gsap.from("#pg5Title",{
        y:50,
        opacity: 0,
        duration: 5,
        stagger:2,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".page5 #pg5Title",
            scroller: ".main", 
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
        }
    });

    gsap.from("#pg5Img", {
        x:-200,
        delay: 2,
        opacity: 0,
        duration: 5,
        stagger:3,
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

function page6Anime(){
    gsap.from(".textsub",{
        y:50,
        opacity: 0,
        duration: 5,
        stagger:1,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".page6 .textsub",
            scroller: ".main", 
            start: "top 70%",
            end: "top 30%",
            scrub: 2,
        }
    });
    gsap.from(".paragraph",{
        y:100,
        opacity: 0,
        duration: 7,
        delay:2,
        stagger:1,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".page6 .paragraph",
            scroller: ".main", 
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
        }
    });
}

function page7Anime(){
    gsap.from("#textleft",{
        y:50,
        opacity: 0,
        duration: 5,
        stagger:1,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".page7 #textleft",
            scroller: ".main", 
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
        }
    });
    gsap.from("#textright",{
        y:100,
        opacity: 0,
        duration: 7,
        delay:2,
        stagger:1,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".page7 #textright",
            scroller: ".main", 
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
        }
    });
}

function footerAnime(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".footer",
            scroller: ".main", 
            start: "top 80%",
            end: "top 65%",
            scrub: 2,
        }
    })
    tl3.from(" .footer .part1",{
        opacity: 0,
        y:50,
        duration: 1,
        stagger: 2,
        ease: "power3.out"
    })
    tl3.from(" .footer .part2",{
        opacity: 0,
        y:50,
        duration: 1,
        stagger: 2,
        ease: "power3.out"
    })
    tl3.from("#footerh3",{
        opacity: 0,
        y:50,
        duration: 1,
        stagger: 2,
        ease: "power3.out"
    })
    tl3.from(".icon i",{
        opacity: 0,
        delay:3,
        duration: 8,
        stagger: 3,
        ease: "power3.out"
    })

}

// Call functions to trigger animations
function initAnimations() {
    page1Anime();
    page2Anime();
    page3Anime();
    page5Anime();
    page6Anime();
    page7Anime();
    footerAnime();
}

// Initialize animations after DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    loco();
    initAnimations();
});