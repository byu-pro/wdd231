export function initCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
          cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top = e.clientY + 'px';
        }, 100);
      });
      
      // Cursor effects on interactive elements
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, .project-card, .team-member'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('active');
          cursorFollower.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('active');
          cursorFollower.classList.remove('active');
        });
      });
    }
  }