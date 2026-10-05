const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const revealItems = document.querySelectorAll(
  ".split-content, .service, .manifesto-inner, .steps article, .timeline article, .cta"
);
revealItems.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(el => observer.observe(el));

document.querySelectorAll(".service").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 6;
    const y = ((e.clientY - r.top) / r.height - .5) * -6;
    card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  });
  card.addEventListener("pointerleave", () => card.style.transform = "");
});
