
// footer
document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.footer_block_title');

  function handleResize() {
      if (window.innerWidth <= 991) {
          titles.forEach(title => {
              title.addEventListener('click', toggleAccordion);
          });

          titles.forEach(title => {
              const link = title.nextElementSibling;
              link.classList.remove('active');
              link.style.height = '0';
              link.style.display = 'none';
          });
      } else {
          titles.forEach(title => {
              const link = title.nextElementSibling;
              const svg = title.querySelector('svg');
              link.classList.add('active');
              link.style.height = 'auto';
              link.style.display = 'block';
              svg.style.transform = 'rotate(0deg)';
          });

          titles.forEach(title => {
              title.removeEventListener('click', toggleAccordion);
          });
      }
  }

  function toggleAccordion(event) {
      const currentTitle = event.currentTarget;
      const currentLink = currentTitle.nextElementSibling;
      const currentSvg = currentTitle.querySelector('svg');

      titles.forEach(otherTitle => {
          const otherLink = otherTitle.nextElementSibling;
          const otherSvg = otherTitle.querySelector('svg');

          if (otherLink !== currentLink && otherLink.classList.contains('active')) {
              otherLink.classList.remove('active');
              otherLink.style.height = '0';
              otherLink.style.display = 'none';
              otherSvg.style.transform = 'rotate(0deg)';
          }
      });

      currentLink.classList.toggle('active');
      if (currentLink.classList.contains('active')) {
          currentLink.style.display = 'block';
          currentLink.style.height = currentLink.scrollHeight + 'px';
          currentSvg.style.transform = 'rotate(180deg)';
      } else {
          currentLink.style.height = '0';
          currentLink.style.display = 'none';
          currentSvg.style.transform = 'rotate(0deg)';
      }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});

// footer
