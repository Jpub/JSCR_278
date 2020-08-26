// 데이터 보관을 위한 Map
const srcMap = new Map();
window.addEventListener('DOMContentLoaded', () => {
  // 모든 img 요소 참조
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    // 각 img 요소 data-src 속성을 Map에 보관
    srcMap.set(img, img.dataset.src);
    // 로딩을 지연시키기 위해 요소의 속성 제거
    img.removeAttribute('src');
  });
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  // 모든 img 요소 참조
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    // Map에 보관한 값을 src 속성에 대입
    const source = srcMap.get(img);
    img.src = source;
  });
});
