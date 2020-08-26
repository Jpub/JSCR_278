/** 가로 길이를 표시하는 요소  */
const widthLog = document.querySelector('#widthLog');
/** 세로 길이를 표시하는 요소  */
const heightLog = document.querySelector('#heightLog');

// 윈도우 사이즈가 변경될 때마다 처리 실행
window.addEventListener('resize', () => {
  widthLog.innerText = `${window.innerWidth}px`;
  heightLog.innerText = `${window.innerHeight}px`;
});
