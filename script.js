
const mouseFollower = document.querySelector('.mouse-follower');
document.addEventListener('mousemove', (e) => {
    mouseFollower.style.left = `${e.clientX}px`;
    mouseFollower.style.top = `${e.clientY}px`;
});

// Rotating list JS
const rotatingList = document.getElementById('rotating-list');
if (rotatingList) {
    const items = Array.from(rotatingList.children);
    let current = 0;
    // Hide all except the first
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
