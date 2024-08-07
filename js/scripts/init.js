$(document).ready(function () {
  AOS.init();

  //animação hero GSAP
  const myText = new SplitType("#my-text");
  gsap.to(".char", {
    y: 0,
    stagger: 0.05,
    delay: 1,
    duration: 0.3,
    onComplete: function () {
      gsap.to(".by-code", {
        opacity: 1,
      });
    },
  });
});
