window.addEventListener('focus', () => {
  document.querySelector('#log').innerHTML = '포커스 상태';
});

window.addEventListener('blur', () => {
  document.querySelector('#log').innerHTML = '포커스를 벗어난 상태';
});
