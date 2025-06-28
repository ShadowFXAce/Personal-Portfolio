document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const topBtn = document.getElementById("backToTop");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};



// JavaScript to manage section visibility when navigating
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section'); // Get all sections
  const navLinks = document.querySelectorAll('header nav a'); // Get all navigation links

  // Function to remove active class from all sections
  function resetSections() {
    sections.forEach((section) => {
      section.classList.remove('active');
    });
  }

  // Add event listener for each navigation link
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor behavior

      const targetId = link.getAttribute('href').substring(1); // Get the section ID from href

      resetSections(); // Hide all sections
      document.getElementById(targetId).classList.add('active'); // Show the target section
    });
  });
});

