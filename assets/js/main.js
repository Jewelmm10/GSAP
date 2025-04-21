gsap.to("#box", {
  duration: 2,
  x: 300,
  y: 200,
  rotation: 360,
  scale: 0.5,
  borderRadius: "20%",
  ease: "bounce.out",
  repeat: -1,
  yoyo: true,
});

gsap.from(".section1 .box", {
  scale: 0,
  duration: 2,
  delay: 0.5,
  rotation: 360,
});
gsap.from(".section2 .box", {
  scale: 0,
  duration: 2,
  delay: 0.5,
  rotation: 360,
  scrollTrigger: {
    trigger: ".section2 .box",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top 30%",
  },
});
// line animation

//let path = `M 10 100 Q 500 100 990 100`;
let finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector(".string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    duration: 0.3,
    attr: { d: path },
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    duration: 1.5,
    attr: { d: finalPath },
    ease: "elastic.out(1, 0.3)",
  });
});
