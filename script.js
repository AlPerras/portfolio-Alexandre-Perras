document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  // Function to remove 'active' class from all links
  function removeActiveClass() {
    links.forEach((link) => link.classList.remove("active"));
  }

  // Function to add 'active' class to the clicked link
  function addActiveClass(link) {
    link.classList.add("active");
  }

  // Event listener for page load (sets the active link based on URL hash)
  function setActiveLink() {
    removeActiveClass();
    const currentHash = window.location.hash;
    links.forEach((link) => {
      if (link.getAttribute("href") === currentHash) {
        addActiveClass(link);
      }
    });
  }

  // Run on initial page load
  setActiveLink();

  // Event listener for hash changes (when user scrolls or clicks on links)
  window.addEventListener("hashchange", setActiveLink);
});
