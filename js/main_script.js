/*------------Toggle Nav---------------*/
let navToggle = document.querySelector(".nav-toggler");

navToggle.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    // hide scrolling
    document.body.classList.toggle("hide-scrolling");
});


function hideSection() {
    navToggler.classList.remove("active");
    // hide section
    let hideSection = document.querySelector("section.active");
    hideSection.classList.toggle("fade-out");

}
let navToggler = document.querySelector("nav");

function toggleNavbar() {
    // toggle nav
    navToggler.classList.toggle("active");
}
/*----------Active Section------------*/
// let links = document.querySelectorAll(".link-item");
// links.forEach((link) => {
//     link.addEventListener("click", (eo) => {
//         if (eo.target.classList.contains("link-item") && eo.target.hash !== "") {
//             //testing condition console.log("hey every body");
//             // let hash = eo.target.hash;
//             navToggle.classList.add("hide");
//             //testing if it's working right || not console.log(hash);
//             if (eo.target.classList.contains("link-item")) {
//                 toggleNavbar();
//             } else {
//                 hideSection();
//                 document.body.classList.add("hide-scrolling");
//             }
//             setTimeout(() => {
//                 let activeSection = document.querySelector("section.active");
//                 activeSection.classList.remove("active", "fade-out");

//                 document.querySelector(eo.target.hash).classList.add("active");
//                 window.scrollTo(0, 0);
//                 document.body.classList.remove("hide-scrolling");
//                 navToggle.classList.remove("hide");
//             }, 500);
//         }
//     });
// });

// {umimah abdulhady x-team loop idea }

let act = document.getElementsByClassName("link-item");
for (i = 0; i < act.length; i++) {
    act[i].addEventListener("click", (eo) => {
        navToggle.classList.add("hide");
        if (eo.target.classList.contains(act[i]) && eo.target.hash !== "") {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            let activeSection = document.querySelector("section.active");
            activeSection.classList.remove("active", "fade-out");
            document.querySelector(eo.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggle.classList.remove("hide");
        }, 500);
    });
}

/*---------- About Tabs ------------- */
let tabsContainer = document.querySelector(".about-tabs");
let aboutSection = document.querySelector(".about-section");
/*
1. We are using the event listener to listen for a click event on the tabsContainer element.
2. We are checking if the target of the event is a tab-item element and if it’s not active.
3. If the above condition is true, we remove the active class from the active tab-item element and add the active class to the clicked tab-item element.
*/
tabsContainer.addEventListener("click", (eo) => {
    // console.log(eo.target)
    /*
                1. The first line of code checks if the target of the event is a tab item.
                2. The second line of code checks if the target of the event is not active.
                3. The third line of code checks if the target of the event is not active.        ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
                4.we can use this as acondition too .... eo.target.classList.contains("tab-item") && 
                !eo.target.classList.contains("active")
                */
    if (!eo.target.classList.contains("active")) {
        let removeActive = tabsContainer.querySelector(".active");

        removeActive.classList.remove("active");

        eo.target.classList.add("active");

        // also control in data Target
        let target = eo.target.getAttribute("data-target");
        // console.log(target);
        let removeTarget = aboutSection.querySelector(".tab-content.active");
        removeTarget.classList.remove("active");
        let addTarget = aboutSection.querySelector(target);
        addTarget.classList.add("active");
    }
});

let btns = document.querySelectorAll(".btn");
btns.forEach((button) => {
    button.addEventListener("click", (eo) => {
        eo.preventDefault();
    });
});

/*-------------------------------
Portfolio Item Details Popup
--------------------------------*/
let viewProject = document.querySelectorAll(".view-project-btn");
let portfolioPopup = document.querySelector(".portfolio-popup");
let closeBtn = document.querySelector(".popup-close");
let main = document.querySelector("main");

viewProject.forEach((viewMyProject) => {
    viewMyProject.addEventListener("click", (eo) => {
        if (eo.target.classList.contains("view-project-btn")) {
            // console.log("hi islam from btn ");
            togglePortfolioPopup();
            document.querySelector(".portfolio-popup").scrollTo(0, 0);
            portfolioItemDetail(eo.target.parentElement);
        }
    });
});

function togglePortfolioPopup() {
    portfolioPopup.classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    main.classList.toggle("fade-out");
}
closeBtn.addEventListener("click", togglePortfolioPopup);

// hiding poup when click outside of it
document.addEventListener("click", (eo) => {
    if (eo.target.classList.contains("popup-inner")) {
        togglePortfolioPopup();
    }
});

function portfolioItemDetail(portfolioItem) {
    // showing imgs
    let imgSrc = document.querySelector(".popup-thumbnail img");
    let imgMainSrc = portfolioItem.querySelector(".portfolio-item-thumbnail img");
    imgSrc.src = imgMainSrc.src;
    // show header
    let headerH3 = document.querySelector(".popup-header h3");
    let mainHeaderH3 = portfolioItem.querySelector(".portfolio-item-title");
    headerH3.innerHTML = mainHeaderH3.innerHTML;

    // show desription details
    let popupPa = document.querySelector(".popup-body");
    let mainPopupPa = portfolioItem.querySelector(".portfolio-item-details");
    popupPa.innerHTML = mainPopupPa.innerHTML;
}