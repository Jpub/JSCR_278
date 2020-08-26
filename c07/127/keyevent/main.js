document.querySelector('.textarea').addEventListener('keydown', () => {
  console.log('키가 눌러졌습니다.');
});
document.querySelector('.textarea').addEventListener('keypress', () => {
  console.log('문자가 입력되었습니다.');
});
document.querySelector('.textarea').addEventListener('keyup', () => {
  console.log('키 눌림이 해제되었습니다.');
});
