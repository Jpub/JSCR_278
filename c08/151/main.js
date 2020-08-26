setTimeout(() => {
  // 교체 전 박스 요소
  const oldBox = document.querySelector('.old-box');
  // 새로운 박스 요소. div 요소 생성 후 「새로운 박스」 텍스트 노드를 추가
  const newBox = document.createElement('div');
  newBox.textContent = '새로운 박스';
  // new-box, box CSS 클래스 추가
  newBox.classList.add('new-box', 'box');
  // 새로운 박스로 교체
  oldBox.replaceWith(newBox);
}, 3000);
