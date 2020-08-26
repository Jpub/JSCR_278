const boxElement = document.querySelector('#myBox');

boxElement.addEventListener('click', () => {
  boxElement.innerHTML = '클릭 이벤트가 발생하였습니다.';
});

setTimeout(() => {
  boxElement.dispatchEvent(new Event('click'));
}, 1000);
