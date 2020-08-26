if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('serviceworker.js')
    .then((registration) => {
      // 등록 성공
      console.log('ServiceWorker 등록 성공');
    })
    .catch((error) => {
      // 등록 실패
      console.log('ServiceWorker 등록 실패: ', error);
    });
} else {
  console.log('ServiceWorker 미대응');
}
