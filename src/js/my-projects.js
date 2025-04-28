document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.querySelector('.load-more-button');
    const projectsGrid = document.querySelector('.projects-grid');
    const projectCards = document.querySelectorAll('.project-card');
    const initialVisibleCount = 3;
    let visibleCount = initialVisibleCount;

    // Приховуємо всі картки, крім перших трьох
    for (let i = initialVisibleCount; i < projectCards.length; i++) {
        projectCards[i].style.display = 'none';
    }

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            // Показуємо наступні 3 картки
            for (let i = visibleCount; i < Math.min(visibleCount + 3, projectCards.length); i++) {
                projectCards[i].style.display = 'flex'; // Або 'block', залежно від вашої поточної розмітки .project-card
            }

            visibleCount += 3;

            // Якщо всі картки показано, ховаємо кнопку "LOAD MORE"
            if (visibleCount >= projectCards.length) {
                loadMoreButton.style.display = 'none';
            }
        });
    }
});