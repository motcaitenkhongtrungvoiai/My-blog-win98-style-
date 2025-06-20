export function contentLoader() {
  const loadEffect = document.querySelector("#frist-load");
  let width = 0;
  function animate() {
    width += 0.5; 
    loadEffect.style.width = width + "%";
    if (width < 100) {
      requestAnimationFrame(animate);
    }
    else{
        document.querySelector(".load").style.display="none";
        document.querySelector("#main-content").style.display="flex"
    };
  }
  animate();
}
