document.addEventListener('DOMContentLoaded', function () {
  const loadMoreButton = document.querySelector('.load-more-button');
  const projectsGrid = document.querySelector('.projects-grid');
  const initialPhotosCount = projectsGrid.children.length;
  let loadedPhotosCount = 0;

  // Determine if we're on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basePath = isGitHubPages ? '/input-1st' : '';

  const newPhotosData = [
    {
      url: `${basePath}/img/my-project/img_4@x2.jpg`,
      alt: 'STARLIGHT STUDIO LANDING PAGE',
    },
    {
      url: `${basePath}/img/my-project/img_5@x2.jpg`,
      alt: 'ENERGY FLOW WEBSERVICE',
    },
    {
      url: `${basePath}/img/my-project/img_6@x2.jpg`,
      alt: 'FRUITBOX ONLINE STORE',
    },
    {
      url: `${basePath}/img/my-project/img_7@x2.jpg`,
      alt: 'CHEGO JEWELRY WEBSITE',
    },
    { url: `${basePath}/img/my-project/img_8@x2.jpg`, alt: 'MIMINO WEBSITE' },
    {
      url: `${basePath}/img/my-project/img_9@x2.jpg`,
      alt: 'VYSHYVANKA VIBES LANDING PAGE',
    },
    {
      url: `${basePath}/img/my-project/img_10@x2.jpg`,
      alt: 'POWER PULSE WEBSERVICE',
    },
  ];

  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', function () {
      const startIndex = loadedPhotosCount;

      const endIndex = Math.min(startIndex + 3, newPhotosData.length);
      const photosToLoad = newPhotosData.slice(startIndex, endIndex);

      if (photosToLoad.length > 0) {
        photosToLoad.forEach(photoData => {
          const projectCard = document.createElement('li');
          projectCard.classList.add('project-card');

          const img = document.createElement('img');
          img.src = photoData.url;
          img.alt = photoData.alt;

          const caption = document.createElement('p');
          caption.classList.add('project-caption');
          caption.textContent = photoData.alt;

          projectCard.appendChild(img);
          projectCard.appendChild(caption);
          projectsGrid.appendChild(projectCard);
        });

        loadedPhotosCount += photosToLoad.length;

        if (loadedPhotosCount >= newPhotosData.length) {
          loadMoreButton.style.display = 'none';
        }
      }
    });
  }
});
