// 캔버스 요소 참조
const canvas1 = document.querySelector('#canvas-original');
// 컨텍스트 가져오기
const context1 = canvas1.getContext('2d');
// Image 인스턴스 생성
const img = new Image();
// 이미지 로딩 후 처리
img.onload = () => {
  // 컨텍스트로 캔버스에 그리기
  context1.drawImage(img, 0, 0);

  // 화소 정보 가져오기
  const imageData = context1.getImageData(0, 0, 150, 150);
  const data = imageData.data;

  const monoImageData = new ImageData(150, 150);

  const monoArr = monoImageData.data;
  for (let i = 0; i < data.length / 4; i += 1) {
    // 화소 정보 가져오기
    const r = data[i * 4 + 0];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const a = data[i * 4 + 3];

    // 평균값 구하기(연산 간략화를 위함)
    const color = (r + g + b) / 3;

    // 새로운 배열에 색 지정
    monoArr[i * 4 + 0] = color;
    monoArr[i * 4 + 1] = color;
    monoArr[i * 4 + 2] = color;
    monoArr[i * 4 + 3] = a;
  }

  //캔버스 요소 참조
  const canvas2 = document.querySelector('#canvas-effected');
  // 컨텍스트 가져오기
  const context2 = canvas2.getContext('2d');
  // 컨텍스트에 새로운 화소 정보 할당
  context2.putImageData(monoImageData, 0, 0);
};
// 이미지 로딩 시작
img.src = 'sample.jpg';
