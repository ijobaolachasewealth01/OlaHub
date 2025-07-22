const counters = document.querySelectorAll('.odometer');

const initOdometers = () => {
  counters.forEach(counter => {
    const target = counter.getAttribute('data-count');
    counter.innerHTML = target;
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      initOdometers();
      observer.disconnect();
    }
  });
});

counters.forEach(counter => observer.observe(counter));
