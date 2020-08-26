const button = document.querySelector('button');
button.addEventListener('click', handleClick);

function handleClick() {
  const element = document.querySelector('.target');
  if (element.classList.contains('state-show') === false) {
    element.classList.add('state-show');
  } else {
    element.classList.remove('state-show');
  }
}

// CSS Transition 이벤트
document.querySelector('.target').addEventListener('transitionend', (event) => {
  document.querySelector('.log').innerHTML = 'transitionend 발생 : ' + new Date().toLocaleTimeString();
});
