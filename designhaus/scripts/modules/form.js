export function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());
      
      // Save to localStorage
      localStorage.setItem('contactFormData', JSON.stringify(formValues));
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    });
  }