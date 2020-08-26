// 진위값 다루기
const a = 10;
const b = 20;

console.log(a < b); // 결과：true
console.log(a > b); // 결과：false

// iOS 여부 확인
const isIOs = navigator.userAgent.includes('iPhone');

if (isIOs) {
  // iOS용 처리 작업
}

// 「안녕하세요. 제이펍」 알림창 표시
const userName = '제이펍';
if (userName) {
  alert(`안녕하세요. ${userName}`);
}
// address가 ‘ ‘ 이므로 알림창을 표시하지 않음
const address = '';
if (address) {
  console.log(`당신은 ${address}에 살고 계시네요.`);
}
