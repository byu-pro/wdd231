export function initLoader() {
    const loader = document.querySelector('.loader');
    
    if (loader) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          loader.classList.add('fade-out');
        }, 1000);
      });
    }
  }