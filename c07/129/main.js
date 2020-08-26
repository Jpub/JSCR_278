document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('콘텐츠 표시 상태');
    return;
  }

  if (document.visibilityState === 'hidden') {
    console.log('콘텐츠 비활성화(백그라운드화) 상태');
  }
});
