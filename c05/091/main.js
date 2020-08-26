// 스크립트 시작 지점의 기록
const oldTime = Date.now();

setInterval(() => {
  const currentTime = Date.now();
  // 경과한 밀리초 가져오기
  const diff = currentTime - oldTime;

  // 초(second) 단위 변환하기
  const sec = Math.floor(diff / 1000);

  // HTML에 문자열 넣기
  document.querySelector('#log').innerHTML = `${sec}초 경과`;
}, 1000);
