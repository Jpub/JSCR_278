// 다운로드 버튼 클릭 시 작업
document.querySelector('#btnSave').addEventListener('click', saveFile);

// 파일로 저장
function saveFile() {
  // 파일명
  const fileName = `mySvg.svg`;
  // SVG 요소 가져오기
  const content = document.querySelector('#mySvg').outerHTML;
  // 데이터 준비
  const dataUrl = 'data:image/svg+xml,\n' + encodeURIComponent(content);

  // BOM의 문자 깨짐 방지
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  const blob = new Blob([bom, content], { type: 'text/plain' });

  if (window.navigator.msSaveBlob) {
    // for IE
    window.navigator.msSaveBlob(blob, fileName);
  } else if (window.URL && window.URL.createObjectURL) {
    // for Firefox, Chrome, Safari
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    // for Safari
    window.open(dataUrl, '_blank');
  }
}
