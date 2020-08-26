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

    // 새로운 배열에 색 지정新しい配列に色を指定
    monoArr[i * 4 + 0] = color;
    monoArr[i * 4 + 1] = color;
    monoArr[i * 4 + 2] = color;
    monoArr[i * 4 + 3] = a;
  }

  // 캔버스 요소 참조
  const canvas2 = document.querySelector('#canvas-effected');
  // 컨텍스트 가져오기
  const context2 = canvas2.getContext('2d');
  // 컨텍스트에 새로운 화소 정보 할당
  context2.putImageData(monoImageData, 0, 0);
};
// 이미지 로딩 시작
img.src = 'sample.jpg';

const btnDownload = document.querySelector('#btnDownload');
btnDownload.addEventListener('click', () => {
  // 캔버스 요소 참조
  const canvas2 = document.querySelector('#canvas-effected');

  // 파일 형식과 파일명 지정
  const mimeType = 'image/png';
  const fileName = 'download.png';

  // Base64 문자열 가져오기
  const base64 = canvas2.toDataURL(mimeType);

  // Base64 문자열을 Uint8Array로 변환
  const bin = atob(base64.replace(/^.*,/, ''));
  const buffer = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    buffer[i] = bin.charCodeAt(i);
  }

  // Blob 생성
  const blob = new Blob([buffer.buffer], {
    type: mimeType
  });

  // 이미지 다운로드
  if (window.navigator.msSaveBlob) {
    // for IE
    window.navigator.msSaveBlob(blob, fileName);
  } else if (window.URL && window.URL.createObjectURL) {
    // for Firefox, Chrome, Safari
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    // for Other
    window.open(base64, '_blank');
  }
});
