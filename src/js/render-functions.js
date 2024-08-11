export function clearGallery(galleryElement) {
    galleryElement.innerHTML = '';
}

export function renderImages(images, galleryElement) {
    const markup = images.map(({ 
        webformatURL, 
        largeImageURL, 
        tags, 
        likes, 
        views, 
        comments, 
        downloads 
    }) => {
        return `
            <a href="${largeImageURL}">
            <img src="${webformatURL}" 
                alt="${tags}" 
                title="${tags}" />
            <ul class="gallery-list">
                <li class="gallery-list-item">
                    <p>Likes</p>
                    <p>${likes}</p>
                </li>
                <li class="gallery-list-item">
                    <p>Views</p>
                    <p>${views}</p>
                </li>
                <li class="gallery-list-item">
                    <p>Comments</p>
                    <p>${comments}</p>
                </li>
                <li class="gallery-list-item">
                    <p>Downloads</p>
                    <p>${downloads}</p>
                </li>
            </ul></a>`;
    }).join('');

    galleryElement.insertAdjacentHTML('beforeend', markup);
}
