/*
 - load  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"> vào file html 
 hoặc import từ  $npm install --save @emailjs/browser để dùng 
 */
const YOUR_PUBLIC_KEY = "";
const YOUR_SERVICE_ID = "";
const YOUR_TEMPLATE_ID = "";

emailjs.init(YOUR_PUBLIC_KEY);

// Bắt sự kiện gửi form
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form)
      .then(() => {
        console.log("SUCCESS!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
  });
});
