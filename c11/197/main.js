const audio = document.querySelector('#myAudio');
audio.addEventListener('loadedmetadata', () => {
  console.log(audio.duration); // 사운드 길이(초 단위)
});

document.querySelector('#btnPlay').addEventListener('click', () => {
  audio.play();
});
document.querySelector('#btnPause').addEventListener('click', () => {
  audio.pause();
});
