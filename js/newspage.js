let index = 0;

function showNextNews() {
  const imagesContainer = document.querySelector('#news .news-images');
  const images = document.querySelectorAll('#news .news-images img');
  index = (index + 1) % images.length;
  imagesContainer.style.transform = `translateX(-${index * 800}px)`;
}

function showPrevNews() {
  const imagesContainer = document.querySelector('#news .news-images');
  const images = document.querySelectorAll('#news .news-images img');
  index = (index - 1 + images.length) % images.length;
  imagesContainer.style.transform = `translateX(-${index * 800}px)`;
}
