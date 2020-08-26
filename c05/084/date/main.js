const date = new Date();
const hour = date.getHours(); // 시간
const minutes = date.getMinutes(); // 분
const seconds = date.getSeconds(); // 초

const label = `${hour}시 ${minutes}분 ${seconds}초`;

// HTML에 문자열 넣기
document.querySelector('#log').innerHTML = `지금은 ${label}입니다.`;
