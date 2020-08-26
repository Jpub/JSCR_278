// 모든 .button 요소 처리
document.querySelectorAll('.button').forEach((button) => {
  // .button 요소 클릭 시 처리 설정
  button.addEventListener('click', () => {
    // .button 다음 요소의 클래스 전환
    button.nextElementSibling.classList.toggle('show');
  });
});
