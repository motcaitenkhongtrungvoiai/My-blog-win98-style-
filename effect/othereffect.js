// Hàm đóng cửa sổ
export function closeBox() {
  document.addEventListener("click", (e) => {
    if (e.target.matches('button[aria-label="Close"]')) {
      const window = e.target.closest(".window");
      gsap.to(window, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        onComplete: () => {
          window.style.display = "none";
        },
      });
    }
  });
}

// Hàm phóng to cửa sổ
export function bigerBox() {
  document.addEventListener("click", (e) => {
    if (e.target.matches('button[aria-label="Maximize"]')) {
      const window = e.target.closest(".window");
      const windowBody = window.querySelector(".window-body");
      windowBody.style.display = "block";

      const originalStyles = {
        height: windowBody.scrollHeight ,
        width: windowBody.scrollWidth ,
      };

      gsap.fromTo(
        windowBody,
        {
          height: 0,
          width: 0,
          opacity: 0,
          padding: 0,
          margin: 0,
          
        },
        {
          height: originalStyles.height,
          width: originalStyles.width,
          opacity: 1,
          padding: "4px",
          margin: "4px",
          duration: 0.5,
          
        }
      );
    }
  });
}

// Hàm thu nhỏ cửa sổ
export function smallerBox() {
  document.addEventListener("click", (e) => {
    if (e.target.matches('button[aria-label="Minimize"]')) {
      const window = e.target.closest(".window");
      const windowBody = window.querySelector(".window-body");

      // Lưu kích thước ban đầu trước khi ẩn
      windowBody._originalHeight = windowBody.scrollHeight;
      windowBody._originalWidth = windowBody.scrollWidth;

      gsap.to(windowBody, {
        height: 0,
        width: 0,
        opacity: 0,
        padding: 0,
        margin: 0,
        duration: 0.3,
        onComplete: () => {
          windowBody.style.display = "none";
        },
      });
    }
  });
}
