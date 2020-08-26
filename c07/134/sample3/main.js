const box = document.querySelector('.box');

// dragover 이벤트 무효화
box.addEventListener('dragover', (event) => {
  event.preventDefault();
});

box.addEventListener('drop', () => {
  console.log('drop 이벤트');
});
