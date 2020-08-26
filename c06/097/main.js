window.addEventListener('resize', resizeHandler);

function resizeHandler(event) {
  // 새로운 화면의 가로 길이
  const w = innerWidth;
  // 새로운 화면의 세로 길이
  const h = innerHeight;

  document.querySelector('.value-width').innerHTML = `가로 길이는 ${w}px입니다.`;
  document.querySelector('.value-height').innerHTML = `세로 길이는 ${h}px입니다.`;
}
