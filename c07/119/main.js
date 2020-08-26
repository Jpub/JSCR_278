// 조작 영역
const logArea = document.querySelector('#log2');

// 영역에서 마우스 버튼을 누르면 로그를 출력
logArea.addEventListener('mousedown', () => {
  logArea.innerHTML = `마우스 클릭 이벤트 발생`;
});

// 영역에서 마우스 버튼을 떼면 로그를 출력
logArea.addEventListener('mouseup', () => {
  logArea.innerHTML = `마우스 버튼을 떼는 이벤트 발생`;
});

// 영역에서 마우스를 움직이면 로그를 출력
logArea.addEventListener('mousemove', () => {
  logArea.innerHTML = `마우스 이동 이벤트 발생`;
});
