document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.querySelector('.load-more-button');
    const projectsGrid = document.querySelector('.projects-grid');
    const initialPhotosCount = projectsGrid.children.length; // Початкова кількість фото (3)
    let loadedPhotosCount = 0; // Кількість вже завантажених додатково фото

    // Масив з посиланнями на нові фотографії (всього 10)
    const newPhotos = [
        'URL_PHOTO_1',
        'URL_PHOTO_2',
        'URL_PHOTO_3',
        'URL_PHOTO_4',
        'URL_PHOTO_5',
        'URL_PHOTO_6',
        'URL_PHOTO_7',
        'URL_PHOTO_8',
        'URL_PHOTO_9',
        'URL_PHOTO_10'
        // Сюди ви вставите свої посилання на фотографії
    ];

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            // Обчислюємо індекс початку завантаження
            const startIndex = loadedPhotosCount;
            // Обчислюємо індекс кінця завантаження (максимум 10 фото)
            const endIndex = Math.min(startIndex + 10, newPhotos.length);
            const photosToLoad = newPhotos.slice(startIndex, endIndex);

            if (photosToLoad.length > 0) {
                photosToLoad.forEach(photoUrl => {
                    const projectCard = document.createElement('li');
                    projectCard.classList.add('project-card');

                    const img = document.createElement('img');
                    img.src = photoUrl;
                    img.alt = 'Додатковий проєкт'; // Додайте свій alt текст

                    projectCard.appendChild(img);
                    projectsGrid.appendChild(projectCard);
                });

                loadedPhotosCount += photosToLoad.length;

                // Якщо всі нові фотографії завантажені, ховаємо кнопку
                if (loadedPhotosCount >= newPhotos.length) {
                    loadMoreButton.style.display = 'none';
                }
            }
        });
    }
});