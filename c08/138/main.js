// 각 .box 요소 루프 처리
document.querySelectorAll('.box').forEach((targetBox) => {
  // .box 요소 클릭 시 처리 작업
  targetBox.addEventListener('click', () => {
    // 클릭한 .box 요소의 텍스트 표시
    alert(`${targetBox.textContent} 클릭`);
  });
});
