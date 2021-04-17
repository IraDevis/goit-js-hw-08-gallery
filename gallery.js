import galleryImages from './gallery-items.js'

const refs = {
    galleryBox: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    modalImg: document.querySelector('.lightbox__image'),
    modalCloseBtn: document.querySelector('.lightbox__button'),
    modalOverlay: document.querySelector('.lightbox__overlay')
};

const galleryMarkup = createImgCard(galleryImages);
refs.galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);

refs.galleryBox.addEventListener('click', onGalleryCardClick);
refs.modalCloseBtn.addEventListener('click', onCloseModal);
refs.modalOverlay.addEventListener('click', onOverlayClick);

function createImgCard(galleryImages) {
    return galleryImages.map(image => {
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
    
function onCloseModal() {
    refs.lightbox.classList.remove('is-open')
};

function onOverlayClick(e) {
    if (e.currentTarget === e.target) {
        onCloseModal();
    }
};
