const box = document.querySelector('.box');

box.addEventListener('dragenter', () => {
  console.log('dragenter 이벤트');
});

box.addEventListener('dragover', () => {
  console.log('dragover 이벤트');
});

box.addEventListener('dragleave', () => {
  console.log('dragleave 이벤트');
});
