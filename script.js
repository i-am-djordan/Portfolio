// Mouse Follower JS
const follower = document.querySelector(".mouse-follower");

// Check if it's a touch device
if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
  if (follower) follower.style.display = "none";
} else {
  // Desktop only
  document.addEventListener("mousemove", (e) => {
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

// Rotating list JS
const rotatingList = document.getElementById('rotating-list');
if (rotatingList) {
    const items = Array.from(rotatingList.children);
    let current = 0;
    items.forEach((item, idx) => {
        item.style.display = idx === 0 ? 'block' : 'none';
    });
    setInterval(() => {
        items[current].style.display = 'none';
        current = (current + 1) % items.length;
        items[current].style.display = 'block';
    }, 2000)
}

// Hamburger Menu JS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
