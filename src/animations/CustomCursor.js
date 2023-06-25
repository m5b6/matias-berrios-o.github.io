import RETICOOL from "reticool";

export default function CustomCursor() {
  const config = {
    /** Replace document cursor. Not recommended to set to 'none' */
    cursor: "none",

    /** Size of your RETICOOL */
    radius: 30,

    /** Border width around your RETICOOL */
    borderWidth: 3,

    content: "<i class='bi bi-dot'></i>",

    color: "#d4c99b",

    opacity: 0.86,


    ease: 0.3,

    /** Selectors to trigger RETICOOL locking automatically on specific elements */
    lockTriggers: "[data-lock], a, button",

    /** Your RETICOOL color when locked */
    lockColor: "white",

    /** Your RETICOOL opacity when locked */
    lockOpacity: 0.1,

    /** A class added to your RETICOOL when locked */
    lockClass: null,

    /** Amount your RETICOOL will travel around the locked point */
    lockTravel: 0.15,

    /**
     * Expand your RETICOOL over the element it locks to.
     * Set to `false` to disable expansion,
     * Set to `0` to fit the element exactly
     * Set to any other number, including negative to expand by that many pixels around the element
     */
    lockExpand: false,

    /** How fast your RETICOOL changes sizes */
    lockEase: 0.3,
  };

  let reticool = new RETICOOL(config);

  document.addEventListener("mouseover", (e) => {
    if (
      e.target.classList.contains("hover-underline-animation") ||
      e.target.classList.contains("option-icon") ||
      e.target.classList.contains("option-txt") ||
      e.target.classList.contains("link")
    ) {
      document.querySelector(".RETICOOL__inner").innerHTML =
        "<i class='bi bi-hand-index-thumb-fill'></i>";
      reticool.config.radius = 60;
      reticool.config.color = "black";
      reticool.config.opacity = 1;
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (
      e.target.classList.contains("hover-underline-animation") ||
      e.target.classList.contains("option-icon") ||
      e.target.classList.contains("option-txt") ||
      e.target.classList.contains("link")
    ) {
      document.querySelector(".RETICOOL__inner").innerHTML =
        "<i class='bi bi-dot'></i>";
      reticool.config.radius = 30;
      reticool.config.color = "white";
      reticool.config.opacity = 0.85;
    }
  });
}
