const cbA = document.querySelector('#myColor');
cbA.addEventListener('change', (event) => {
  // 선택된 색상 확인하기
  const value = event.target.value;

  // 화면에 표시
  const log = `${value} 색상이 선택되었습니다.`;
  const logEl = document.querySelector('.log');
  logEl.innerHTML = log;
  logEl.style.backgroundColor = value;
});
