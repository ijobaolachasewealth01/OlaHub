document.addEventListener('DOMContentLoaded', () => {
  // Odometer counters animation on scroll into view
  const counters = document.querySelectorAll('.odometer');
  const initOdometers = () => {
    counters.forEach(counter => {
      const target = counter.getAttribute('data-count');
      counter.innerHTML = target;
    });
  };

  // Benefits fade-in animation
  const benefits = document.querySelectorAll('.benefit');

  // IntersectionObserver for counters
  const countersObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initOdometers();
        countersObserver.disconnect();
      }
    });
  });

  counters.forEach(counter => countersObserver.observe(counter));

  // Scroll event for benefits fade-in
  function checkBenefitsVisibility() {
    const triggerPoint = window.innerHeight * 0.85;
    benefits.forEach(benefit => {
      const top = benefit.getBoundingClientRect().top;
      if (top < triggerPoint) {
        benefit.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkBenefitsVisibility);
  checkBenefitsVisibility(); // Initial check in case some benefits already visible
});
