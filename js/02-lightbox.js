import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery')
const galleryElements = createGallery(galleryItems);

galleryList.insertAdjacentHTML('afterbegin', galleryElements)

function createGallery (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
 return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('')
}

galleryList.addEventListener('click', handleModalOpen);

function handleModalOpen(evt) {
    evt.preventDefault();

    if (evt.nodename !== 'IMG') {
        return;
    }

    createSimpleLightbox(evt);
}

createSimpleLightbox();

function createSimpleLightbox() {
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });
}