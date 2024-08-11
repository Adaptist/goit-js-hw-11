const API_KEY = '45384673-88f77579824a7b83d33085da5';
const BASE_URL = 'https://pixabay.com/api/';

// Функция для выполнения HTTP-запроса

export function fetchImages(query) {
    
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(
                    `Network response was not ok: ${response.statusText}`
                    );
            }
            return response.json();
        });
}