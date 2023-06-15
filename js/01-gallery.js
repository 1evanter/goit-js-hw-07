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
    
    if (evt.target.nodeName !== "IMG") {
        return;
    }

  createLightbox(evt);
}

function handleKeyPress(instance) {
  window.addEventListener('keydown', function eventHandler(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener('keydown', eventHandler)
    }
  });
  }

  function createLightbox(evt) {

    const modalImg = evt.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src="${modalImg}" width="800" height="600">`
    );

    instance.show();

    handleKeyPress(instance);
  }