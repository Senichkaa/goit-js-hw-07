import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = ({ preview, original, description }) => {
  return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
};

const mapGallery = galleryItems.map(createGallery).join("");
gallery.innerHTML = mapGallery;

gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", escClick);
      },
      onClose: () => {
        window.removeEventListener("keydown", escClick);
      },
    }
  );

  instance.show();

  function escClick(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
