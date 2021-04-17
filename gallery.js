import galleryImages from './gallery-items.js'

const refs = {
    galleryBox: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    modalImg: document.querySelector('.lightbox__image'),
    modalCloseBtn: document.querySelector('.lightbox__button')
};

const galleryMarkup = createImgCard(galleryImages);

refs.galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);

refs.galleryBox.addEventListener('click', onGalleryCardClick);
refs.modalCloseBtn.addEventListener('click', onModalClose);

function createImgCard(galleryImages) {
    return galleryImages.map((image, index) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
    }).join('');
};

function onGalleryCardClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    };
    refs.lightbox.classList.add('is-open');
};
    
function onModalClose() {
    refs.lightbox.classList.remove('is-open')
};


