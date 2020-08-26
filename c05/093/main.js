setInterval(() => {
  // 현재 시간 가져오기
  const now = new Date();

  // 시간을 단위로 추출
  const h = now.getHours(); // 時間(0〜23)
  const m = now.getMinutes(); // 分(0〜59)
  const s = now.getSeconds(); // 秒(0〜59)

  // 시계 바늘의 각도 반영

  // 시침(시침은 시와 함께 분의 각도도 고려)
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  // 분침
  const degM = m * (360 / 60);
  // 초침
  const degS = s * (360 / 60);

  const elementH = document.querySelector('.lineHour');
  const elementM = document.querySelector('.lineMin');
  const elementS = document.querySelector('.lineSec');

  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 50);
