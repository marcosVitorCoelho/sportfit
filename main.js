const headerContainer = document.getElementById("header-placeholder");
fetch("src/components/Header/header.html")
  .then((response) => response.text())
  .then((data) => {
    headerContainer.innerHTML = data;
  });

const footerContainer = document.getElementById("footer-placeholder");
fetch("src/components/Footer/footer.html")
  .then((response) => response.text())
  .then((data) => {
    footerContainer.innerHTML = data;
  });

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    headerContainer.firstChild.classList.add("scrolled");
  } else {
    headerContainer.firstChild.classList.remove("scrolled");
  }
});
