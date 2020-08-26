// 3초 후 처리가 실행
setTimeout(() => {
  const childElement = document.querySelector('#child');
  // #child 요소 제거
  childElement.remove();
}, 3000);
