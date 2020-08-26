// 접속 상태 확인
const isOnline = navigator.onLine;
if (isOnline === true) {
  console.log('온라인 상태입니다.');
} else {
  console.log('오프라인 상태입니다.');
}

// 온라인 상태가 되면 실행되는 이벤트
window.addEventListener('online', () => {
  console.log('온라인 상태입니다.');
});

// 오프라인 상태가 되면 실행되는 이벤트
window.addEventListener('offline', () => {
  console.log('️오프라인 상태입니다.');
});

// 접속 상태 확인
if (isOnline === true) {
  log('온라인 상태입니다.');
} else {
  log('오프라인 상태입니다.');
}

// 온라인 상태가 되면 실행되는 이벤트
window.addEventListener('online', () => {
  log('📶온라인 상태입니다.');
});

// 오프라인 상태가 되면 실행되는 이벤트
window.addEventListener('offline', () => {
  log('❎️오프라인 상태입니다.');
});

function log(message) {
  document.querySelector('.log').innerHTML = message;
}
