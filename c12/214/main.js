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

// 마우스 이동 시
canvas.addEventListener('mousemove', (event) => {
  // 마우스 좌표 가져오기
  const x = event.layerX;
  const y = event.layerY;
  // ImageData 가져오기
  const imageData = context.getImageData(x, y, 1, 1);
  // 화소 배열 가져오기
  const data = imageData.data;
  const r = data[0]; // 빨
  const g = data[1]; // 녹
  const b = data[2]; // 파
  const a = data[3]; // 알파
  // 문자열로 색 정보 다루기
  const color = `rgba(${r},${g},${b},${a})`;

  const el = document.querySelector('.log');
  // 배경색 지정
  el.style.background = color;
  // 정보를 문자로 표시
  el.textContent = color;
});
