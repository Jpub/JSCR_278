const myCircle = document.querySelector('#myCircle');
let time = 0;

animate();

function animate() {
  // 시간 변화
  time += 0.1;
  // 색상 변화
  myCircle.style.fill = `hsl(0, 100%, ${time}%)`;

  // 목표 값까지 반복
  if (time < 50) {
    requestAnimationFrame(animate);
  }
}
