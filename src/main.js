'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  scrollByCardHeight,
} from './js/render-functions';

const form = document.querySelector('form'),
  input = document.querySelector('input[type="text"]'),
  loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
let query;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleClick);

function handleSubmit(e) {
  e.preventDefault();

  hideLoadMoreButton();
  clearGallery();

  query = input.value.trim();

  if (!query) {
    return;
  }

  showLoader();

  getImagesByQuery(query, page)
    .then(images => {
      if (!images.hits.length) {
        hideLoadMoreButton();
        hideLoader();
        showToast(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        return;
      } else {
        hideLoader();
        createGallery(images.hits);
        scrollByCardHeight();
        showLoadMoreButton();
        page += 1;
      }
    })
    .catch(error => {
      hideLoadMoreButton();
      hideLoader();
      showToast();
      page = 1;
    });
}

function showToast(str) {
  iziToast.show({
    position: 'topRight',
    theme: 'dark',
    backgroundColor: '#EF4040',
    message: str,
    messageColor: '#fff',
    iconUrl: './img/error.svg',
    messageSize: '16px',
  });
}

function handleClick() {
  getImagesByQuery(query, page)
    .then(images => {
      if (page > images.totalHits / 100) {
        hideLoadMoreButton();
        showToast("We're sorry, but you've reached the end of search results.");
      } else if (!images.hits.length) {
        hideLoadMoreButton();
        hideLoader();
        showToast();
        return;
      } else {
        hideLoader();
        createGallery(images.hits);
        scrollByCardHeight();
        showLoadMoreButton();
        page += 1;
      }
    })
    .catch(error => {
      hideLoadMoreButton();
      hideLoader();
      showToast();
      page = 1;
    });
}
