'use strict';


const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});


const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
});


document.addEventListener('DOMContentLoaded', function() {
  var options = {
      strings: [
          " Web Developer.",
          " App Developer.",
          " Graphic Designer.",
          " Video Editor.",
          " UI/UX Designer.",
          " Prompt Engineer.",
          " Data Analyst."
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true
  };

  var typed = new Typed("#typed-text", options);
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('myModal');
  const closeBtn = document.querySelector('.close');
  const pdfIframe = document.getElementById('pdfIframe');

  document.querySelectorAll('.pdf-project').forEach(function (pdfLink) {
    pdfLink.addEventListener('click', function (e) {
      e.preventDefault();
      const pdfPath = this.getAttribute('data-pdf');
      openPdfModal(pdfPath);
    });
  });

  closeBtn.addEventListener('click', function () {
    closeModalHandler();
  });

  function openPdfModal(pdfPath) {
    modal.style.display = 'block';
    pdfIframe.src = pdfPath;
  }

  function closeModalHandler() {
    modal.style.display = 'none';
    pdfIframe.src = ''; 
  }
});




const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});