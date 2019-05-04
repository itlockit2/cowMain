function scaleDown(event) {
  console.log(event.target);
  TweenMax.to(".box2__image", 0.5, {
    scale: 0,
    height: 0,
    force3D: true,
    ease: Power1.easeOut
  });
}
function scaleOriginal(event) {
  TweenMax.to(".box2__image", 0.5, {
    scale: 1,
    height: "100%",
    ease: Power1.easeOut
  });
}
