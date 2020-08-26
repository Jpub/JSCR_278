const btn = document.querySelector('button');
btn.addEventListener('click', notify);

// 알림 기능 확인
function notify() {
  switch (Notification.permission) {
    case 'default': // 기본 상태
      // 알림 허가 요청
      Notification.requestPermission();
      break;
    case 'granted': // 알림 허가
      // 알림 허가 후 Notification 알림
      new Notification('안녕하세요.');
      break;
    case 'denied': // 알림 거부
      alert('알림이 거부되었습니다.');
      break;
  }
}
