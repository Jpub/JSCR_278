// 캔버스 요소 참조
const canvas = document.querySelector('#my-canvas');
// 컨텍스트 가져오기
const context = canvas.getContext('2d');
// 선의 굵기 지정
context.lineWidth = 3;
// 선의 색상 지정
context.strokeStyle = 'red';
// 정사각형 생성
context.strokeRect(0, 0, 100, 100);
