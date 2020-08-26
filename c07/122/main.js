/** 캐릭터 이미지  */
const character = document.querySelector('.character');

// 화면에서 마우스 클릭 시 캐릭터 이동 시작
document.addEventListener('mousedown', () => {
  // 마우스 움직임에 따라 캐릭터 이동
  document.addEventListener('mousemove', onMouseMove);

  // 화면에서 마우스 클릭을 떼면 캐릭터 이동이 멈춤
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
  });
});

/**
 * 마우스 움직임에 따른 처리
 */
function onMouseMove(event) {
  character.style.left = `${event.clientX - 100}px`;
  character.style.top = `${event.clientY - 100}px`;
}
