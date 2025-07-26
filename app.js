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

// function handleScrollAndResize() {
//   console.log("script Loaded!!!")
//   console.log("ScrollY:", window.scrollY, "Width:", window.innerWidth);
//   const nav = document.querySelector("nav");
//   const navbar = document.querySelector(".navbar");
//   const navRight = document.querySelector(".nav-right");
//   const logo = document.querySelector(".logo");

//   if (window.innerWidth > 992) { // Adjusted breakpoint to match responsive navbar in style.css
//     if (window.scrollY === 0) {
//       nav.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; // Slightly opaque background for nav
//       navbar.style.background = "linear-gradient(247deg,  rgb(0, 0, 0) 100%)";
//       navbar.style.borderRadius = "20px";
//       navbar.style.padding = "15px 5px";
//       navRight.style.opacity = "0";
//       logo.style.opacity = "1";
    
//     } else {
//       nav.style.backgroundColor = "transparent"; // Keep transparent when at top
//       navbar.style.background = "transparent";
//       navbar.style.borderRadius = "0";
//       navbar.style.padding = "0";
//       navRight.style.opacity = "1";
//       logo.style.opacity = "1";
//     }
//   } else {
//     // Reset styles for smaller screens (mobile)
//     nav.style.backgroundColor = "black"; // Ensure solid background for mobile nav
//     navbar.style.background = "rgba(0, 0, 0, 0.98)"; // Ensure mobile nav has background
//     navbar.style.borderRadius = "0";
//     navbar.style.padding = "1rem 0"; // Match mobile nav padding
//     navRight.style.opacity = "1";
//     logo.style.opacity = "1";
//   }
// }
function handleScrollAndResize() {
  console.log("script Loaded!!!");
  console.log("ScrollY:", window.scrollY, "Width:", window.innerWidth);
  const nav = document.querySelector("nav");
  const navbar = document.querySelector(".navbar"); // Using 'navbar' directly here, assuming it's the <ul>
  const navRight = document.querySelector(".nav-right");
  const logo = document.querySelector(".logo");

  // Define a scroll threshold (e.g., 50 pixels) to trigger the change
  const scrollThreshold = 50; 

  if (window.innerWidth > 992) { // For larger screens
    if (window.scrollY > scrollThreshold) { // If scrolled down past the threshold
      nav.style.backgroundColor = "black"; // Make nav solid black when scrolled
      nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)"; // Optional: add a subtle shadow
      navbar.style.background = "transparent"; // Keep internal navbar transparent if desired
      navbar.style.borderRadius = "0";
      navbar.style.padding = "0";
      navRight.style.opacity = "1"; // Show nav-right elements
      logo.style.opacity = "1";
    } else { // When at the very top (or below threshold)
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; // Slightly opaque background for nav
      nav.style.boxShadow = "none"; // Remove shadow
      navbar.style.background = "linear-gradient(247deg,  rgb(0, 0, 0) 100%)";
      navbar.style.borderRadius = "20px";
      navbar.style.padding = "15px 5px";
      navRight.style.opacity = "0"; // Hide nav-right elements
      logo.style.opacity = "1";
    }
  } else {
    // Reset styles for smaller screens (mobile)
    // Mobile nav should typically always be solid for usability
    nav.style.backgroundColor = "black";
    nav.style.boxShadow = "none";
    navbar.style.background = "rgba(0, 0, 0, 0.98)";
    navbar.style.borderRadius = "0";
    navbar.style.padding = "1rem 0";
    navRight.style.opacity = "1";
    logo.style.opacity = "1";
  }
}

// // Attach the event listeners
window.addEventListener("scroll", handleScrollAndResize);
window.addEventListener("resize", handleScrollAndResize);
handleScrollAndResize();
// // window.addEventListener("DOMContentLoaded", handleScrollAndResize);
// // Initial check to apply the correct styles on page load

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM fully loaded");
//   handleScrollAndResize();
//   window.addEventListener("scroll", handleScrollAndResize);
//   window.addEventListener("resize", handleScrollAndResize);
// });



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
// ... (existing code before threedslider function) ...

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
    },
  });

  const carousel = document.querySelector(".carousel");
  const list = carousel.querySelector(".list");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  console.log("nextButton:", nextButton, "prevButton:", prevButton);
  // A flag to prevent multiple clicks during an animation
  let isAnimating = false;

  const showSlider = (type) => {
    if (isAnimating) {
      // If an animation is already in progress, ignore the click
      console.log("Animation in progress, ignoring click.");
      return;
    }

    isAnimating = true; // Set flag to true to indicate animation started

    // Remove existing transition classes
    carousel.classList.remove("next", "prev");
    void carousel.offsetWidth; // Force reflow to ensure class removal takes effect before adding new one

    const items = carousel.querySelectorAll(".item");

    if (type === "next") {
      list.appendChild(items[0]); // Move the first item to the end of the list
      carousel.classList.add("next"); // Add 'next' class to trigger CSS transition
    } else { // type === "prev"
      list.prepend(items[items.length - 1]); // Move the last item to the beginning of the list
      carousel.classList.add("prev"); // Add 'prev' class to trigger CSS transition
    }

    // Set a timeout to reset the animation flag and clean up classes after the transition
    // The duration must match the longest CSS transition on .carousel .list .item (0.7s or 700ms)
    const animationDuration = 700;

    setTimeout(() => {
      isAnimating = false; // Re-enable clicks after animation completes
      // Remove 'next'/'prev' classes. This is crucial for the next animation cycle
      // to correctly apply styles from the default :nth-child rules.
      carousel.classList.remove("next", "prev");
    }, animationDuration);
  };

  nextButton.onclick = function () {
    showSlider("next");
  };
  prevButton.onclick = function () {
    showSlider("prev");
  };
}

threedslider(); // Initialize the slider

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
