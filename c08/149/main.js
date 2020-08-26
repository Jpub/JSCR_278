setTimeout(() => {
  // 자식 노드를 포함하여 #myBox 요소 복제
  const clonedBox = document.querySelector('#myBox').cloneNode(true);
  document.querySelector('.container').appendChild(clonedBox);
}, 3000);
