// Mouse Follower JS
const follower = document.querySelector(".mouse-follower");

if (follower && window.matchMedia("(pointer:fine)").matches) {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX - follower.offsetWidth / 2;
    const y = e.clientY - follower.offsetHeight / 2;
    follower.style.transform = `translate(${x}px, ${y}px)`;
  });
} else if (follower) {
  follower.style.display = "none";
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
