function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

};

init();

var tl= gsap.timeline();
tl.from("#loader h2",{
     y:40,
     opacity:0,
     duration:.5,
     stagger:1.5,
     ease:"none"
})
tl.to("#loader h2",{
     y:-20,
     opacity:0,
     delay:-2,
     duration:.3,
     stagger:1.2,
     ease:"Power3.out"
})

tl.to("#loader",{
    height:0,
    duration:.5,
    ease:Power3,
    

})

tl.to("#loader",{
    display:"none"

})


document.querySelectorAll(".b").forEach((elm)=>{
    var d=elm.querySelector("div");
    var t=elm.querySelector("h3");
    var tt=gsap.timeline();
    elm.addEventListener("mouseenter",()=>{
         tt.play();
        tt.to(d,{
            bottom:"0%",
            scaleX:"100%",
            ease:"power3",
            duration:.3
        })
        tt.to(t,{
            delay:-0.2,
            color:"white"
        })
    });

     elm.addEventListener("mouseleave",()=>{
       tt.reverse();
      
    });

})

tl.from("#page2 video",{
  scaleX:.5,
  scaleY:.5,
  ease:Power3,
  duration:.4,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"top 50%",
    end:"top 40%",
    scrub:2
  }
})

gsap.to(".sc",{
  x:"0%",
  ease:"none",
  duration:8,
  repeat:-1
})
var img= document.querySelector(".imgd");
document.querySelectorAll("#page4 div").forEach((elm,i)=>{
  var t= gsap.timeline();
  elm.addEventListener("mouseenter",()=>{
      t.to(img,{
        opacity:1,
      })
      t.to(img,{
        delay:-.8,
        attr:{
          src:elm.getAttribute("data")
        }
      })
  })
   elm.addEventListener("mouseleave",()=>{
      t.to(img,{
        opacity:0,
      })
      
  })
})

  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });

