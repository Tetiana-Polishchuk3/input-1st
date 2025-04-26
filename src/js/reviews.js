import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import fetchData from './api';

let swiper;

const swiperContainer = document.querySelector('.reviews-swiper');
const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
const fallbackText = document.querySelector('.fallback-text');

const fetchReviews = async () => {
  try {
    const data = await fetchData('reviews');

    if (!data.length) throw new Error('No reviews');

    const markup = createSlidesMarkup(data);
    swiperWrapper.innerHTML = markup;

    initSwiper(); // Ініціалізація після вставки
  } catch (error) {
    console.error('Fetch error:', error);
    fallbackText.hidden = false;
    swiperContainer.style.display = 'none';
    alert('Oops! Failed to load reviews.');
  }
};

function createSlidesMarkup(arr) {
  return arr
    .map(
      ({ author, avatar_url, review, _id }) => `
      <li class="swiper-slide" id="${_id}">
        <p class="review-text">${review}</p>
        <div class="review-author">
          <img src="${avatar_url}" alt="${author}" class="author-avatar" />
          <span class="review-author-name">${author}</span>
        </div>
      </li>
    `
    )
    .join('');
}

function initSwiper() {
  swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Keyboard, A11y],
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
}

fetchReviews();
