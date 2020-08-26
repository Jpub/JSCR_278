loadAndPlay();

let source;

// 재생 처리
async function loadAndPlay() {
  const context = new AudioContext();

  // 사운드 파일 로딩
  const data = await fetch('assets/music.mp3');
  // ArrayBuffer로 사용
  const buffer = await data.arrayBuffer();
  // 오디오 데이터로 변환
  const decodedBuffer = await context.decodeAudioData(buffer);

  // 소스 작성
  source = context.createBufferSource();
  // 소스에 오디오 데이터 할당
  source.buffer = decodedBuffer;
  // 스피커 연결
  source.connect(context.destination);
  // 재생 시작
  source.start(0);
}

// 정지 기능
function stop() {
  // 재생 정지
  source.stop();
}
