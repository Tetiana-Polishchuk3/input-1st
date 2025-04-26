document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.querySelector('.load-more-button');
    const projectsGrid = document.querySelector('.projects-grid');
    const initialPhotosCount = projectsGrid.children.length; // Початкова кількість фото (3)
    let loadedPhotosCount = 0; // Кількість вже завантажених додатково фото

    // Масив з даними про нові фотографії (URL та підпис)
    const newPhotosData = [
        { url: '/src/img/my-projects/Rectangle 1-min.png', alt: 'STARLIGHT STUDIO LANDING PAGE' },
        { url: '/src/img/my-projects/Rectangle 10-min.png', alt: 'POWER PULSE WEBSERVICE' },
        { url: '/src/img/my-projects/Rectangle 4-min.png', alt: 'ENERGY FLOW WEBSERVICE' },
        { url: '/src/img/my-projects/Rectangle 5-min.png', alt: 'FRUITBOX ONLINE STORE' },
        { url: '/src/img/my-projects/Rectangle 6-min.png', alt: 'CHEGO JEWELRY WEBSITE' },
        { url: '/src/img/my-projects/Rectangle 7-min.png', alt: 'MIMINO WEBSITE' },
        { url: '/src/img/my-projects/Rectangle 8-min.png', alt: 'VYSHYVANKA VIBES LANDING PAGE' },
       
    ];

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            // Обчислюємо індекс початку завантаження
            const startIndex = loadedPhotosCount;
            // Обчислюємо індекс кінця завантаження 
            const endIndex = Math.min(startIndex + 7, newPhotosData.length);
            const photosToLoad = newPhotosData.slice(startIndex, endIndex);

            if (photosToLoad.length > 0) {
                photosToLoad.forEach(photoData => {
                    const projectCard = document.createElement('li');
                    projectCard.classList.add('project-card');

                    const img = document.createElement('img');
                    img.src = photoData.url;
                    img.alt = photoData.alt;

                    const caption = document.createElement('p');
                    caption.classList.add('project-caption'); // Додаємо клас для стилізації підпису
                    caption.textContent = photoData.alt;

                    projectCard.appendChild(img);
                    projectCard.appendChild(caption); // Додаємо підпис до картки
                    projectsGrid.appendChild(projectCard);
                });

                loadedPhotosCount += photosToLoad.length;

                // Якщо всі нові фотографії завантажені, ховаємо кнопку
                if (loadedPhotosCount >= newPhotosData.length) {
                    loadMoreButton.style.display = 'none';
                }
            }
        });
    }
});