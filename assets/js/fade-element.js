const fadeElements = document.querySelectorAll('.fade-element');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // só acontece uma vez
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
