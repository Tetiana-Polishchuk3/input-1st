document.addEventListener('DOMContentLoaded', function () {
  const loadMoreButton = document.querySelector('.load-more-button');
  const projectsGrid = document.querySelector('.projects-grid');
  const projectCards = document.querySelectorAll('.project-card');
  const initialVisibleCount = 3;
  let visibleCount = initialVisibleCount;

  for (let i = initialVisibleCount; i < projectCards.length; i++) {
    projectCards[i].style.display = 'none';
  }

  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', function () {
      for (
        let i = visibleCount;
        i < Math.min(visibleCount + 3, projectCards.length);
        i++
      ) {
        projectCards[i].style.display = 'flex';
      }

      visibleCount += 3;

      if (visibleCount >= projectCards.length) {
        loadMoreButton.style.display = 'none';
      }
    });
  }
});
