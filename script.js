document.addEventListener("DOMContentLoaded", function() {
    gsap.from("header", { opacity: 0, y: -50, duration: 1 });
    gsap.from("#hero h2", { opacity: 0, x: -100, duration: 1.5, delay: 0.5 });
    gsap.from("#hero p", { opacity: 0, x: 100, duration: 1.5, delay: 0.7 });
    gsap.from(".btn", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });
});
