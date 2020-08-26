const STAGE_W = 300; // 가로 길이
const STAGE_H = 300; // 세로 길이
const CENTER_X = STAGE_W / 2; // 중심 X 좌표
const CENTER_Y = STAGE_H / 2; // 중심 Y 좌표
const MAX = 150; // 루프 횟수

// 변수 초기화
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let n = 0; // カウント

// 애니메이션 시작
tick();

function tick() {
  // 이미지 리셋
  context.clearRect(0, 0, STAGE_W, STAGE_H);

  // 변수
  let oldX = CENTER_X;
  let oldY = CENTER_Y;

  // 모양 그리기
  for (let i = 0; i < MAX; i++) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'hsl(' + ((i / MAX) * 360 + n * 4000) + ', 100%, 50%)';
    context.moveTo(oldX, oldY);
    context.lineTo((oldX = CENTER_X + i * Math.cos(i + i * n)), (oldY = CENTER_Y + i * Math.sin(i + i * n)));
    context.stroke();
  }

  // 카운트
  n += 0.00025;

  requestAnimationFrame(tick);
}

// JPEG 이미지 가져오기
const btnJpeg = document.querySelector('#btnJpeg');
btnJpeg.addEventListener('click', () => {
  const data = canvas.toDataURL('image/jpeg');
  cloneToImage(data);
});

// PNG 이미지 가져오기
const btnPng = document.querySelector('#btnPng');
btnPng.addEventListener('click', () => {
  const data = canvas.toDataURL('image/png');
  cloneToImage(data);
});

// WebP 이미지 가져오기
const btnWebp = document.querySelector('#btnWebp');
btnWebp.addEventListener('click', () => {
  const data = canvas.toDataURL('image/webp');
  cloneToImage(data);
});

// img 요소에 DataURL 문자열 대입
function cloneToImage(data) {
  document.querySelector('#myImg').src = data;
}
