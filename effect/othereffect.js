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
        height: windowBody.scrollHeight,
        width: windowBody.scrollWidth,
      };

      gsap.fromTo(
        windowBody,
        {
          scale: 0,
          opacity: 0,
          padding: 0,
          margin: 0,
        },
        {
          scale: 1,
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
        scale: 0,
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

// effect for word
export function splitText() {
  gsap.registerPlugin(SplitText);
  document.fonts.ready.then(() => {
    gsap.set(".title-bar-text", { opacity: 1 });
    let split;
    SplitText.create(".title-bar-text", {
      type: "lines,words",
      linesClass: "line",
      wordsClass: "word++",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 0.6,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
        });
        return split;
      },
    });
  });
}

export function moveMenu() {
  const menu = document.querySelectorAll('menu li[role="tab"]'),
    originContainer = document.querySelector(".menu_tab menu"),
    newContainer = document.querySelector(".new_menu_tab_containt menu");
  gsap.registerPlugin(Flip);
  window.addEventListener("scroll", () => {
    const state = Flip.getState(menu);

    if (window.scrollY > 30) {
      menu.forEach((box) => {
        newContainer.appendChild(box);
      });
    } else {
      menu.forEach((box) => {
        originContainer.appendChild(box);
      });
    }

    Flip.from(state, {
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.05,
    });
  });
}
