self.addEventListener('fetch', (event) => {
  console.log('데이터 통신 발생', event.request);
});
