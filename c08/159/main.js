const information = document.querySelector('#information');

// color 속성 변경
information.style.color = 'white';
// font-size 속성 변경
information.style.fontSize = '70px';
// font-weight 속성 변경
information.style.fontWeight = '600';

const strokeColor = '#c52b84';
// webkit-text-stroke 속성 변경
information.style.webkitTextStroke = `2px ${strokeColor}`;
// text-stroke 속성 변경
information.style.textStroke = `2px ${strokeColor}`;
// text-shadow 속성 변경
information.style.textShadow = `7px 7px 0 #bf3384`;
