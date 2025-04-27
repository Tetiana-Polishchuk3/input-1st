import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('.accordion', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
    elementClass: 'accordion-item',
    triggerClass: 'accordion-header',
    panelClass: 'accordion-content',
    activeClass: 'active',
    beforeOpen: currentElement => {
      const items = document.querySelectorAll('.accordion-item');
      items.forEach(item => {
        if (item !== currentElement) {
          item.classList.remove('active');
        }
      });
    },
  });
});
