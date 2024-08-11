import { fetchImages } from "./js/pixabay-api.js";
import { clearGallery, renderImages } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

// Инициализация SimpleLightbox для отображения изображений
let lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// Добавление обработчика события на отправку формы
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = event.currentTarget.elements.query.value.trim();

    // Проверка, что поле ввода не пустое
    if (query === '') {
        iziToast.error({ message: 'Please enter a search term.' });
        return;
    }

    // Очистка предыдущих результатов
    clearGallery(gallery);
    // Показать индикатор загрузки
    loader.style.display = 'block';

    // Выполнение запроса к API Pixabay
    fetchImages(query)
        .then(data => {
            // Проверка, есть ли результаты
            if (data.hits.length === 0) {
                iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });
            } else {
                // Отображение изображений и обновление галереи
                renderImages(data.hits, gallery);
                lightbox.refresh();
            }
        })
        .catch(error => {
            // Обработка ошибок
            iziToast.error({ message: error.message });
        })
        .finally(() => {
            // Скрыть индикатор загрузки
            loader.style.display = 'none';
        });
});
