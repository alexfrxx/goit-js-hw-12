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
let perPage = 15;
let query;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleClick);

async function handleSubmit(e) {
  try {
    e.preventDefault();

    page = 1;

    hideLoadMoreButton();
    clearGallery();

    query = input.value.trim();

    if (!query) {
      return;
    }

    showLoader();

    const response = await getImagesByQuery(query, page);

    if (!response.hits.length) {
      hideLoadMoreButton();
      hideLoader();
      showToast(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
      return;
    } else {
      hideLoader();
      createGallery(response.hits);
      scrollByCardHeight();
      showLoadMoreButton();
      page += 1;
    }
  } catch (error) {
    hideLoadMoreButton();
    hideLoader();
    showToast(
      'Sorry, there are no images matching your search query. Please, try again!'
    );
    page = 1;
  }
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

async function handleClick() {
  try {
    hideLoadMoreButton();
    showLoader();

    const response = await getImagesByQuery(query, page);

    if (page * perPage >= response.totalHits) {
      hideLoader();
      hideLoadMoreButton();
      showToast("We're sorry, but you've reached the end of search results.");
    } else if (!response.hits.length) {
      hideLoadMoreButton();
      hideLoader();
      showToast("We're sorry, but you've reached the end of search results.");
      return;
    } else {
      hideLoader();
      createGallery(response.hits);
      scrollByCardHeight();
      showLoadMoreButton();
      page += 1;
    }
  } catch (error) {
    hideLoadMoreButton();
    hideLoader();
    showToast("We're sorry, but you've reached the end of search results.");
    page = 1;
  }
}
