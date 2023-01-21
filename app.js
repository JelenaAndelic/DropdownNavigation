const nav = document.querySelector(".navigation__bar");
const navToggle = document.querySelector(".mobile-nav-toggle");
const linkFeatures = document.getElementById("featuresLink");
const linkCompany = document.getElementById("companyLink");
const dropdownFeatures = document.querySelector(
  ".navigation__dropdown-content--right"
);
const dropdownCompany = document.querySelector(
  ".navigation__dropdown-content--left"
);

const responsiveDesktop = window.matchMedia("(min-width:600px)");
const responsiveMobile = window.matchMedia("(max-width:550px)");

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");

  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  console.log(visiblity);
});

if (responsiveMobile.matches) {
  linkFeatures.addEventListener("click", () => {
    const visibilityFeatures = dropdownFeatures.getAttribute("data-visible");

    if (visibilityFeatures === "false") {
      dropdownFeatures.setAttribute("data-visible", true);
      document.getElementById("arrow1").src = "images/icon-arrow-up.svg";
    } else {
      dropdownFeatures.setAttribute("data-visible", false);
      document.getElementById("arrow1").src = "images/icon-arrow-down.svg";
    }
  });

  linkCompany.addEventListener("click", () => {
    const visibilityCompany = dropdownCompany.getAttribute("data-visible");

    if (visibilityCompany === "false") {
      dropdownCompany.setAttribute("data-visible", true);
      document.getElementById("arrow2").src = "images/icon-arrow-up.svg";
    } else {
      dropdownCompany.setAttribute("data-visible", false);
      document.getElementById("arrow2").src = "images/icon-arrow-down.svg";
    }
  });
}

if (responsiveDesktop.matches) {
  linkFeatures.addEventListener("mouseover", () => {
    document.getElementById("arrow1").src = "images/icon-arrow-up.svg";
  });

  linkFeatures.addEventListener("mouseout", () => {
    document.getElementById("arrow1").src = "images/icon-arrow-down.svg";
  });

  linkCompany.addEventListener("mouseover", () => {
    document.getElementById("arrow2").src = "images/icon-arrow-up.svg";
  });

  linkCompany.addEventListener("mouseout", () => {
    document.getElementById("arrow2").src = "images/icon-arrow-down.svg";
  });
}
