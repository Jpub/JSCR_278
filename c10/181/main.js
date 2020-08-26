// 요소 class  변경
document.querySelector('#checkbox').addEventListener('change', (event) => {
  const element = document.querySelector('.rect');
  if (element.classList.contains('state-show') === true) {
    element.classList.remove('state-show');
  } else {
    element.classList.add('state-show');
  }
});

const element = document.querySelector('.rect');
element.addEventListener('transitionend', (event) => {
  document.querySelector('.log').innerHTML = 'transitionend 발생 : ' + new Date().toLocaleTimeString();
});
