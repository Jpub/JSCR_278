// 3초 후 처리를 실행
setTimeout(() => {
  const parentElement = document.querySelector('#parent');
  const childElement = document.querySelector('#child');
  // #child 요소 제거
  parentElement.removeChild(childElement);
}, 3000);
