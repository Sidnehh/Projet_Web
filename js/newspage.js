let index = 0;

function showNextNews() {
  const container = document.querySelector('#news .news-images');
  const items = document.querySelectorAll('#news .carousel-item');
  index = (index + 1) % items.length;
  container.style.transform = `translateX(-${index * 800}px)`;
}

function showPrevNews() {
  const container = document.querySelector('#news .news-images');
  const items = document.querySelectorAll('#news .carousel-item');
  index = (index - 1 + items.length) % items.length;
  container.style.transform = `translateX(-${index * 800}px)`;
}
