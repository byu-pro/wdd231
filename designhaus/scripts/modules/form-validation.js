export function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm(contactForm)) {
          // Form is valid, proceed with submission
          submitForm(contactForm);
        }
      });
      
      // Add real-time validation
      const inputs = contactForm.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('input', () => {
          validateField(input);
        });
      });
    }
  }
  
  function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  function validateField(field) {
    const errorMessage = field.nextElementSibling;
    let isValid = true;
    
    // Reset field state
    field.classList.remove('error');
    if (errorMessage && errorMessage.classList.contains('error-message')) {
      errorMessage.style.display = 'none';
    }
    
    // Check required fields
    if (field.required && !field.value.trim()) {
      showError(field, 'This field is required');
      isValid = false;
    }
    
    // Email validation
    if (field.type === 'email' && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        showError(field, 'Please enter a valid email address');
        isValid = false;
      }
    }
    
    return isValid;
  }
  
  function showError(field, message) {
    field.classList.add('error');
    
    let errorMessage = field.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      field.parentNode.insertBefore(errorMessage, field.nextSibling);
    }
    
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }
  
  function submitForm(form) {
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    
    // Save to localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formValues));
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    form.prepend(successMessage);
    
    // Reset form
    form.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }