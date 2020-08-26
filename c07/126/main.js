// 터치 영역
const targetBox = document.querySelector('.box');
// 로그
const log = document.querySelector('.log');

// 화면의 터치 위치 변경 시 로그 표시
targetBox.addEventListener('touchmove', () => {
  const touch = event.changedTouches;

  log.innerHTML = `
   ${touch[0].pageX.toFixed(2)}<br>
   ${touch[0].pageY.toFixed(2)}
  `;
});
