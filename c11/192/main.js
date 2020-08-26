const img = document.querySelector('#myImage');
img.onload = () => {
  // 이미지 로딩 완료 후 처리 작업
  img.classList.remove('loading');
};
img.src = 'images/photo.jpg';
img.classList.add('loading');
