/** 캐릭터 이미지 */
const character = document.querySelector('.character');

/** 각도 */
let degree = 0;

// 루프의 개시
loop();

/**
 * 화면이 갱신될 때마다 실행되는 함수
 */
function loop() {
  // 회전각을 라디안으로 구하기
  const rotation = (degree * Math.PI) / 180;
  // 회전각으로 위치 구하기
  const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
  const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;
  // character 위치 반영하기
  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;
  // 각도 1도 증가시키기
  degree += 1;
  // 다음 화면 갱신 타이밍에서 loop( ) 실행
  requestAnimationFrame(loop);
}
