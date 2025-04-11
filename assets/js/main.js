gsap.to("#box", {
  duration: 2,
  x: 300,
  //rotation: 360,
  //scale: 0.5,
  borderRadius: "20%",
  ease: "bounce.out",
  repeat: -1,
  yoyo: true,
});
gsap.to("#box2", {
  duration: 2,
  x: 300,
  //rotation: 360,
  //scale: 0.5,
  borderRadius: "20%",
  ease: "bounce.out",
  repeat: -1,
  yoyo: true,
  delay: 2,
});
gsap.from("h1", {
  duration: 2,
  y: 30,
  repeat: -1,
  ease: "easeOut",
  //yoyo: true,
  opacity: 0,
  delay: 1,
  stagger: 2,
});
