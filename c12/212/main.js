// 캔버스 요소 참조 
const canvas = document.querySelector('#my-canvas');
// 컨텍스트 가져오기
const context = canvas.getContext('2d');

// Image 인스턴스 생성
const img = new Image();
// 이미지 로딩 후 처리
img.onload = () => {
  // 컨텍스트로 캔버스에 그리기
  context.drawImage(img, 0, 0);
};
// 이미지 로딩 시작
img.src = 'sample.jpg';
