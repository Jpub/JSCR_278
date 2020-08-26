// 터치 이벤트 확인용 box
const targetBox = document.querySelector('.box');
// 로그 출력 영역
const logArea = document.querySelector('.log');

// 터치 시작 시 영역에 로그 표시
targetBox.addEventListener('touchstart', () => {
  logArea.innerHTML = '터치 시작';
});

// 터치 위치 이동 시 영역에 로그 표시
targetBox.addEventListener('touchmove', () => {
  logArea.innerHTML = '터치 위치 이동';
});

// 터치 종료 시 영역에 로그 표시
targetBox.addEventListener('touchend', () => {
  logArea.innerHTML = '터치 종료';
});
