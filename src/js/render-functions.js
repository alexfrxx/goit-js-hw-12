'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery'),
  loader = document.querySelector('.loader'),
  loadMoreBtn = document.querySelector('.load-more-btn');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
<a href="${largeImageURL}">
<img src="${webformatURL}" alt="${tags}" width="360" height="152">
</a>
<ul class="image-info-list">
<li class="image-info-item">Likes
<p>${likes}</p>
</li>
<li class="image-info-item">Views
<p>${views}</p>
</li>
<li class="image-info-item">Comments
<p>${comments}</p>
</li>
<li class="image-info-item">Downloads
<p>${downloads}</p>
</li>
</ul>
</li>`;
      }
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);

  gallery.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('load');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('load');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('load');
}

export function hideLoader() {
  loader.classList.remove('load');
}

export function scrollByCardHeight() {
  const card = document.querySelector('.gallery-item');

  const { height } = card.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
