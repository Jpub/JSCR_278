// 해시 변경 이벤트 감시
window.addEventListener('hashchange', handleHashChange);
handleHashChange();

function handleHashChange() {
  // 변경 후의 해시 값
  const hash = location.hash;
  document.querySelector('.log').innerHTML = `현재 앵커는 「${hash}」입니다.`;
}
