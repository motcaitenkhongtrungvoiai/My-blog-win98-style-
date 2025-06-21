export function closeBox() {
  const closeButton = document.querySelectorAll('button[aria-label="Close"]');
  closeButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".window").style.display = "none";
    });
  });
}

export function bigerBox() {
  const closeButton = document.querySelectorAll(
    'button[aria-label="Maximize"]'
  );
  closeButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      const chossenDiv = btn.closest(".window");
      const chossenDivBody = chossenDiv.querySelector(".window-body"); 
      chossenDivBody.style.display = "block"; 
    });
  });
}

export function smallerBox() {
  const closeButton = document.querySelectorAll(
    'button[aria-label="Minimize"]'
  );
  closeButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      const chossenDiv = btn.closest(".window");
      const chossenDivBody = chossenDiv.querySelector(".window-body"); 
      chossenDivBody.style.display = "none"; 
    });
  });
}

