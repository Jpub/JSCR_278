// 커서를 따라다니는 요소 가져오기
const el = document.querySelector('.followAnimation');

// 마우스 좌표
let mouseX = 0;
let mouseY = 0;
// 커서를 따라다니는 요소의 좌표
let currentX = 0;
let currentY = 0;
// 마우스 이동 시
document.body.addEventListener('mousemove', (event) => {
  // 마우스 좌표 저장
  mouseX = event.clientX;
  mouseY = event.clientY;
});

tick();
function tick() {
  // 애니메이션 프레임 지정
  requestAnimationFrame(tick);

  // 따라오는 요소 좌표에 마우스 좌표를 지연시켜 반영
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  // 지연된 좌표를 위치에 반영
  el.style.transform = `translate(${currentX}px, ${currentY}px)`;
}
