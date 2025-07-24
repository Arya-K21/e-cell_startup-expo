let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active"); // Changed from 'open' to 'active' to match style.css
};

// Shery.mouseFollower(); // Uncomment if you want mouse follower effect
Shery.makeMagnet(".logo img", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});

function handleScrollAndResize() {
  const nav = document.querySelector("nav");
  const navbar = document.querySelector(".navbar");
  const navRight = document.querySelector(".nav-right");
  const logo = document.querySelector(".logo");

  if (window.innerWidth > 992) { // Adjusted breakpoint to match responsive navbar in style.css
    if (window.scrollY > 100) {
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Slightly opaque background for nav
      navbar.style.background = "linear-gradient(247deg,  rgb(0, 0, 0) 100%)";
      navbar.style.borderRadius = "20px";
      navbar.style.padding = "15px 5px";
      navRight.style.opacity = "0";
      logo.style.opacity = "0";
    } else {
      nav.style.backgroundColor = "transparent"; // Keep transparent when at top
      navbar.style.background = "transparent";
      navbar.style.borderRadius = "0";
      navbar.style.padding = "0";
      navRight.style.opacity = "1";
      logo.style.opacity = "1";
    }
  } else {
    // Reset styles for smaller screens (mobile)
    nav.style.backgroundColor = "black"; // Ensure solid background for mobile nav
    navbar.style.background = "rgba(0, 0, 0, 0.98)"; // Ensure mobile nav has background
    navbar.style.borderRadius = "0";
    navbar.style.padding = "1rem 0"; // Match mobile nav padding
    navRight.style.opacity = "1";
    logo.style.opacity = "1";
  }
}

// Attach the event listeners
window.addEventListener("scroll", handleScrollAndResize);
window.addEventListener("resize", handleScrollAndResize);

// Initial check to apply the correct styles on page load
handleScrollAndResize();

// OnPageLoad Animation
function page_loadAnim() {
  var tl = gsap.timeline();
  tl.from(".logo img", {
    duration: 0.4,
    opacity: 0,
    y: 80,
  });

  tl.from(
    ".logo span",
    {
      duration: 0.57,
      opacity: 0,
      y: 80,
    },
    "navAnim"
  );

  // Removed #heroText animation here as it's now handled by Tailwind's animate-fade-in-up
  // tl.from(
  //   "#heroText",
  //   {
  //     duration: 0.5,
  //     opacity: 0,
  //     y: 35,
  //   },
  //   "navAnim"
  // );
}
// page_loadAnim(); // This will be called after the intro animation finishes

// Header Animation (Adjusted for current HTML structure)
function heroAnimation() {
  gsap.to("#heroBg", {
    scale: 1.2, // Adjusted scale for better effect
    scrollTrigger: {
      trigger: "body", // Trigger from body scroll
      start: "top top",
      end: "bottom top", // End at the bottom of the page
      scrub: 2,
    },
  });
  // #leftCurtain and #rightCurtain are commented out in HTML, so their animations are removed here.
  // If you re-enable them, uncomment this block:
  /*
  setTimeout(() => {
    gsap.to("#leftCurtain", {
      x: -700,
      duration: 3,
    });
    gsap.to("#rightCurtain", {
      x: 750,
      duration: 3,
    });
  }, 2000);
  */
  // #heroText animation is handled by Tailwind classes in HTML now.
  /*
  gsap.to("#heroText", {
    y: 500, // Adjusted Y translation for effect
    scrollTrigger: {
      trigger: "main", // Trigger from the main hero section
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
  });
  */
}
heroAnimation(); // Call heroAnimation on load

// Slider
function threedslider() {
  gsap.from('.carousel', {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: '.carousel',
      scroller: 'body',
      start: 'top 50%',
      end: 'top -10%',
      scrub: 2,
    }
  });

  let nextButton = document.getElementById("next");
  let prevButton = document.getElementById("prev");
  let carousel = document.querySelector(".carousel");
  let listHTML = document.querySelector(".carousel .list");
  // let seeMoreButtons = document.querySelectorAll(".seeMore"); // Removed as seeMore functionality is not desired
  // let backButton = document.getElementById("back"); // Removed as seeMore functionality is not desired

  nextButton.onclick = function () {
    showSlider("next");
  };
  prevButton.onclick = function () {
    showSlider("prev");
  };
  let unAcceppClick;
  const showSlider = (type) => {
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";

    carousel.classList.remove("next", "prev");
    let items = document.querySelectorAll(".carousel .list .item");
    if (type === "next") {
      listHTML.appendChild(items[0]);
      carousel.classList.add("next");
    } else {
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add("prev");
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
      nextButton.style.pointerEvents = "auto";
      prevButton.style.pointerEvents = "auto";
    }, 2000);
  };
  // Removed seeMore functionality as it's not implemented or desired in current design
  /*
  seeMoreButtons.forEach((button) => {
    button.onclick = function () {
      carousel.classList.remove("next", "prev");
      carousel.classList.add("showDetail");
    };
  });
  backButton.onclick = function () {
    carousel.classList.remove("showDetail");
  };
  */
}
threedslider();

function offerAnim() {
  gsap.from(".fheading", {
    opacity: 0,
    duration: 0.4,
    y: 100,
    scrollTrigger: {
      trigger: ".fheading",
      scroller: "body",
      scrub: 2,
    },
  });

  gsap.from(".student-cards-container", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: ".fheading",
      scroller: "body",
      scrub: 2,
      start: "top 20%",
      end: "top 0%",
    },
  });
  gsap.from(".fsub-heading", {
    opacity: 0,
    duration: 0.4,
    y: 100,
    scrollTrigger: {
      trigger: ".fsub-heading",
      scroller: "body",
      scrub: 2,
    },
  });
}

offerAnim();

function speakerPartnerSection() {
  gsap.from("#speakerSection h1", { // Animate the heading first
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: "#speakerSection",
      scroller: "body",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
    },
  });
  gsap.from(".speakerCard", {
    y: 50,
    opacity: 0,
    stagger: 0.2, // Stagger the cards
    scrollTrigger: {
      trigger: "#speakerSection",
      scroller: "body",
      start: "top 65%",
      end: "bottom 10%",
      scrub: 3,
    },
  });
  gsap.from(".partners h1", { // Animate the heading first
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".partners",
      scroller: "body",
      start: "top 95%",
      end: "top 65%",
      scrub: 2,
    },
  });
  gsap.from("#moving-div", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".partners",
      scroller: "body",
      start: "top 80%",
      end: "top 0%",
      scrub: 3,
    },
  });
}
speakerPartnerSection();

function VideoAnimation() {
  var videoPlayIcon = document.querySelector(".playIcon"); // Changed to target the play icon
  var video = document.querySelector("#videoSection video");

  // Initial state of the video (hidden)
  gsap.set(video, {
    transform: "scaleX(0.7) scaleY(0)",
    opacity: 0,
    borderRadius: "30px"
  });

  videoPlayIcon.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0,
        duration: 0.5,
        ease: "power2.out"
      });
      videoPlayIcon.style.display = 'none'; // Hide play icon when video plays
    }
  });

  video.addEventListener("click", function () {
    if (!video.paused) {
      video.pause();
      gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px",
        duration: 0.5,
        ease: "power2.out"
      });
      videoPlayIcon.style.display = 'flex'; // Show play icon when video pauses
    }
  });
}
VideoAnimation();

// This window.onload block is already handled in index.html, removed from app.js
/*
window.addEventListener("load", () => {
  const introAnimation = document.getElementById("introAnimation");
  const surpriseBox = document.getElementById("surpriseBox");
  const mainContent = document.getElementById("mainContent");

  setTimeout(() => {
    surpriseBox.classList.add("burst");

    setTimeout(() => {
      introAnimation.style.opacity = "0";

      // Show main content
      mainContent.style.opacity = "1";
      mainContent.style.visibility = "visible";

      setTimeout(() => {
        introAnimation.remove();
      }, 1500); // Match fade out
    }, 900); // after burst
  }, 1000); // initial delay
});
*/

// Call page_loadAnim after the main content becomes visible
// This logic is now managed by the intro animation sequence in index.html
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("mainContent");
    const observer = new MutationObserver((mutationsList, observer) => {
        for(let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                if (mainContent.style.visibility === 'visible') {
                    page_loadAnim();
                    observer.disconnect(); // Disconnect observer once animation is triggered
                }
            }
        }
    });

    observer.observe(mainContent, { attributes: true, attributeFilter: ['style'] });
});