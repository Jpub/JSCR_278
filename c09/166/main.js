// 체크박스 참조
const cb = document.querySelector('#cbA');
cb.addEventListener('change', (event) => {
  // 체크박스 상태 확인
  const value = event.target.checked;

  // 화면에 표시
  const log = `체크박스 A는 ${value}로 변경되었습니다.`;
  document.querySelector('.log').innerHTML = log;
});
