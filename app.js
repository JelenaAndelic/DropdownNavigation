let closeButton = document.querySelector(".closeMenu");
let openButton = document.querySelector(".openMenu");
let sideBarMenu = document.querySelector("#sideBarNav");

const mq = window.matchMedia("(max-width:375px)");
const mqL = window.matchMedia("(min-width:376px)");
const dropdownMenu = document.querySelectorAll(".dropdown");
const dropdownItem = document.querySelectorAll(".dropdownContent");

openButton.addEventListener("click", () => {
    sideBarMenu.style.display = "flex";
    closeButton.style.display = "flex";
    openButton.style.display = "none";
})

closeButton.addEventListener("click", () => {
    sideBarMenu.style.display = "none";
    openButton.style.display = "flex";
    closeButton.style.display = "none";

})

if (mq.matches) {
    for (let i = 0; i < dropdownMenu.length; i++) {
        dropdownMenu[i].addEventListener("click", function () {
            dropdownItem[i].classList.toggle("display-block");
        });
    }
}

if (mq.matches) {
    dropdownMenu[0].addEventListener("click", function () {
        if (document.getElementById("arrow1").getAttribute("src") == "images/icon-arrow-down.svg") {
            document.getElementById("arrow1").src = "images/icon-arrow-up.svg";
        } else {
            document.getElementById("arrow1").src = "images/icon-arrow-down.svg";
        }
    });
    dropdownMenu[1].addEventListener("click", function () {
        if (document.getElementById("arrow2").getAttribute("src") == "images/icon-arrow-down.svg") {
            document.getElementById("arrow2").src = "images/icon-arrow-up.svg";
        } else {
            document.getElementById("arrow2").src = "images/icon-arrow-down.svg";
        }
    });
}

if (mqL.matches) {
    dropdownMenu[0].addEventListener("mouseover", function () {
        document.getElementById("arrow1").src = "images/icon-arrow-up.svg";
    })

    dropdownMenu[0].addEventListener("mouseout", function () {
        document.getElementById("arrow1").src = "images/icon-arrow-down.svg";
    })

    dropdownMenu[1].addEventListener("mouseover", function () {
        document.getElementById("arrow2").src = "images/icon-arrow-up.svg";
    })

    dropdownMenu[1].addEventListener("mouseout", function () {
        document.getElementById("arrow2").src = "images/icon-arrow-down.svg";
    })
}
