const selectElement = (s) => document.querySelector(s);
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

// Animate Elements
let boxElement;
let increasingColor = "rgba(40, 40, 190, 1)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  boxElement = document.querySelector(".activities-grid");
  textElements=document.querySelectorAll("h1")
  createObserver();
}, false);

function createObserver() {
  let observer;
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  };
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
  textElements.forEach((textElement)=> observer.observe(textElement))
 
}
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    
    if (entry.intersectionRatio != 0) {
      if(entry.target.tagName=="H1")
      {entry.target.classList.add("text-animation");}
     else
      {entry.target.classList.add("flicker-in-1");}
    } 

    
   
  });
}
