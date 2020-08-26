document.querySelector('.box').addEventListener('mouseenter', () => {
  log('.box 요소 위치에 마우스가 있음');
});

document.querySelector('.inner').addEventListener('mouseenter', () => {
  log('.inner 요소 위치에 마우스가 있음');
});

function log(message) {
  console.log(message);
}
