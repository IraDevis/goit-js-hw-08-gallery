import galleryItems from './gallery-items.js'

const refs = {
    galleryBox: document.querySelector('.js-gallery')
    
}

console.log(createImgCard(galleryItems));

const galleryMarkup = createImgCard(galleryItems);

refs.galleryBox.insertAdjacentHTML('beforeend',galleryMarkup);

function createImgCard(galleryItems) {
    return galleryItems.map((item, index) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
    }).join('');
}; 

